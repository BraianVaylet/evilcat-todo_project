import { theme as chakraTheme, extendTheme } from "@chakra-ui/react"
import { addOpacityToColor } from "./utils"

// my own breakpoints
export const MY_BREAKPOINTS = {
  BREAK_MIN: {
    tag: "(min-width: 600px)",
    value: "600px",
  },
}

// tooltip time
export const TOOLTIP_TIME = 250

// color palette
export const COLORS = {
  primary: "#E53E3E",
  secundary: "red.200",
}

// my chakra theme
const theme = extendTheme({
  ...chakraTheme,
  initialColorMode: "light",
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "1.5vh",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        lineHeight: "tall",
        scrollBehavior: "smooth",
        minHeight: "100vh",
        minWidth: "100wh",
        backgroundImage: `radial-gradient(${addOpacityToColor(
          "#E53E3E",
          0.5
        )} 1px, transparent 1px)`,
        backgroundPosition: "0 0 25px 25px",
        backgroundSize: "50px 50px",
        padding: "0",
        margin: "0",
        backgroundColor: props.colorMode === "dark" ? "gray.800" : "gray.200",
        overflowX: "hidden !important",
      },
      a: {
        color: props.colorMode === "dark" ? "red.300" : "red.200",
      },
    }),
  },
  fonts: {
    ...chakraTheme.fonts,
    body:
      'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  icons: {
    ...chakraTheme.icons,
  },
  size: {
    xs: "0.5rem",
    sm: "1rem",
    md: "2rem",
    l: "2.5rem",
    xl: "3rem",
  },
  colors: {
    brand: {
      primary: COLORS.primary,
      secundary: COLORS.secundary,
    },
  },
})

export default theme
