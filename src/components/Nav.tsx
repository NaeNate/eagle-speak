import Link from "next/link"
import AuthButton from "@/components/AuthButton"
import styles from "@/styles/Nav.module.css"

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href={"/"} className={styles.link}>
        Eagle Speak
      </Link>
      <Link href={"/suggestions"} className={styles.link}>
        Suggestions
      </Link>

      <AuthButton />
    </nav>
  )
}
export default NavBar
