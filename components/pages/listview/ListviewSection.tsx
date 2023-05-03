import React from 'react'
import style from '@/components/pages/listview/ListviewSection.module.css'
import ListviewContent from './ListviewContent'

export default function ListviewSection() {
  return (
    <section className={style.listviewSection}>
      <ListviewContent />
    </section>
  )
}