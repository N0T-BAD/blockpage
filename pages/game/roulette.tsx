import RouletteGame from '@/components/games/RouletteGame'
import Layout from '@/components/layouts/layout'
import React from 'react'
import { NextPageWithLayout } from '../_app'

const Roulette: NextPageWithLayout = () => {

  return (
    <>
      <RouletteGame />
    </>
  )
}

Roulette.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Roulette;

Roulette.auth = true