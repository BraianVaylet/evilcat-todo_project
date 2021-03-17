import { useContext } from "react"
// ui
import { Divider, Text } from "@chakra-ui/layout"
import { Accordion } from "@chakra-ui/accordion"
// components
import Item from "components/molecules/Item"
import ItemInactive from "components/molecules/ItemInactive"
// context
import { ItemsContext } from "context"

/**
 * ItemsList Component
 * @component
 * @description Componente ItemsList. Listado de Items
 */
const ItemsList = () => {
  const { itemsCheckTrue, itemsCheckFalse, itemsIsActiveFalse } = useContext(
    ItemsContext
  )

  return (
    <Accordion allowToggle w="100%">
      {itemsCheckFalse.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <Divider m="4rem 0" size="2rem" colorScheme="blue" />
      {itemsCheckTrue.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <Divider m="4rem 0" size="2rem" colorScheme="blue" />
      <Text fontSize="1.2rem" p=".5rem" color="gray.400">
        Inactivos
      </Text>
      {itemsIsActiveFalse.map((item) => (
        <ItemInactive key={item.id} item={item} />
      ))}
    </Accordion>
  )
}

export default ItemsList
