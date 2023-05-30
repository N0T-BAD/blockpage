import axios from "axios"
import { GetServerSideProps } from "next"

import MenuCategoryLayout from "@/components/layouts/MenuCategoryLayout"
import ListviewSection from "@/components/pages/listview/ListviewSection"
import { webtoonListGetDataType } from "@/types/webtoonDataType"

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const genre = context.query.genre;
  console.log(genre);
  console.log(context.query);

  const res = await axios.get(`https://blockpage.site/webtoon-service/v1/webtoons?genre=${0}`)
  console.log(res.data)
  const data = res.data;
  return {
    props: {
      data: data,
    }
  }

  // server에서 데이터 불러와서 서버사이드에서 렌더링하기 위해 데이터 받아오기
  // const res = fetch(`http://localhost:3000/api/category/${categoryName}`);
  // const data = await res.data.json();

  // const week = useState<number>(0);


  // const dummyData = webtoonListData;
  // if (categoryName === 'week') {
  //   const data = dummyData.filter((item) => item.week !== '');
  //   return {
  //     props: { data }
  //   }
  // } else if (categoryName === 'genre') {
  //   const data = dummyData.filter((item) => item.week !== '');
  //   return {
  //     props: { data }
  //   }
  // } else if (categoryName === 'best') {
  //   const data = dummyData.filter((item) => item.week !== '');
  //   return {
  //     props: { data }
  //   }
  // }
}

function Category(props: { data: webtoonListGetDataType }) {
  return (
    <ListviewSection data={props.data} />
  )
}

Category.getLayout = function getLayout(genre: React.ReactElement) {
  return (
    <MenuCategoryLayout>
      {genre}
    </MenuCategoryLayout>
  )
}

export default Category