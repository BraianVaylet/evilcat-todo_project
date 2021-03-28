import { useContext, useEffect, useState } from "react"
// import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
// ui
import { Flex, Text } from "@chakra-ui/layout"
import { Input } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button"
// containers
import WrapperItem from "containers/WrapperItem"
// context
import { FirebaseContext, FormContext } from "context"
// next
import { useRouter } from "next/router"
import { useToast } from "@chakra-ui/toast"

/**
 * ItemTemplate Component
 * @component
 * @description Componente ItemTemplate con acceso a la configuracion.
 */
const ItemTemplate = () => {
  const [t] = useTranslation("global")
  const router = useRouter()
  const toast = useToast()
  const { item, setItem, title, setTitle, isEditing } = useContext(FormContext)
  const { handleEditItem } = useContext(FirebaseContext)
  const [error, setError] = useState(null)

  useEffect(() => {
    const _item = item
    _item.title = title
    setItem(_item)
  }, [title])

  const handleChangeInput = (e) => setTitle(e.target.value)

  const handleContinue = () =>
    title !== "" ? router.push("/Price") : setError("Ingrese un Item")

  const handleEdit = () => {
    if (title !== "" && item) {
      handleEditItem(item)
        .then(() => {
          toast({
            title: t("ItemForm.success"),
            description: "",
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          })
          router.push("/Home")
        })
        .catch((error) => {
          console.log(`error`, error)
          toast({
            title: t("ItemForm.error"),
            description: "",
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          })
          setError("Algo falló")
        })
    } else {
      setError("Ingrese un titulo al item")
    }
  }

  return (
    <WrapperItem title={t("ItemTemplate.title")}>
      <Flex
        align="center"
        justify="space-between"
        direction="column"
        w="100%"
        h="100%"
      >
        <Flex
          align="center"
          justify="space-between"
          direction="column"
          w="100%"
          h="100%"
          p="3rem 1rem"
        >
          <Input
            value={title}
            onChange={handleChangeInput}
            placeholder="Item"
            size="lg"
            fontSize="20px"
            variant="filled"
            autoFocus={true}
            isInvalid={error}
            errorBorderColor="tomato"
          />
          <Flex
            direction="column"
            align="center"
            justify="center"
            w="100%"
            mb="3rem"
          >
            {isEditing ? (
              <Button w="100%" p="15px" onClick={handleEdit}>
                <Text fontSize="20px">{t("ItemTemplate.save")}</Text>
              </Button>
            ) : (
              <Button w="100%" p="15px" onClick={handleContinue}>
                <Text fontSize="20px">{t("ItemTemplate.continue")}</Text>
              </Button>
            )}
            {error && (
              <Text color="tomato" fontSize="1rem" mt=".5rem">
                {error}
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </WrapperItem>
  )
}

export default ItemTemplate
