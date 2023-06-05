import { authorWorksListCategoryData } from '@/data/authorWorksListData'
import React, { useState } from 'react'
import style from '@/components/pages/authorworkslist/AuthorListCategory.module.css'

export default function AuthorListCategory({ active, setActive, defaultActive }: { active: string, setActive: Function, defaultActive: string }) {


  const handleCategoryClick = (name: string) => {
    setActive(name);
  }

  return (
    <div className={style.HistoryCategory}>
      <nav>
        <ul>
          {authorWorksListCategoryData.map((category) => (
            <li
              key={category.id}
              className={category.name === (active || defaultActive) ? `${style.active}` : ""}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
