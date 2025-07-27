import { CATEGORIES } from '../../shared/lib/constants/constants';
import '../../shared/lib/constants/variables.css';
// import styles from './SkillsPanel.module.css'

export const CategoryDisplay = () => {
  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '24px',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {CATEGORIES.map((category) => {
        const cssVarName = category.color.replace('var(', '').replace(')', '');
        const colorValue = getComputedStyle(document.documentElement)
          .getPropertyValue(cssVarName).trim() || '#ccc';

        return (
          <div 
            key={category.id}
            style={{
              border: `1px solid ${colorValue}30`,
              borderRadius: '12px',
              padding: '20px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src={category.icon} 
                alt={category.name} 
                width="24" 
                height="24"
                style={{ color: colorValue }}
              />
              <h3 style={{ 
                margin: 0,
                color: colorValue,
                fontSize: '18px',
                fontWeight: '600'
              }}>
                {category.name}
              </h3>
            </div>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              {category.subcategories.map((sub) => (
                <li 
                  key={sub.id}
                  style={{
                    padding: '6px 0 6px 12px',
                    borderLeft: `3px solid ${colorValue}`,
                    fontSize: '14px',
                    color: '#333'
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