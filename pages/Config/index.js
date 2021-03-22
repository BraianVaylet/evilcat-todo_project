// components
import LayoutTemplate from "components/templates/LayoutTemplate"
import ConfigTemplate from "components/templates/ConfigTemplate"
// next
import Head from "next/head"

/**
 * Settings Page
 * @component
 * @description Componente page Settings
 */
const Config = () => {
  return (
    <>
      <Head>
        <title>Settings / EvilCat</title>
      </Head>
      <LayoutTemplate>
        <ConfigTemplate />
      </LayoutTemplate>
    </>
  )
}
export default Config
