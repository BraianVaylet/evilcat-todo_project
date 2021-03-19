// components
import LayoutTemplate from "components/templates/LayoutTemplate"
import SettingsTemplate from "components/templates/SettingsTemplate"
// next
import Head from "next/head"

/**
 * Settings Page
 * @component
 * @description Componente page Settings
 */
const Settings = () => {
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
export default Settings
