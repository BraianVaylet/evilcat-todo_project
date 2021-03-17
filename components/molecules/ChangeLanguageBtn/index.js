import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
// hooks
import { useLocalStorage } from "hooks/useLocalStorage"
// ui
import { Flex, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"

/**
 * ChangeLanguageBtn Component
 * @component
 * @description Componente botón para cambiar el idioma Español-Inglés
 */
const ChangeLanguageBtn = () => {
  const [t, i18n] = useTranslation("global")
  const [storedValue, setLocalStorage] = useLocalStorage("language", null)
  const [spanish, setSpanish] = useState(storedValue === "es")

  useEffect(() => i18n.changeLanguage(storedValue), [])
  useEffect(() => i18n.changeLanguage(storedValue), [storedValue])
  useEffect(() => setLocalStorage(spanish ? "es" : "en"), [spanish])

  /**
   * handleLanguage
   * @function
   * @returns {boolean} change spanish state
   */
  const handleLanguage = () => setSpanish(!spanish)

  return (
    <Button
      as={Flex}
      align="center"
      justify="flex-start"
      variant="none"
      onClick={handleLanguage}
      fontSize="1.5rem"
      w="100%"
    >
      <Text>
        {storedValue === "es"
          ? t("ChangeLanguageBtn.en")
          : t("ChangeLanguageBtn.es")}
      </Text>
      <Text ml="1rem">{t("ChangeLanguageBtn.title")}</Text>
    </Button>
  )
}

export default ChangeLanguageBtn
