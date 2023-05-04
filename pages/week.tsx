import { useState } from "react"
import { NextPageWithLayout } from "./_app"

import Layout from "@/components/layouts/layout"
import ListviewNavSection from "@/components/pages/listview/ListviewNavSection"
import ListviewSection from "@/components/pages/listview/ListviewSection"
import ListviewSubNavContent from "@/components/pages/listview/ListviewSubNavContent"

import { StaticNavData } from "@/types/staticDataType"
import { staticWeekNavData } from "@/data/staticMenuData"

const week: NextPageWithLayout = () => {

  const [weekNavData] = useState<StaticNavData[]>(staticWeekNavData);

  return (
    <>
      <ListviewNavSection />
      <ListviewSubNavContent
        listType={weekNavData} />
      <ListviewSection />
    </>
  )
}

week.getLayout = function getLayout(week: React.ReactElement) {
  return (
    <Layout>
      {week}
    </Layout>
  )
}

export default week

