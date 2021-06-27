import { useContext } from "react"
import { ImCheckmark2, ImCheckmark, ImBackward2 } from "react-icons/im"
// ui
import { Divider } from "@chakra-ui/layout"
import { Accordion } from "@chakra-ui/accordion"
import Icon from "@chakra-ui/icon"
import { IconButton } from "@chakra-ui/button"
// context
import { FirebaseContext, ItemsContext } from "context"
// components
import ItemListSection from "components/molecules/ItemListSection"
import { Flex } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"

/**
 * ItemsList Component
 * @component
 * @description Componente ItemsList. Listado de Items
 */
const ItemsList = () => {
  const {
    items,
    itemsCheckTrue,
    itemsCheckFalse,
    itemsIsActiveFalse,
  } = useContext(ItemsContext)
  const { handleEditItem } = useContext(FirebaseContext)

  const handleConditionAndEdit = (item, condition, check, isActive) => {
    if (condition) {
      item.check = check
      item.isActive = isActive
      return handleEditItem(item).catch((error) => console.log(`error`, error))
    } else {
      return false
    }
  }

  const handleCheckAll = () =>
    items.map((item) =>
      handleConditionAndEdit(
        item,
        item.check === false && item.isActive === true,
        true,
        item.isActive
      )
    )

  const handleUnCheckAll = () =>
    items.map((item) =>
      handleConditionAndEdit(
        item,
        item.check === true && item.isActive === true,
        false,
        item.isActive
      )
    )

  const handleIsActiveTrue = () =>
    items.map((item) =>
      handleConditionAndEdit(item, item.isActive === false, false, true)
    )

  const handleRemoveAll = () =>
    items.map((item) =>
      handleConditionAndEdit(item, item.isActive === true, false, false)
    )

  return (
    <Accordion allowToggle w="100%">
      <ItemListSection
        items={itemsCheckFalse}
        title="Not check"
        btn={
          <IconButton
            onClick={handleCheckAll}
            icon={<Icon as={ImCheckmark} />}
            fontSize="1.2rem"
            variant="ghost"
          />
        }
      />

      <Divider m="2rem 0" variant="dashed" />

      <ItemListSection
        items={itemsCheckTrue}
        title="Check"
        btn={
          <Flex>
            <IconButton
              onClick={handleUnCheckAll}
              icon={<Icon as={ImCheckmark2} />}
              fontSize="1.2rem"
              variant="ghost"
            />
            <IconButton
              onClick={handleRemoveAll}
              icon={<CloseIcon />}
              fontSize="1.2rem"
              variant="ghost"
            />
          </Flex>
        }
      />

      <Divider m="2rem 0" variant="dashed" />

      <ItemListSection
        items={itemsIsActiveFalse}
        title="Inactive"
        isActive={false}
        btn={
          <IconButton
            onClick={handleIsActiveTrue}
            icon={<Icon as={ImBackward2} />}
            fontSize="1.2rem"
            variant="ghost"
          />
        }
      />
    </Accordion>
  )
}

export default ItemsList
