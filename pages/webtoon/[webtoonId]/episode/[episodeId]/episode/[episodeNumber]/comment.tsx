import { useEffect, useState } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"

import CommentLayout from "@/components/layouts/CommentLayout"
import CommentInputSection from "@/components/pages/comment/CommentInputSection"
import GetCommentSection from "@/components/pages/comment/GetCommentSection"
import { CommentDataType } from "@/types/commentDataType"
import { userDataType } from "@/types/storeDataType"

function Comment(props: { commentData: CommentDataType[], count: number }) {

  const { data: session } = useSession();
  const [userData, setUserData] = useState<userDataType>({
    nickname: '',
    profileImage: '',
    profileSkin: '',
    role: '',
    creatorNickname: '',
  });
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
      setUserData(res.data.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <CommentInputSection userData={userData} count={props.count} />
      <GetCommentSection commentData={commentData} userData={userData} />
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
  console.log(commentData)

  return {
    props: { commentData, count }
  }
}