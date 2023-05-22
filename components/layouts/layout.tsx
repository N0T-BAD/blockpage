import { useRouter } from "next/router"
import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/header/Header"

export default function Layout(props: { children: React.ReactNode }) {

  const router = useRouter();

  return (
    <>
      <Header />
      <div>{props.children}</div>
      {
        router.pathname === '/' ?
          <Footer />
          :
          <></>
      }
    </>
  )
}