import { useEffect, useState } from "react"
import PropTypes from "prop-types"
// ui
import { Divider } from "@chakra-ui/layout"
// components
import Item from "components/molecules/Item"
// utils
import { ItemPropTypes } from "utils/propTypes"
import { Accordion } from "@chakra-ui/accordion"

/**
 * ItemsList Component
 * @component
 * @description Componente ItemsList. Listado de Items
 */
const ItemsList = ({ items }) => {
  const [itemsCheck, setItemsCheck] = useState([])
  const [itemsCheckFalse, setItemsCheckFalse] = useState([])

  useEffect(() => {
    setItemsCheck(handleFilterItems(true))
    setItemsCheckFalse(handleFilterItems(false))
  }, [items])

  const handleFilterItems = (status) =>
    items.filter((item) => item.check === status)

  return (
    <Accordion defaultIndex={[0]} allowMultiple w="100%">
      {itemsCheckFalse.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <Divider m="2rem 0" />
      {itemsCheck.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Accordion>
  )
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ItemPropTypes)),
}

export default ItemsList
