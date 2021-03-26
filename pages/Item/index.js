// ui
import ItemTemplate from "components/templates/ItemTemplate"
// next
import Head from "next/head"

/**
 * Item Page
 * @component
 * @description Componente page Item
 */
const Item = () => {
  return (
    <>
      <Head>
        <title>Inicio / EvilCat</title>
      </Head>
      <ItemTemplate />
    </>
  )
}

export default Item
