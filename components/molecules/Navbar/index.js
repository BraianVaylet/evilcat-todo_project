import PropTypes from "prop-types"
// ui
import { HamburgerIcon } from "@chakra-ui/icons"
import { Flex } from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/button"
// component
import Logo from "components/atoms/Logo"
// utils/constants
import { APP_TITLE } from "utils/constants"

/**
 * Navbar Component
 * @component
 * @description Componente Navbar con icono a menu y logo
 */
const Navbar = ({ onClickLogo, onClickMenu, btnRef }) => {
  return (
    <Flex w="100%" align="center" justify="space-between" p="1rem">
      <Logo onClick={onClickLogo} title={APP_TITLE} />
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon />}
        fontSize="1.25rem"
        onClick={onClickMenu}
        variant="ghost"
      />
    </Flex>
  )
}

Navbar.propTypes = {
  onClickLogo: PropTypes.func,
  onClickMenu: PropTypes.func,
  btnRef: PropTypes.any,
}

export default Navbar
