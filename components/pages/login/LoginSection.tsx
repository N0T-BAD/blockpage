import React from 'react'
import LoginBox from './LoginBox'
import style from '@/components/pages/login/LoginSection.module.css'

export default function LoginSection() {
  return (
    <section className={style.LoginSection}>
      <LoginBox />
    </section>
  )
}
