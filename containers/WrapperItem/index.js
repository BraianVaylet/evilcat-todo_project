import PropTypes from "prop-types"
// ui
import { Flex, Text } from "@chakra-ui/layout"
import { CloseIcon } from "@chakra-ui/icons"
// next
import Link from "next/link"

/**
 * WrapperItem Container
 * @component
 * @description Contenedor de la carga de items
 */
const WrapperItem = ({ title, children }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="space-between"
    >
      <Flex align="center" justify="space-between" p="1rem 2rem" w="100%">
        <Text fontSize="30px">{title}</Text>
        <Link href="/Home">
          <CloseIcon />
        </Link>
      </Flex>
      {children}
    </Flex>
  )
}

WrapperItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
}

export default WrapperItem
