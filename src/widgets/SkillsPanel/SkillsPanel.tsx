import { CATEGORIES } from '../../shared/lib/constants/constants';
import '../../shared/lib/constants/variables.css';
import styles from './SkillsPanel.module.css';

export const CategoryDisplay = () => {
  return (
    <div className={styles.container}>
      {CATEGORIES.map((category) => {
        const cssVarName = category.color.replace('var(', '').replace(')', '');
        const colorValue = getComputedStyle(document.documentElement)
          .getPropertyValue(cssVarName).trim() || '#ccc';

        return (
          <div key={category.id} className={styles.categoryCard}>
            <div 
              className={styles.categoryIconWrapper}
              style={{ backgroundColor: colorValue }}
            >
              <img 
                src={category.icon} 
                alt={category.name} 
                className={styles.categoryIcon}
              />
            </div>

            <div className={styles.categoryContent}>
              <h3 className={styles.categoryTitle}>{category.name}</h3>
              <ul className={styles.subcategoriesList}>
                {category.subcategories.map((sub) => (
                  <li 
                    key={sub.id}
                    className={styles.subcategoryItem}
                    style={{ borderLeftColor: colorValue }}
                  >
                    {sub.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
