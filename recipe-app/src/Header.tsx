import styles from "./Header.module.scss"

export function Header() {

    return (
        <header className={styles.siteHeader}>
            <h1 className={styles.siteHeader__title}>Recipe Book</h1>
            <span className={styles.siteHeader__userInfo}><img className={styles.siteHeader__userInfo__avatar} src="https://i.pravatar.cc/" alt="avatar pic" /></span>
        </header>
    )
}