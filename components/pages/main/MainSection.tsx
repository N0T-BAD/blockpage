import React from 'react'
import Image from 'next/image'

export default function MainSection() {
  return (
    <section style={{width: '100%', padding: '1rem', marginTop: '5rem', marginBottom: '10rem'}}>
      <Image src="/assets/images/wt/main.png" alt="main" width={347} height={1100} />
    </section>
  )
}
