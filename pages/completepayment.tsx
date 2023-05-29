import TotalLayout from "@/components/layouts/TotalLayout"
import { NextPageWithLayout } from "@/pages/_app"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"


const Chargereult: NextPageWithLayout = () => {

    const router = useRouter();

    // const handlego = () => {
    //     axios.post('https://blockpage.site/block-service/v1/blocks?type=cash', {
    //         pgToken: pgToken,
    //     }, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     }
    //     )
    //         .then((res) => {
    //             if (res) {
    //                 router.push('/block')
    //             }
    //         })
    // }


    return (
        <>
            <p>충전이 완료 되었습니다.</p>
            <button>확인</button>
        </>
    )
}

Chargereult.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <TotalLayout>
            {page}
        </TotalLayout>
    )
}

export default Chargereult

