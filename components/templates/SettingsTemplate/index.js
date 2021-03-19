import { useEffect } from "react"
import { useTranslation } from "react-i18next"
// ui
import { Button } from "@chakra-ui/button"
import { Divider, Flex } from "@chakra-ui/layout"
// components
import ChangeLanguageBtn from "components/molecules/ChangeLanguageBtn"
import ChangeThemeBtn from "components/molecules/ChangeThemeBtn"
import CustomAvatar from "components/molecules/CustomAvatar"
// firebase
import { FirebaseClient } from "firebase/client"
// hooks
import useUser from "hooks/useUser"
// next
import { useRouter } from "next/router"

/**
 * SettingsTemplate Component
 * @component
 * @description Componente SettingsTemplate con acceso a la configuracion.
 */
const SettingsTemplate = () => {
  const [t] = useTranslation("global")
  const user = useUser()
  const router = useRouter()
  const firebase = new FirebaseClient()

  useEffect(() => {
    user === null && router.replace("/Login")
  }, [user])

  const handleLogout = () => firebase.onAuthSignOut()

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      w="100%"
      h="100%"
    >
      <Flex
        w="100%"
        mt="3rem"
        align="center"
        justify="center"
        direction="column"
      >
        <CustomAvatar
          w="100%"
          direction="column"
          align="center"
          justify="flex-start"
          mt="5rem"
        />
        <Divider m="3rem 0" />
        <ChangeLanguageBtn />
        <Divider m="3rem 0" />
        <ChangeThemeBtn />

        <Divider m="3rem 0" />
      </Flex>
      <Flex w="100%" mt="3rem" align="center" justify="center">
        <Button fontSize="1.5rem" variant="ghost" onClick={handleLogout}>
          {t("SettingsTemplate.logout")}
        </Button>
      </Flex>
    </Flex>
  )
}

export default SettingsTemplate
