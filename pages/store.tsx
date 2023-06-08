import TotalLayout from "@/components/layouts/TotalLayout";
import ProfileStore from "@/components/pages/store/ProfileStore";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import axios from "axios";
import { userDataType } from "@/types/storeDataType";

function Store(props: { data: userDataType }) {

  const data = props.data;

  return (
    <>
      <ProfileStore
        data={data}
      />
    </>
  )
}

Store.getLayout = function getLayout(store: React.ReactElement) {
  return (
    <TotalLayout>
      {store}
    </TotalLayout>
  )
}

export default Store

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  const res = await axios.get('https://blockpage.site/member-service/v1/members?type=detail', { headers: { memberId: session?.email }, })
  const data = res.data.data
  console.log(data)

  return {
    props: { data }
  }
}