import React from 'react'
import style from '@/components/pages/listview/ListviewSection.module.css'
import WebtoonCard from '@/components/ui/WebtoonCard'

export default function ListviewSection() {
  return (
    <section className={style.listviewSection}>
      <WebtoonCard />
    </section>
  )
}