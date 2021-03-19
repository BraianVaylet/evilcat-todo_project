import PropTypes from "prop-types"
// ui
import { Button } from "@chakra-ui/button"
import { AddIcon, CheckIcon, SettingsIcon } from "@chakra-ui/icons"
import { Flex } from "@chakra-ui/layout"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// next
import Link from "next/link"

/**
 * Footer Component
 * @component
 * @description Componente Footer con acceso a las paginas
 */
const Footer = ({ onClickAdd }) => {
  const backgroundColor = useSetColorTheme("gray.900", "white")

  return (
    <Flex
      w="100%"
      align="center"
      justify="space-around"
      p="1rem"
      position="absolute"
      bottom="0"
      bgColor={backgroundColor}
      zIndex="1000"
    >
      <Link href="/home">
        <CheckIcon fontSize="1.5rem" />
      </Link>
      <Button size="lg" variant="ghost" onClick={onClickAdd}>
        <AddIcon fontSize="1.5rem" />
      </Button>
      <Link href="/settings">
        <SettingsIcon fontSize="1.5rem" />
      </Link>
    </Flex>
  )
}

Footer.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
}

export default Footer
