import { useContext } from "react"
// ui
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/layout"
// context
import { FormContext } from "context"
// component
import Key from "components/atoms/Key"

/**
 * Counter Component
 * @component
 * @description Componente Counter para la carga de unidades
 */
const Counter = () => {
  const { units, setUnits } = useContext(FormContext)

  const handleAdd = () => setUnits(units + 1)

  const handleRemove = () => units > 0 && setUnits(units - 1)

  return (
    <Flex align="center" justify="center">
      <Key onClick={handleRemove}>
        <MinusIcon />
      </Key>
      <Text textAlign="center" fontSize="3rem" w="50%">
        {units === 0 ? units : "x" + units}
      </Text>
      <Key onClick={handleAdd}>
        <AddIcon />
      </Key>
    </Flex>
  )
}

export default Counter
