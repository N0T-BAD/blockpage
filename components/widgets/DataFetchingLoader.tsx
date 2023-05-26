import React from 'react'
import style from '@/components/widgets/DataFetchingLoader.module.css'
import Image from 'next/image'

export default function DataFetchingLoader(props:{text:string}) {
  return (
    <div className={style.loaderContainer}>
      <div className={style.loader}>
        <Image src='/assets/images/icons/loading.svg' alt='loading' width={30} height={30} />
      </div>
    </div>
  )
}
