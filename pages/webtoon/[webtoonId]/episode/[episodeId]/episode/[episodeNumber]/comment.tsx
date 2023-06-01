import CommentLayout from "@/components/layouts/CommentLayout"
import { NextPageWithLayout } from "@/pages/_app"

import CommentInputSection from "@/components/pages/comment/CommentInputSection"
import GetCommentSection from "@/components/pages/comment/GetCommentSection"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"
import { CommentDataType, CommentUserDataType } from "@/types/commentDataType"

function Comment(props: { commentData: CommentDataType }) {

  const { data: session } = useSession();
  const [nickNameData, setNickNameData] = useState<CommentUserDataType>({
    data: {
      nickname: '',
    },
  });
  const [commentData, setCommentData] = useState<CommentDataType>({
    data: [
      {
        episodeId: 0,
        commentId: 0,
        dateTime: '',
        parentsId: '',
        parentsNickname: '',
        content: '',
        likesCount: 0,
        dislikesCount: 0,
        replyCount: 0,
        report: false,
        erase: false,
        pin: false,
      }
    ]
  });

  useEffect(() => {
    setCommentData(props.commentData);
  }, []);

  if (session) {
    axios.get(`https://blockpage.site/member-service/v1/members?type=detail`, {
      headers: {
        memberId: session?.email || '',
      },
    }).then((res) => {
      setNickNameData(res.data.data.nickname);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <CommentInputSection nickNameData={nickNameData} />
      <GetCommentSection commentData={commentData} nickNameData={nickNameData} />
    </>
  )
}

Comment.getLayout = function getLayout(comment: React.ReactElement) {
  return (
    <CommentLayout>
      {comment}
    </CommentLayout>
  )
}

export default Comment

export async function getServerSideProps(context: any) {
  const { episodeId } = context.query;

  const res = await axios.get(`https://blockpage.site/comment-service/v1/comments/${episodeId}`)
  const commentData = res.data;

  return {
    props: { commentData }
  }
}