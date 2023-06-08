import RouletteGame from '@/components/games/RouletteGame'
import Layout from '@/components/layouts/layout'
import React from 'react'
import { NextPageWithLayout } from '../_app'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

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

export async function getServerSideProps(context: Params) {
  const gameId = parseInt(context.gameId);

  return {
    props: {
      gameId,
    },
  };
}

Roulette.auth = true