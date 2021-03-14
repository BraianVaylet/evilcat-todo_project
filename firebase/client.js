import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBC-mC0LmMO9T_-yz6yKkjL9h96jT_FMGI",
  authDomain: "evilcat-75e6e.firebaseapp.com",
  projectId: "evilcat-75e6e",
  storageBucket: "evilcat-75e6e.appspot.com",
  messagingSenderId: "109284305259",
  appId: "1:109284305259:web:8d9c8950bff27ed89e842e",
  measurementId: "G-BKDQHC4KF0",
}

try {
  !firebase.apps.length && firebase.initializeApp(firebaseConfig)
} catch (error) {
  console.error("firebase-error", error)
}

const db = firebase.firestore()

/**
 * Firebase Client
 * @category  Firebase
 * @see https://firebase.google.com/docs/web/setup?hl=es
 * @author Braian D. Vaylet
 * @description Funciones para mapear, obtener, crear, editar y eliminar registros de la base de datos.
 */
export class FirebaseClient {
  // * MAP FUNC
  /**
   * mapUserFromFirebaseAuthToUser
   * @function
   * @param {object} user
   * @returns {object} {avatar: String, username: String, email: String, uid: String}
   * @description [Firebase] Mapea al user que obtengo desde la BD a un nuevo objeto de user
   */
  mapUserFromFirebaseAuthToUser(user) {
    const { displayName, email, photoURL, uid } = user
    return {
      avatar: photoURL,
      username: displayName,
      email,
      uid,
    }
  }

  /**
   * mapItemFromFirebaseToItem
   * @function
   * @param {object} doc
   * @returns {object} {...data, id: String, createdAt: Date}
   * @description [Firebase] Mapea el elemento Product que obtengo desde la BD a un nuevo objeto Product con el id y la fecha de creación
   */
  mapItemFromFirebaseToItem(doc) {
    const data = doc.data()
    const id = doc.id
    const createdAt =
      data.createdAt || firebase.firestore.Timestamp.fromDate(new Date())
    return { id, ...data, createdAt: +createdAt.toDate() }
  }

  // * AUTHENTICATION FUNC
  /**
   * onAuthStateChanged
   * @param {object} doc
   * @returns {object} mapUserFromFirebaseAuthToUser(user)
   * @description [Firebase] Reviso si el usuario esta autentificado
   */
  onAuthStateChanged(onChange) {
    return firebase.auth().onAuthStateChanged((user) => {
      const normalizedUser = user
        ? this.mapUserFromFirebaseAuthToUser(user)
        : null
      onChange(normalizedUser)
    })
  }

  /**
   * loginWithGoogle
   * @returns {Promise}
   * @description [Firebase] Autentificación con Google
   */
  loginWithGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(googleProvider)
  }

  /**
   * onAuthSignOut
   * @returns {Promise}
   * @description [Firebase] Desautentificar al user
   */
  onAuthSignOut() {
    return firebase.auth().signOut()
  }

  // * ADD FUNC
  /**
   * addItems
   * @param {object} Item
   * @returns {Promise<object>}
   * @description [Firebase] Agrego un nuevo item a la base de datos
   */
  addItems({ title, units, price, check }) {
    return db.collection("items").add({
      title,
      units,
      price,
      check,
      isActive: true,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    })
  }
}
