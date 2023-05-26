import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"
import axios from "axios"
import { useRouter } from "next/router"

const chargeresult: NextPageWithLayout = () => {

    const router = useRouter();

    const pgToken = router.query.pg_token;
    console.log(pgToken)

    const handlego = async () => {
        axios.post('https://blockpage.site/block-service/v1/payments?type=kakao-approve', {
            pgToken: pgToken,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        )

            // axios.post('https://blockpage.site/block-service/v1/blocks?type=cash')
            .then((res) => {
                if (res) {
                    router.push('/completepayment')
                }
            })
    }


    return (
        <div>
            <p>충전 결과</p>
            <button onClick={handlego}>확인</button>
        </div>
    )
}

chargeresult.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default chargeresult

