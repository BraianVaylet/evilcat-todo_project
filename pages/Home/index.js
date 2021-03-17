// components
import HomeTemplate from "components/templates/HomeTemplate"
// next
import Head from "next/head"

/**
 * Home Page
 * @component
 * @description Componente page Home
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio / EvilCat</title>
      </Head>
      <HomeTemplate />
    </>
  )
}
