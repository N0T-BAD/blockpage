import React from 'react'
import style from '@/components/pages/authorregister/AuthorRegisterTopSection.module.css'
import AuthorRegister from './AuthorRegister'

export default function AuthorRegisterTopSection() {
  return (
    <section className={style.AuthorRegisterTopSection}>
      <AuthorRegister />
    </section>
  )
}
