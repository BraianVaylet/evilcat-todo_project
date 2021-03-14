import { useTranslation } from "react-i18next"
// chakra-ui
import { Button, Flex, useToast } from "@chakra-ui/react"
// firebase
import { FirebaseClient } from "firebase/client"
// hooks
import useUser from "hooks/useUser"

/**
 * LoginGoogle Component
 * @component
 * @description Componente button con autentificación con Google
 */
const LoginGoogle = ({ ...props }) => {
  const [t] = useTranslation("global")
  const toast = useToast()
  const user = useUser()
  const firebase = new FirebaseClient()

  const handleClick = () =>
    firebase
      .loginWithGoogle()
      .then(async (value) => {
        if (user) {
          toast({
            title: `🙂 ${t("Authentication.welcome")}, ${
              value.user.displayName
            }`,
            description: "",
            status: "success",
            position: "bottom",
            duration: 5000,
            isClosable: true,
          })
        }
      })
      .catch((error) => {
        console.error("error", error)
        user &&
          toast({
            title: t("Authentication.errorLogin"),
            description: "",
            status: "error",
            position: "bottom",
            duration: 5000,
            isClosable: true,
          })
      })

  return (
    <Button
      variant="none"
      as={Flex}
      onClick={handleClick}
      align="center"
      justify="center"
      w="100%"
      {...props}
    >
      {t("LoginGoogle.title")}
    </Button>
  )
}

export default LoginGoogle
