import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"
import { Flex } from "@chakra-ui/layout"

/**
 * NewItemBtn Component
 * @component
 * @description Componente NewItemBtn
 */
const NewItemBtn = () => {
  return (
    <Flex>
      <Button>
        <AddIcon />
        Nuevo Item
      </Button>
    </Flex>
  )
}

export default NewItemBtn
