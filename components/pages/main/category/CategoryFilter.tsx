import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { categoryMenuData } from '@/data/staticMenuData'
import { CategoryMenuDataType } from '@/types/categoryDataType'
import style from '@/components/pages/main/category/CategoryFilter.module.css'
import { useSession } from 'next-auth/react'
import axios from 'axios'

export default function CategoryFilter(props: { active: string, setActive: React.Dispatch<React.SetStateAction<string>>, handleMainCategory: (name: string) => void }) {

  //   const [view, setView] = useState<boolean>(false)
  //   const [categoryData, setCategoryData] = useState<CategoryMenuDataType[]>()
  //   useEffect(() => {
  //     setCategoryData(categoryMenuData)
  //   }, [])

  //   return (
  //     <section className={style.categoryWrap}>
  //       {
  //         categoryData && categoryData.map((item: CategoryMenuDataType) => {
  //           return (

  //             <CategoryItem key={item.id} data={item} view={view} setView={setView} />

  //           )
  //         })
  //       }
  //     </section>
  //   )
  // }

  // const CategoryItem = (props: { data: CategoryMenuDataType, view: boolean, setView: Dispatch<SetStateAction<boolean>> }) => {

  //   const [isView, setIsView] = useState<boolean>(props.view)

  //   useEffect(() => {
  //     if (props.data.id === 2) {
  //       setIsView(!props.view)
  //     } else {
  //       setIsView(props.view)
  //     }
  //   }, [props.data.id, props.view])

  //   const handleView = () => {
  //     console.log('handleView')
  //     props.setView(!props.view)
  //   }

  return (
    <>
      {/* <p>요일별 웹툰</p>
      <div className={style.categoryRow}>
        {categoryMenuData.map((data) => (
          <div className={style.item} key={data.id} onClick={() => props.handleMainCategory(data.name)}>
            <p>{data.name}</p>
          </div>
        ))}
      </div> */}
    </>

    // <>
    //   <div className={props.data.id === 2 ? `${style.categoryRow} ${style.blue}` : style.categoryRow}>
    //     <h2 onClick={handleView} className={isView ? style.active : ''}>
    //       {props.data.name}
    //     </h2>
    //     <div className={isView ? style.innerContainer : `${style.innerContainer} ${style.active}`}>
    //       {
    //         props.data.data.map((data: CategoryDataType) => (
    //           <div className={style.item} key={data.id}>
    //             <p>{data.name}</p>
    //           </div>
    //         ))
    //       }
    //     </div>
    //   </div>
    // </>
  )
}