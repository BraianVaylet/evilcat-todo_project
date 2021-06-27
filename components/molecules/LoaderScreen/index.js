import { useTranslation } from "react-i18next"
// hooks
import useSetColorTheme from "hooks/useSetColorTheme"
// UI
import { Flex, Text } from "@chakra-ui/layout"
// styles
import { addOpacityToColor } from "styles/utils"
import styles from "./styles.module.css"

/**
 * LoaderScreen Component
 * @component
 * @description Componente LoaderScreen
 */
const LoaderScreen = () => {
  const [t] = useTranslation("global")
  const backgroundColor = useSetColorTheme(
    addOpacityToColor("#1A202C", 0.85),
    addOpacityToColor("#FFFFFF", 0.85)
  )

  return (
    <Flex
      bg={backgroundColor}
      position="absolute"
      top="0"
      left="0"
      bottom="0"
      right="0"
      zIndex="10000"
      width="100%"
      height="100%"
      direction="column"
      align="center"
      justify="center"
      className={styles.BlurContainer}
    >
      <Text fontSize="2rem">⏳ {t("LoaderScreen.wait")}...</Text>
    </Flex>
  )
}

export default LoaderScreen
