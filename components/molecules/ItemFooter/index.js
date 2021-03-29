import PropTypes from "prop-types"
import { MdTitle, MdAttachMoney, MdBubbleChart } from "react-icons/md"
// ui
import { IconButton } from "@chakra-ui/button"
import { CloseIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/layout"
// utils/proptypes
import { ItemPropTypes } from "utils/propTypes"
import Icon from "@chakra-ui/icon"
// next
import Link from "next/link"

/**
 * ItemFooter Component
 * @component
 * @description Componente ItemFooter
 */
const ItemFooter = ({ item, onClickRemove, removeIcon }) => {
  return (
    <Flex w="100%" align="center" justify="space-between">
      <Text ml="2rem" fontSize="1.5rem">
        ${item.price}
      </Text>
      <Flex>
        <Link href="/Item">
          <IconButton
            ml="2rem"
            fontSize="2rem"
            variant="ghost"
            icon={<Icon as={MdTitle} />}
          />
        </Link>
        <Link href="/Price">
          <IconButton
            ml="2rem"
            fontSize="2rem"
            variant="ghost"
            icon={<Icon as={MdAttachMoney} />}
          />
        </Link>
        <Link href="/Units">
          <IconButton
            ml="2rem"
            fontSize="2rem"
            variant="ghost"
            icon={<Icon as={MdBubbleChart} />}
          />
        </Link>
        <IconButton
          ml="2rem"
          variant="ghost"
          icon={removeIcon}
          onClick={onClickRemove}
        />
      </Flex>
    </Flex>
  )
}

ItemFooter.defaultProps = {
  removeIcon: <CloseIcon />,
}

ItemFooter.propTypes = {
  item: PropTypes.shape(ItemPropTypes),
  onClickRemove: PropTypes.func.isRequired,
  removeIcon: PropTypes.element,
}

export default ItemFooter
