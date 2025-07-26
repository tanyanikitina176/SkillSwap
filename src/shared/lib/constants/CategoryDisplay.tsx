// src/shared/lib/constants/CategoryDisplay.tsx
import { CATEGORIES } from './constants';
import './variables.css'; // Импорт переменных

export const CategoryDisplay = () => {
  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '20px'
    }}>
      {CATEGORIES.map((category) => {
        const cssVarName = category.color.replace('var(', '').replace(')', '');
        const colorValue = getComputedStyle(document.documentElement)
          .getPropertyValue(cssVarName).trim() || '#ccc'; // Переносим fallback сюда

        const backgroundColor = colorValue 
          ? `${colorValue}20` 
          : 'rgba(204, 204, 204, 0.1)';

        return (
          <div 
            key={category.id}
            style={{
              border: `2px solid ${colorValue}`,
              borderRadius: '12px',
              padding: '16px',
              backgroundColor,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img 
              src={category.icon} 
              alt={category.name} 
              width="40" 
              height="40"
              style={{ marginBottom: '10px' }}
            />
            <h3 style={{ 
              margin: '0 0 10px 0',
              color: colorValue,
              textAlign: 'center'
            }}>
              {category.name}
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              width: '100%'
            }}>
              {category.subcategories.map((sub) => (
                <li 
                  key={sub.id}
                  style={{
                    padding: '8px',
                    margin: '4px 0',
                    backgroundColor: 'var(--card-bg, #fff)',
                    borderRadius: '6px',
                    borderLeft: `4px solid ${colorValue}`
                  }}
                >
                  {sub.name}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};