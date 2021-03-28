import { useContext, useEffect } from "react"
// ui
import { Flex } from "@chakra-ui/layout"
// component
import Key from "components/molecules/Key"
// context
import { FormContext } from "context"
import { ChevronLeftIcon, DeleteIcon } from "@chakra-ui/icons"

/**
 * Keyboard Component
 * @component
 * @description Componente Keyboard, Formulario de alta/edicion de items
 */
const Keyboard = () => {
  const { price, setPrice, item, setItem } = useContext(FormContext)
  const arrKeys = {
    base: ["clean", "0", "delete"],
    level1: ["1", "2", "3"],
    level2: ["4", "5", "6"],
    level3: ["7", "8", "9"],
  }

  useEffect(() => {
    const _item = item
    console.log(`price`, price)
    if (price !== "NaN") {
      _item.price = price
    }
    console.log(`_item`, _item)
    setItem(_item)
  }, [price])

  const handleClick = (value) => {
    let number = price.toString()
    if (value === "clean") {
      setPrice(0)
      return
    }

    if (value === "delete") {
      number = number.length === 1 ? 0 : number.substring(0, number.length - 1)
      setPrice(parseInt(number))
      return
    }

    if (value !== "delete" && value !== "edit") {
      number = number + value
      if (number.charAt(0) === 0) number.slice(1)
      setPrice(parseInt(number))
    }
  }

  const renderKeys = (values) => {
    return values.map((value) => (
      <Key key={value} onClick={() => handleClick(value)}>
        {value === "clean" ? (
          <DeleteIcon />
        ) : value === "delete" ? (
          <ChevronLeftIcon />
        ) : (
          value
        )}
      </Key>
    ))
  }

  return (
    <Flex direction="column" align="center" justify="flex-start" w="100%">
      <Flex align="center" justify="space-between" mb="1rem" w="100%">
        {renderKeys(arrKeys.level3)}
      </Flex>
      <Flex align="center" justify="space-between" mb="1rem" w="100%">
        {renderKeys(arrKeys.level2)}
      </Flex>
      <Flex align="center" justify="space-between" mb="1rem" w="100%">
        {renderKeys(arrKeys.level1)}
      </Flex>
      <Flex align="center" justify="center" mb="1rem" w="100%">
        {renderKeys(arrKeys.base)}
      </Flex>
    </Flex>
  )
}

export default Keyboard
