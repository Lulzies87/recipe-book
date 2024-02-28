import styles from "./Header.module.scss"

export function Header() {

    return (
        <header className={styles.siteHeader}>
            <span>Avatar</span>
            <h1>Header</h1>
        </header>
    )
}