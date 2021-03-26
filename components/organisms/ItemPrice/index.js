import PropTypes from "prop-types"
// ui
import { Button } from "@chakra-ui/button"
import { Flex } from "@chakra-ui/layout"
import { CloseIcon } from "@chakra-ui/icons"
// components
import CustomDrawer from "components/atoms/CustomDrawer"
// utils/proptypes
import { ItemPropTypes } from "utils/propTypes"

/**
 * ItemPrice Container
 * @component
 * @description Componente ItemPrice, Formulario de alta/edicion de items
 */
const ItemPrice = ({ isOpen, onClose, item, withEditAction }) => {
  return (
    <CustomDrawer
      withClose={false}
      isOpen={isOpen}
      onClose={onClose}
      body={
        <Flex
          align="center"
          justify="space-between"
          direction="column"
          w="100%"
          h="100%"
        >
          Price
        </Flex>
      }
      footer={
        <Flex align="center" justify="center" w="100%">
          <Button onClick={onClose} variant="none">
            <CloseIcon />
          </Button>
        </Flex>
      }
    />
  )
}

ItemPrice.propTypes = {
  withEditAction: false,
}

ItemPrice.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape(ItemPropTypes),
  withEditAction: PropTypes.bool,
}

export default ItemPrice
