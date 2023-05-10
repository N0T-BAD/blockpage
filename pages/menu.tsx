import { NextPageWithLayout } from "./_app"

import Layout from "@/components/layouts/layout"
import Menu from "@/components/pages/menu/Menu"

const menu: NextPageWithLayout = () => {

  return (
    <>
      <Menu />
    </>
  )
}

menu.getLayout = function getLayout(menu: React.ReactElement) {
  return (
    <Layout>
      {menu}
    </Layout>
  )
}

export default menu

