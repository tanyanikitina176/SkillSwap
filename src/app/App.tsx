import "./App.css";



import { CategoryDisplay } from '../shared/lib/constants/CategoryDisplay';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Категории навыков</h1>
      <CategoryDisplay />
    </div>
  );
}

export default App;
