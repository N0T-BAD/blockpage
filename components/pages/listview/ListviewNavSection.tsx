import React from 'react'
import style from '@/components/pages/listview/ListviewNavSection.module.css'
import ListviewNavContent from './ListviewNavContent'

export default function ListviewNavSection() {
  return (
    <section className={style.navSection}>
      <ListviewNavContent />
    </section>
  )
}