import { useState } from "react";
import styles from "./SideBar.module.scss";
import { useNavigate } from "react-router";

interface Props {
  handleRange: (range: number) => void;
}

export default function SideBar({ handleRange }: Props) {
  const [minutes, setMinutes] = useState(75);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`?search=${query}`);
  };

  return (
    <menu className={styles.sideBar}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleSearch(searchQuery);
        }}
      >
        <input
          className={styles.searchRecipe}
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter your search"
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
        <li className={styles.filters__slider}>
          <label htmlFor="duration">Cooking Time</label>
          <div className={styles.filters__slider__items}>
            <input
              type="range"
              min="1"
              max="210"
              step="1"
              onChange={(e) => {
                const value = Number(e.target.value);
                setMinutes(value);
              }}
              onClickCapture={() => {
                handleRange(minutes);
              }}
            />
            <span>{minutes}min</span>
          </div>
        </li>
      </ul>
    </menu>
  );
}
