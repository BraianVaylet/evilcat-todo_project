import React from "react"
import PropTypes from "prop-types"
// context
import {
  FirebaseContextProvider,
  FormContextProvider,
  ItemsContextProvider,
} from "context"

/**
 * WrapperContext Container
 * @component
 * @description Contenedor del Context del proyecto
 */
const WrapperContext = ({ children }) => {
  return (
    <FormContextProvider>
      <ItemsContextProvider>
        <FirebaseContextProvider>
          <>{children}</>
        </FirebaseContextProvider>
      </ItemsContextProvider>
    </FormContextProvider>
  )
}

WrapperContext.propTypes = {
  children: PropTypes.element.isRequired,
}

export default WrapperContext
