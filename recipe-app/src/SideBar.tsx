import styles from "./SideBar.module.scss";

interface Props {
  handleInput: (query: FormDataEntryValue | null) => void;
}

export default function SideBar({ handleInput }: Props) {
  return (
    <menu className={styles.sideBar}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          const query = formData.get("search-recipe");
          handleInput(query);
        }}
      >
        <input
          className={styles.searchRecipe}
          id="search-recipe"
          type="search"
          name="search-recipe"
        />
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
