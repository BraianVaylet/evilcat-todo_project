// components
import LayoutTemplate from "components/templates/LayoutTemplate"
import SettingsTemplate from "components/templates/SettingsTemplate"
// next
import Head from "next/head"

/**
 * Config Page
 * @component
 * @description Componente page Config
 */
const Config = () => {
  return (
    <>
      <Head>
        <title>Settings / EvilCat</title>
      </Head>
      <LayoutTemplate>
        <SettingsTemplate />
      </LayoutTemplate>
    </>
  )
}
export default Config
