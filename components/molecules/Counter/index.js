import { useContext } from "react"
// ui
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/layout"
// context
import { FormContext } from "context"
// component
import Key from "../Key"

/**
 * Counter Component
 * @component
 * @description Componente Counter para la carga de unidades
 */
const Counter = () => {
  const { count, setCount } = useContext(FormContext)

  const handleAdd = () => setCount(count + 1)

  const handleRemove = () => count > 0 && setCount(count - 1)

  return (
    <Flex w="100%" align="center" justify="center">
      <Key onClick={handleRemove}>
        <MinusIcon />
      </Key>
      <Text textAlign="center" fontSize="3rem" w="50vw">
        {count === 0 ? count : "x" + count}
      </Text>
      <Key onClick={handleAdd}>
        <AddIcon />
      </Key>
    </Flex>
  )
}

export default Counter
