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
  direction,
  size,
  ...props
}) => {
  return (
    <Drawer
      {...props}
      isOpen={isOpen}
      placement={direction}
      size={size}
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

CustomDrawer.defaultProps = {
  direction: "bottom",
  size: "full",
}

CustomDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  btnRef: PropTypes.any,
  header: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  direction: PropTypes.oneOf(["right", "bottom", "left", "top"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
}

export default CustomDrawer
