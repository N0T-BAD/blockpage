import { GetServerSideProps } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]"
import axios from "axios"

import ArchiveLayout from "@/components/layouts/ArchiveLayout"
import ArchiveDataSection from "@/components/pages/webtoonarchive/ArchiveDataSection"
import { listviewDataType } from "@/types/listviewDataType"
import DataFetchingLoader from "@/components/widgets/DataFetchingLoader"

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { archiveName } = context.query;
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    if (archiveName === 'favorite') {
      const res = await axios.get(`https://blockpage.site/member-service/v1/interests`, {
        headers: {
          memberId: session?.email
        }
      })
      const data = res.data.data;
      return {
        props: { data }
      }
    }
    else if (archiveName === 'purchase') {
      const res = await axios.get(`https://blockpage.site/purchase-service/v1/purchases?type=episodeBMPaid`, {
        headers: { memberId: session.email }
      })
      const data = res.data.data;
      return {
        props: { data }
      }
    }
    else if (archiveName === 'history') {
      const res = await axios.get(`https://blockpage.site/purchase-service/v1/purchases?type=episodeBMFree`, {
        headers: { memberId: session.email }
      })
      const data = res.data.data;
      return {
        props: { data }
      }
    }
  }
  const data = "";
  return {
    props: { data }
  }
}

function WebtoonArchive(props: { data: listviewDataType[] }) {
  return (
    <>
      <ArchiveDataSection
        data={props.data}
      />
    </>
  )
}

WebtoonArchive.getLayout = function getLayout(history: React.ReactElement) {
  return (
    <ArchiveLayout>
      {history}
    </ArchiveLayout>
  )
}

export default WebtoonArchive

WebtoonArchive.auth = {
  loading: <DataFetchingLoader text="load" />,
  unauthorized: '/login',
}