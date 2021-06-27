import { useContext } from "react"
import { useTranslation } from "react-i18next"
import PropTypes from "prop-types"
// ui
import { DeleteIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Badge, Flex, Text } from "@chakra-ui/layout"
import { Button, IconButton } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { useToast } from "@chakra-ui/toast"
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion"
// utils
import { ItemPropTypes } from "utils/propTypes"
// components
import CustomDrawer from "components/atoms/CustomDrawer"
import ItemFooter from "components/molecules/ItemFooter"
// context
import { FirebaseContext } from "context"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"

/**
 * Item Component
 * @component
 * @description Componente Item
 */
const ItemInactive = ({ item }) => {
  const [t] = useTranslation("global")
  const background = useSetColorTheme("gray.700", "gray.200")
  const toast = useToast()
  const { handleDeleteItem, handleIsActiveItem } = useContext(FirebaseContext)
  const DeleteCustomDrawer = useDisclosure()

  const handleClickActive = () =>
    handleIsActiveItem(item, true).catch((error) => console.log(`error`, error))

  const handleClickDelete = () =>
    handleDeleteItem(item.id)
      .then(() => {
        toast({
          title: t("Item.deleted"),
          description: "",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        })
        DeleteCustomDrawer.onClose()
      })
      .catch((error) => console.log(`error`, error))

  return (
    <>
      <AccordionItem w="100%" bg={background}>
        <Flex align="center" p="0 1rem">
          <IconButton
            w="1rem"
            mr="1rem"
            icon={<TriangleUpIcon />}
            onClick={handleClickActive}
          />
          <AccordionButton w="100%">
            <Flex align="center" justify="space-between" w="100%">
              <Flex align="center" justify="flex-start" ml=".75rem" w="100%">
                <Flex align="center" justify="flex-start">
                  <Badge fontSize="1.25rem" color="gray.400">
                    x{item.units}
                  </Badge>
                  <Text fontSize="1.5rem" ml="1rem" color="gray.400">
                    {item.title}
                  </Text>
                </Flex>
              </Flex>
              <AccordionIcon />
            </Flex>
          </AccordionButton>
        </Flex>
        <AccordionPanel p=".5rem 1rem" w="100%">
          <ItemFooter
            item={item}
            onClickRemove={DeleteCustomDrawer.onOpen}
            removeIcon={<DeleteIcon />}
          />
        </AccordionPanel>
      </AccordionItem>

      <CustomDrawer
        direction="top"
        size="md"
        isOpen={DeleteCustomDrawer.isOpen}
        onClose={DeleteCustomDrawer.onClose}
        header={<Text>{t("Item.deleteItem")}</Text>}
        body={<Text>{t("Item.questionDeleteItem")}</Text>}
        footer={
          <Flex>
            <Button ml="1rem" onClick={DeleteCustomDrawer.onClose}>
              {t("Item.cancel")}
            </Button>
            <Button ml="1rem" onClick={handleClickDelete}>
              {t("Item.delete")}
            </Button>
          </Flex>
        }
      />
    </>
  )
}

ItemInactive.defaultProps = {
  item: {
    id: "0",
    title: "",
    units: 0,
    check: false,
    price: 0,
  },
}

ItemInactive.propTypes = {
  item: PropTypes.shape(ItemPropTypes),
}

export default ItemInactive
