"use client"

import { auth } from "@/firebase"
import styles from "@/styles/Nav.module.css"
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"

const AuthButton = () => {
  const [user, setUser] = useState(false)
  const router = useRouter()

  onAuthStateChanged(auth, (user) => {
    setUser(!!user)
  })

  const handleSignIn = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider())

    router.push("/")
  }

  const handleSignOut = async () => {
    signOut(auth)

    router.push("/")
  }

  return (
    <div className={styles.link + " " + styles.auth}>
      {user ? (
        <button onClick={handleSignOut} className={styles.sign}>
          Sign Out
        </button>
      ) : (
        <button onClick={handleSignIn} className={styles.sign}>
          Sign In
        </button>
      )}
    </div>
  )
}

export default AuthButton
