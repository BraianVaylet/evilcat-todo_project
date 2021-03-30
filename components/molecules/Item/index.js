import { useContext } from "react"
import PropTypes from "prop-types"
// ui
import { Checkbox } from "@chakra-ui/checkbox"
import { Badge, Flex, Text } from "@chakra-ui/layout"
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion"
// utils
import { ItemPropTypes } from "utils/propTypes"
// context
import { FirebaseContext, FormContext } from "context"
import ItemFooter from "../ItemFooter"

/**
 * Item Component
 * @component
 * @description Componente Item
 */
const Item = ({ item }) => {
  const { handleEditItem, handleIsActiveItem } = useContext(FirebaseContext)
  const { setItem, setTitle, setPrice, setUnits, setIsEditing } = useContext(
    FormContext
  )

  const handleClickCkeck = (e) => {
    const newItem = item
    newItem.check = e.target.checked
    handleEditItem(newItem).catch((error) => console.log(`error`, error))
  }

  const handleClickInactive = () =>
    handleIsActiveItem(item, false).catch((error) =>
      console.log(`error`, error)
    )

  const handleClickAccordion = () => {
    if (item) {
      setItem(item)
      setTitle(item.title)
      setPrice(item.price)
      setUnits(item.units)
      setIsEditing(true)
    }
  }

  return (
    <>
      <AccordionItem w="100%">
        <AccordionButton w="100%" onClick={handleClickAccordion}>
          <Flex align="center" justify="space-between" w="100%">
            <Checkbox
              size="lg"
              w="1rem"
              mr="1rem"
              defaultIsChecked={item.check}
              onChange={handleClickCkeck}
            />
            <Flex align="center" justify="flex-start" ml=".75rem" w="100%">
              <Flex align="center" justify="flex-start">
                <Badge
                  fontSize="1.25rem"
                  colorScheme={item.units === 0 ? "red" : "success"}
                  color={item.check ? "gray.400" : undefined}
                >
                  x{item.units}
                </Badge>
                <Text
                  fontSize="1.5rem"
                  ml="1rem"
                  textDecoration={item.check ? "line-through" : undefined}
                  color={item.check ? "gray.400" : undefined}
                >
                  {item.title}
                </Text>
              </Flex>
            </Flex>
            <AccordionIcon />
          </Flex>
        </AccordionButton>
        <AccordionPanel p=".5rem 1rem" w="100%">
          <ItemFooter item={item} onClickRemove={handleClickInactive} />
        </AccordionPanel>
      </AccordionItem>
    </>
  )
}

Item.defaultProps = {
  item: {
    id: "0",
    title: "",
    units: 0,
    check: false,
    price: 0,
  },
}

Item.propTypes = {
  item: PropTypes.shape(ItemPropTypes),
}

export default Item
