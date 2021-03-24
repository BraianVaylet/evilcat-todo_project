import { useContext } from "react"
import PropTypes from "prop-types"
// ui
import { Flex, Text } from "@chakra-ui/layout"
// component
import Logo from "components/atoms/Logo"
// utils/constants
import { APP_TITLE } from "utils/constants"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// next
import Link from "next/link"
// context
import { ItemsContext } from "context"

/**
 * Navbar Component
 * @component
 * @description Componente Navbar con icono a menu y logo
 */
const Navbar = ({ onClickLogo }) => {
  const backgroundColor = useSetColorTheme("gray.900", "white")
  const { itemsIsActiveTrue } = useContext(ItemsContext)

  const handleTotalPrice = () => {
    const initialValue = 0
    return (
      itemsIsActiveTrue &&
      itemsIsActiveTrue.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.units,
        initialValue
      )
    )
  }

  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="space-between"
      p="1rem 2rem"
      position="sticky"
      top="0"
      bgColor={backgroundColor}
      zIndex="1000"
    >
      <Link href="/Home">
        <a>
          <Logo onClick={onClickLogo} title={APP_TITLE} />
        </a>
      </Link>
      <Text fontSize="1.5rem" fontWeight="900">
        ${handleTotalPrice()}
      </Text>
    </Flex>
  )
}

Navbar.propTypes = {
  onClickLogo: PropTypes.func,
}

export default Navbar
