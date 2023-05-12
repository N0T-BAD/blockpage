import CategoryLayout from "@/components/layouts/CategoryLayout"
import ListviewNavSection from "@/components/pages/listview/ListviewNavSection"
import ListviewSection from "@/components/pages/listview/ListviewSection"

import { webtoonListData } from "@/data/dummy/webtoonData"
import { WebToonListDataType } from "@/types/webtoonDataType"
import { GetServerSideProps } from "next"

export const getServerSideProps:GetServerSideProps = async (context: any) => {
    const { categoryName } = context.query;
    console.log(categoryName);

    // server에서 데이터 불러와서 서버사이드에서 렌더링하기 위해 데이터 받아오기
    // const res = fetch(`http://localhost:3000/api/category/${categoryName}`);
    // const data = await res.data.json();
    const dummyData = webtoonListData;
    if( categoryName === 'week') {
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

function Category(props: { data: WebToonListDataType[]} ) {

    return (
        <ListviewSection data={props.data}/>
    )
}

Category.getLayout = function getLayout(week: React.ReactElement) {
  return (
    <CategoryLayout>
      {week}
    </CategoryLayout>
  )
}

export default Category

