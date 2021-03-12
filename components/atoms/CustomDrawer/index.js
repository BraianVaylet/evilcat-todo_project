import PropTypes from "prop-types"
// ui
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal"

/**
 * CustomDrawer Component
 * @component
 * @description Componente Drawer customizable
 */
const CustomDrawer = ({
  isOpen,
  onClose,
  btnRef,
  header,
  body,
  footer,
  ...props
}) => {
  return (
    <Drawer
      {...props}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody>{body}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

CustomDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  btnRef: PropTypes.any.isRequired,
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
}

export default CustomDrawer
