import MenuCategoryLayout from "@/components/layouts/MenuCategoryLayout"
import ListviewSection from "@/components/pages/listview/ListviewSection"
import { GetServerSideProps } from "next"

import { webtoonListData } from "@/data/dummy/webtoonData"
import { WebToonListDataType, webtoonListGetDataType } from "@/types/webtoonDataType"
import axios from "axios"

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { categoryName } = context.query;
  const { week } = context.query;
  console.log(week);

  // server에서 데이터 불러와서 서버사이드에서 렌더링하기 위해 데이터 받아오기
  // const res = fetch(`http://localhost:3000/api/category/${categoryName}`);
  // const data = await res.data.json();
  const res = await axios.get(`https://blockpage.site/webtoon-service/v1/webtoons?weekdays=0`)
  const data = res.data;
  return {
    props: {
      data: data,
    }
  }
  // const dummyData = webtoonListData;
}

function Category(props: { data: webtoonListGetDataType }) {
  return (
    <ListviewSection data={props.data} />
  )
}

Category.getLayout = function getLayout(week: React.ReactElement) {
  return (
    <MenuCategoryLayout>
      {week}
    </MenuCategoryLayout>
  )
}

export default Category