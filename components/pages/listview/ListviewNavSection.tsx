import React from 'react'
import style from '@/components/pages/listview/ListviewNavSection.module.css'
import ListviewNavContent from './ListviewNavContent'

export default function ListviewNav() {
  return (
    <section className={style.navSection}>
      <ListviewNavContent />
    </section>
  )
}