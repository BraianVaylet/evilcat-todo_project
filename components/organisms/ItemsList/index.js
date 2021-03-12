import { useEffect, useState } from "react"
import PropTypes from "prop-types"
// ui
import { Divider, Flex } from "@chakra-ui/layout"
// components
import Item from "components/molecules/Item"
// utils
import { ItemPropTypes } from "utils/propTypes"

/**
 * ItemsList Component
 * @component
 * @description Componente ItemsList. Listado de Items
 */
const ItemsList = ({ items }) => {
  const [itemsCheck, setItemsCheck] = useState([])
  const [itemsCheckFalse, setItemsCheckFalse] = useState([])
  useEffect(() => {
    const check = items.filter((item) => item.check === true)
    const checkFalse = items.filter((item) => item.check === false)
    console.log("check", check)
    console.log("checkFalse", checkFalse)
    setItemsCheck(check)
    setItemsCheckFalse(checkFalse)
  }, [items])

  return (
    <Flex direction="column" align="center" justify="flex-start" w="100%">
      {itemsCheck.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <Divider />
      {itemsCheckFalse.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Flex>
  )
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ItemPropTypes)),
}

export default ItemsList
