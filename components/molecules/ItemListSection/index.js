import PropTypes from "prop-types"
// ui
import { Box, Flex, Text } from "@chakra-ui/layout"
// components
import Item from "components/molecules/Item"
import ItemInactive from "components/molecules/ItemInactive"
// utils/props
import { ItemPropTypes } from "utils/propTypes"

/**
 * ItemListSection Component
 * @component
 * @description Componente ItemListSection. Listado de Items por seccion
 */
const ItemListSection = ({ items, btn, isActive, title }) => {
  return (
    items.length > 0 && (
      <>
        <Flex align="center" justify="space-between" p=".5rem">
          <Text fontSize="1.2rem" color="gray.400">
            {title}
          </Text>
          {btn}
        </Flex>
        {items.map((item) => (
          <Box as={isActive ? Item : ItemInactive} key={item.id} item={item} />
        ))}
      </>
    )
  )
}

ItemListSection.defaultProps = {
  isActive: true,
}

ItemListSection.propTypes = {
  items: PropTypes.shape(ItemPropTypes).isRequired,
  btn: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

export default ItemListSection
