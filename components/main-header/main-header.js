import Link from "next/link"
import logoImage from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from "next/image"
import MainHeaderBackground from "./main-header-background"
import NavLink from "./nav-link";

const MainHeader = () => {

  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
        <Link className={classes.logo} href='/'>
            <Image priority width={1000} height={100} src={logoImage.src} alt="food image" />
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                   <NavLink href='/meals'>Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href='/community'>Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default MainHeader