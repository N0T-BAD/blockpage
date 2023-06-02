import { useEffect, useState } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"

import CommentLayout from "@/components/layouts/CommentLayout"
import CommentInputSection from "@/components/pages/comment/CommentInputSection"
import GetCommentSection from "@/components/pages/comment/GetCommentSection"
import { CommentDataType } from "@/types/commentDataType"

function Comment(props: { commentData: CommentDataType[], count: number }) {

  const { data: session } = useSession();
  const [nickNameData, setNickNameData] = useState<string>('');
  const [commentData, setCommentData] = useState<CommentDataType[]>([]);
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
      <CommentInputSection nickNameData={nickNameData} count={props.count} />
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
  const commentData = res.data.data.commentViewList;
  const count = res.data.data.count;

  return {
    props: { commentData, count }
  }
}