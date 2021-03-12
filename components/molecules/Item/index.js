import PropTypes from "prop-types"
// ui
import { Checkbox } from "@chakra-ui/checkbox"
import { Badge, Flex, Text } from "@chakra-ui/layout"
// utils
import { ItemPropTypes } from "utils/propTypes"

/**
 * Item Component
 * @component
 * @description Componente Item
 */
const Item = ({ item }) => {
  return (
    <Flex align="flex-start" justify="space-between" w="100%" p="1rem 2rem">
      <Checkbox colorScheme="pink" size="lg" defaultIsChecked={item.check}>
        <Flex align="center" justify="flex-start" ml=".75rem" w="100%">
          <Flex w="12vw" align="center">
            <Badge fontSize="1.25rem">x{item.units}</Badge>
          </Flex>
          <Text
            fontSize="1.5rem"
            ml="1rem"
            textDecoration={!item.check ? "line-through" : undefined}
          >
            {item.title}
          </Text>
        </Flex>
      </Checkbox>
      <Flex w="20%" align="center" justify="flex-end">
        <Text fontSize="1.5rem">${item.price}</Text>
      </Flex>
    </Flex>
  )
}

Item.defaultProps = {
  item: {
    id: "0",
    title: "",
    units: 0,
    check: false,
    price: 0,
  },
}

Item.propTypes = {
  item: PropTypes.shape(ItemPropTypes),
}

export default Item
