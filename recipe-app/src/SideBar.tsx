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
            <summary>Categories</summary>
            <div className={styles.checkbox}>
              <input type="checkbox" id="vegeterian" name="vegeterian" />
              <label htmlFor="vegeterian">Vegeterian</label>
            </div>
            <div className={styles.checkbox}>
              <input type="checkbox" id="vegan" name="vegan" />
              <label htmlFor="vegan">Vegan</label>
            </div>
            <div className={styles.checkbox}>
              <input type="checkbox" id="glutenFree" name="glutenFree" />
              <label htmlFor="glutenFree">Gluten Free</label>
            </div>
            <div className={styles.checkbox}>
              <input type="checkbox" id="dairyFree" name="dairyFree" />
              <label htmlFor="dairyFree">Dairy Free</label>
            </div>
          </details>
        </li>
      </ul>
    </menu>
  );
}
