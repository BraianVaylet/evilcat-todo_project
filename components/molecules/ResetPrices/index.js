import { useContext } from "react"
import { useTranslation } from "react-i18next"
// ui
import { Button } from "@chakra-ui/button"
import { Text } from "@chakra-ui/layout"
// context
import { FirebaseContext, ItemsContext } from "context"
// next
import { useRouter } from "next/router"

/**
 * ResetPrices Component
 * @component
 * @description Componente ResetPrices, Change all items prices to cero
 */
const ResetPrices = () => {
  const [t] = useTranslation("global")
  const router = useRouter()
  const { items } = useContext(ItemsContext)
  const { handleEditItem } = useContext(FirebaseContext)

  const handleResetPrices = () => {
    items.map((item) => {
      if (item.price !== 0) {
        item.price = 0
        return handleEditItem(item).catch((error) =>
          console.log(`error`, error)
        )
      } else {
        return false
      }
    })
    router.push("/Home")
  }

  return (
    <Button
      variant="none"
      onClick={handleResetPrices}
      fontSize="1.5rem"
      w="100%"
    >
      <Text ml="1rem">{t("ResetPrices.title")}</Text>
    </Button>
  )
}

export default ResetPrices
