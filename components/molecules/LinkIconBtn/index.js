import PropTypes from "prop-types"
// ui
import { IconButton } from "@chakra-ui/button"
// next
import Link from "next/link"

/**
 * LinkIconBtn Component
 * @component
 * @description Componente LinkIconBtn, Button with icon and Link
 */
const LinkIconBtn = ({ icon, href }) => {
  return (
    <Link href={href}>
      <IconButton icon={icon} w="30%" variant="ghost" />
    </Link>
  )
}

LinkIconBtn.propTypes = {
  icon: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
}

export default LinkIconBtn
