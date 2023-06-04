import RouletteGame from '@/components/games/RouletteGame'
import Layout from '@/components/layouts/layout'
import React from 'react'

export default function roulette() {
  return (
    <main>
      <RouletteGame />
    </main>
  )
}

roulette.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}