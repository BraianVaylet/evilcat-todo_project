import { useMediaQuery } from "@chakra-ui/media-query"
import { MY_BREAKPOINTS } from "styles/theme"

/**
 * setNavigatorLanguage
 * @function
 * @description retorno el lenguage para el primer render
 */
export const setNavigatorLanguage = () => {
  const value = JSON.parse(window.localStorage.getItem("language"))
  return value !== null
    ? value
    : navigator.language.includes("es")
    ? "es"
    : "en"
}

/**
 * setValueResponsive
 * @function
 * @description swich entre dos valores dependiendo de la mediaquery
 */
export const setValueResponsive = (value1, value2) => {
  const [query] = useMediaQuery(MY_BREAKPOINTS.BREAK_MIN)
  console.log("query", query)
  return query ? value1 : value2
}
