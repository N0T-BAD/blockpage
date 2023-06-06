import { GetServerSideProps } from "next"

import ArchiveLayout from "@/components/layouts/ArchiveLayout"
import ArchiveDataSection from "@/components/pages/webtoonarchive/ArchiveDataSection"

import { favoriteListContentData, historyListContentData, purchaseListContentData } from "@/data/dummy/listviewData"
import { listviewDataType } from "@/types/listviewDataType"
import axios from "axios"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]"

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { archiveName } = context.query;
  const session = await getServerSession(context.req, context.res, authOptions);
  // server에서 데이터 불러와서 서버사이드에서 렌더링하기 위해 데이터 받아오기
  // const res = fetch(`http://localhost:3000/api/webtoonArchive/${archiveName}`);
  // const data = await res.data.json();

  const dummyData = historyListContentData;
  if (archiveName === 'favorite') {
    const res = await axios.get(`https://blockpage.site/member-service/v1/interests`, {
      headers: {
        memberId: session?.email
      }
    })
    const data = res.data.data;
    console.log(data);
    return {
      props: { data }
    }
  } else if (archiveName === 'purchase') {
    const data = purchaseListContentData;
    return {
      props: { data }
    }
  }
  const data = dummyData;
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