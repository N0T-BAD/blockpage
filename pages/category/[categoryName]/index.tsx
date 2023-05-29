import MenuCategoryLayout from "@/components/layouts/MenuCategoryLayout"
import ListviewSection from "@/components/pages/listview/ListviewSection"
import { webtoonListData } from "@/data/dummy/webtoonData"

import { WebToonListDataType } from "@/types/webtoonDataType"
import axios from "axios"
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { categoryName } = context.query;
  const { week } = context.query;

  console.log(week);

  // axios(`https://blockpage.site/webtoon-service/v1/webtoons?weekdays=${week}`)
  //   .then((res) => {
  //     console.log(res.data)
  //     const data = res.data;
  //     return {
  //       props: { data }
  //     }
  //   })
  //   .catch((e) => {
  //     console.log(`${categoryName} 실패`)
  //   });

  // server에서 데이터 불러와서 서버사이드에서 렌더링하기 위해 데이터 받아오기
  // const res = fetch(`http://localhost:3000/api/category/${categoryName}`);
  // const data = await res.data.json();

  // const week = useState<number>(0);


  const dummyData = webtoonListData;
  if (categoryName === 'week') {
    const data = dummyData.filter((item) => item.week !== '');
    return {
      props: { data }
    }
  } else if (categoryName === 'genre') {
    const data = dummyData.filter((item) => item.week !== '');
    return {
      props: { data }
    }
  } else if (categoryName === 'best') {
    const data = dummyData.filter((item) => item.week !== '');
    return {
      props: { data }
    }
  }
  const data = "";
  return {
    props: { data }
  }
}

function Category(props: { data: WebToonListDataType[] }) {

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