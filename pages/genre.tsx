import { useState } from "react"
import { NextPageWithLayout } from "@/pages/_app"

import Layout from "@/components/layouts/layout"
import ListviewNavSection from "@/components/pages/listview/ListviewNavSection"
import ListviewSection from "@/components/pages/listview/ListviewSection"
import ListviewSubNavContent from "@/components/pages/listview/ListviewSubNavContent"

import { StaticNavData } from "@/types/staticDataType"
import { staticGenreNavData } from "@/data/staticMenuData"

const genre: NextPageWithLayout = () => {

  const [genreNavData] = useState<StaticNavData[]>(staticGenreNavData);

  return (
    <>
      <ListviewNavSection />
      <ListviewSubNavContent
        listType={genreNavData} />
      <ListviewSection />
    </>
  )
}

genre.getLayout = function getLayout(genre: React.ReactElement) {
  return (
    <Layout>
      {genre}
    </Layout>
  )
}

export default genre

