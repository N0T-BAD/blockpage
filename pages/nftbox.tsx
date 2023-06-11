import { NextPageWithLayout } from "@/pages/_app"
import TotalLayout from "@/components/layouts/TotalLayout"
import NFTStorageBox from "@/components/pages/nftbox/NFTStorageBox"

const Nftbox: NextPageWithLayout = () => {
  return (
    <>
      <NFTStorageBox />
    </>
  )
}

Nftbox.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <TotalLayout>
      {page}
    </TotalLayout>
  )
}

export default Nftbox

Nftbox.auth = true;