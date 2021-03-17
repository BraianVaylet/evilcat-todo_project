import { createContext } from "react"
import PropTypes from "prop-types"
// firebase
import { FirebaseClient } from "firebase/client"

export const FirebaseContext = createContext({})

export const FirebaseContextProvider = ({ children }) => {
  const firebase = new FirebaseClient()

  const handleAddItem = async (item) => await firebase.addItems(item)
  const handleGetAllItems = async () => await firebase.getAllItems()
  const handleDeleteItem = async (id) => await firebase.deleteItemByID(id)
  const handleEditItem = async (item) => await firebase.editItems(item)
  const handleIsActiveItem = async (item, isActive) => {
    const _item = { ...item, isActive, check: false }
    await firebase.editItems(_item)
  }
  const handleGetAllItemsRealTime = async (callback) =>
    await firebase.getAllItemsInRealTime(callback)

  return (
    <FirebaseContext.Provider
      value={{
        handleAddItem,
        handleGetAllItems,
        handleEditItem,
        handleDeleteItem,
        handleGetAllItemsRealTime,
        handleIsActiveItem,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

FirebaseContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
