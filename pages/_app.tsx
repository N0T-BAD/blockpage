import '@/styles/globals.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from 'next-auth/react'
import type { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import RatingModal from '@/components/modals/RatingModal'
import DataFetchingLoader from '@/components/widgets/DataFetchingLoader'
import LoginGuide from '@/components/modals/LoginGuide'
import { useRouter } from 'next/router'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
  auth?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        {
          Component.auth ? 
            <Auth>
              {getLayout(<Component {...pageProps} />)}
            </Auth>
          : 
            getLayout(<Component {...pageProps} />)
        }
      </RecoilRoot>
    </SessionProvider>
  )
}

function Auth({ children: page }: { children: ReactNode }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession()
  const router = useRouter();
  if( status === "unauthenticated" ) {
    return <LoginGuide />
  }
  if (status === "loading") {
    return <DataFetchingLoader text={'로그인 정보를 확인중입니다.'} />
  }

  return <>{page}</>
}