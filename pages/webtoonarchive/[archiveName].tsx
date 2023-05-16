import ArchiveLayout from "@/components/layouts/ArchiveLayout"
import ArchiveDataSection from "@/components/pages/webtoonarchive/ArchiveDataSection"

import { webtoonListData } from "@/data/dummy/webtoonData"
import { WebToonListDataType } from "@/types/webtoonDataType"
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { archiveName } = context.query;
  console.log(archiveName);

  // server에서 데이터 불러와서 서버사이드에서 렌더링하기 위해 데이터 받아오기
  // const res = fetch(`http://localhost:3000/api/webtoonArchive/${archiveName}`);
  // const data = await res.data.json();
  const dummyData = webtoonListData;
  if (archiveName === 'history') {
    const data = dummyData.filter((item) => item.week !== '');
    return {
      props: { data }
    }
  }
  const data = dummyData;
  return {
    props: { data }
  }
}

function WebtoonArchive(props: { data: WebToonListDataType[] }) {
  return (
    // <ListviewSection data={props.data} />
    <ArchiveDataSection />
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