import React from 'react'
import style from '@/components/pages/listview/ListviewNavSection.module.css'
import ListviewNavContent from '@/components/pages/listview/ListviewNavContent'

export default function ListviewSubNavSection() {
  return (
    <section className={style.navSection}>
      <ListviewNavContent />
    </section>
  )
}