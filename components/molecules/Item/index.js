import { useContext } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// ui
import { CloseIcon, EditIcon } from "@chakra-ui/icons"
import { Checkbox } from "@chakra-ui/checkbox"
import { Badge, Flex, Text } from "@chakra-ui/layout"
import { Button, IconButton } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion"
import { useToast } from "@chakra-ui/toast"
// utils
import { ItemPropTypes } from "utils/propTypes"
// components
import ItemForm from "components/organisms/ItemForm"
import CustomDrawer from "components/atoms/CustomDrawer"
// context
import { FirebaseContext } from "context"

/**
 * Item Component
 * @component
 * @description Componente Item
 */
const Item = ({ item }) => {
  const [t] = useTranslation("global")
  const toast = useToast()
  const { handleEditItem, handleIsActiveItem } = useContext(FirebaseContext)
  const EditCustomDrawer = useDisclosure()
  const IsActiveFalseCustomDrawer = useDisclosure()

  const handleClickCkeck = (e) => {
    const newItem = item
    newItem.check = e.target.checked
    handleEditItem(newItem).catch((error) => console.log(`error`, error))
  }

  const handleClickInactive = () =>
    handleIsActiveItem(item, false)
      .then(() => {
        toast({
          title: t("Item.removed"),
          description: "",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        })
        IsActiveFalseCustomDrawer.onClose()
      })
      .catch((error) => console.log(`error`, error))

  return (
    <>
      <AccordionItem w="100%">
        <AccordionButton w="100%">
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
        <AccordionPanel
          p=".5rem 1rem"
          w="100%"
          as={Flex}
          align="center"
          justify="space-between"
        >
          <Text ml="2rem" fontSize="1.5rem">
            ${item.price}
          </Text>
          <Flex>
            <IconButton
              ml="2rem"
              variant="ghost"
              icon={<EditIcon />}
              onClick={EditCustomDrawer.onOpen}
            />
            <IconButton
              ml="2rem"
              variant="ghost"
              icon={<CloseIcon />}
              onClick={IsActiveFalseCustomDrawer.onOpen}
            />
          </Flex>
        </AccordionPanel>
      </AccordionItem>

      <ItemForm
        isOpen={EditCustomDrawer.isOpen}
        onClose={EditCustomDrawer.onClose}
        item={item}
        withEditAction={EditCustomDrawer.isOpen}
      />

      <CustomDrawer
        direction="top"
        size="md"
        isOpen={IsActiveFalseCustomDrawer.isOpen}
        onClose={IsActiveFalseCustomDrawer.onClose}
        header={<Text>{t("Item.inactiveItem")}</Text>}
        body={<Text>{t("Item.questionInactiveItem")}</Text>}
        footer={
          <Flex>
            <Button ml="1rem" onClick={IsActiveFalseCustomDrawer.onClose}>
              {t("Item.cancel")}
            </Button>
            <Button ml="1rem" onClick={handleClickInactive}>
              {t("Item.remove")}
            </Button>
          </Flex>
        }
      />
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
