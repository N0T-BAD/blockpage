import RouletteGame from '@/components/games/RouletteGame'
import Layout from '@/components/layouts/layout'
import React from 'react'
import { NextPageWithLayout } from '../../_app'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import TotalLayout from '@/components/layouts/TotalLayout'

const Roulette: NextPageWithLayout = () => {

  return (
    <>
      <RouletteGame />
    </>
  )
}

Roulette.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <TotalLayout>
      {page}
    </TotalLayout>
  )
}

export default Roulette;

Roulette.auth = true