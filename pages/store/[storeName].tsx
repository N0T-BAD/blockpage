import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useRouter } from "next/router";
import axios from "axios";

import ProfileStore from "@/components/pages/store/ProfileStore";
import { userDataType } from "@/types/storeDataType";
import StoreLayout from "@/components/layouts/StoreLayout";
import NftStore from "@/components/pages/store/NftStore";

function Store(props: { data: userDataType }) {

  const router = useRouter();
  const { storeName } = router.query;
  const data = props.data;

  return (
    <>
      {
        storeName === 'profileSkin' &&
        <ProfileStore
          data={data}
        />
      }
      {
        storeName === 'nft' &&
        <NftStore
          data={data}
        />
      }

    </>
  )
}

Store.getLayout = function getLayout(store: React.ReactElement) {
  return (
    <StoreLayout>
      {store}
    </StoreLayout>
  )
}

export default Store

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const { storeName } = context.query;

  if (storeName === 'profileSkin') {
    const res = await axios.get('https://blockpage.site/member-service/v1/members?type=detail', { headers: { memberId: session?.email }, });
    const data = res.data.data;

    return {
      props: { data }
    }
  } else {
    const res = await axios.get(`https://blockpage.site/purchase-service/v1/products?type=nft`);
    const data = res.data.data;
    console.log(data);
    return {
      props: { data }
    }
  }
}