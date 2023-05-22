import React from 'react'
import AuthorWorksList from '@/components/pages/authorworkslist/AuthorWorksList'
import style from '@/components/pages/authorworkslist/AuthorWorksListMiddleSection.module.css'

export default function AuthorWorksListMiddleSection() {
  return (
    <section className={style.AuthorWorksListMiddleSection}>
      <AuthorWorksList />
    </section>
  )
}
