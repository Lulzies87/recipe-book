import styles from "./SideBar.module.scss";

export function SideBar() {
  return (
    <menu className={styles.sideBar}>
      <form name="searchRecipe">
        <input className={styles.searchRecipe} id="search-recipe" type="search" name="search-recipe" />
      </form>
      <ul className={styles.filters}>
        <li className={styles.filters__listItem}>
          <details className={styles.sideBar__details}>
            Lorem ipsum
            <summary>this</summary>
          </details>
        </li>
        <li className={styles.filters__listItem}>
          <details className={styles.sideBar__details}>
            dolor sit amet consectetur adipisicing elit
            <summary>that</summary>
          </details>
        </li>
        <li className={styles.filters__listItem}>
          <details className={styles.sideBar__details}>
            Aspernatur, deleniti
            <summary>and this</summary>
          </details>
        </li>
        <li className={styles.filters__listItem}>
          <details className={styles.sideBar__details}>
            Lorem ipsum
            <summary>this</summary>
          </details>
        </li>
        <li className={styles.filters__listItem}>
          <details className={styles.sideBar__details}>
            dolor sit amet consectetur adipisicing elit
            <summary>that</summary>
          </details>
        </li>
        <li className={styles.filters__listItem}>
          <details className={styles.sideBar__details}>
            Aspernatur, deleniti
            <summary>and this</summary>
          </details>
        </li>
      </ul>
    </menu>
  );
}
