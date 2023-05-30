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