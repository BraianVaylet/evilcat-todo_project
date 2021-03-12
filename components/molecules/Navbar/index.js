import PropTypes from "prop-types"
// ui
import { Flex } from "@chakra-ui/layout"
// component
import Logo from "components/atoms/Logo"
// utils/constants
import { APP_TITLE } from "utils/constants"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// next
import Link from "next/link"

/**
 * Navbar Component
 * @component
 * @description Componente Navbar con icono a menu y logo
 */
const Navbar = ({ onClickLogo, onClickMenu, btnRef }) => {
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      p=".75rem"
      position="absolute"
      top="0"
      bgColor={backgroundColor}
      zIndex="1000"
    >
      <Link href="/">
        <a>
          <Logo onClick={onClickLogo} title={APP_TITLE} />
        </a>
      </Link>
    </Flex>
  )
}

Navbar.propTypes = {
  onClickLogo: PropTypes.func,
  onClickMenu: PropTypes.func,
  btnRef: PropTypes.any,
}

export default Navbar
