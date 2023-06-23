import Link from "next/link"
import styles from "./Modulo.module.css"
const link = [
    {
      name: "home",
      route: "/"
    },
    {
      name: "about",
      route: "/about"
    },
    {
      name: "poster",
      route: "/poster"
    }
  ]



const Navigation = () => {

  return (
   <header className={styles.header}>
          <nav  >
            <ul className={styles.navigation}>
              {link.map(({name,route}) => (
                  <li key={route}>
                    <Link href={route}>
                      {name}
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
        </header>
  )
}

export default Navigation