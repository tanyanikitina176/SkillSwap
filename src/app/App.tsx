import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";
import { NotFound404 } from "./../pages/page-404/page-404";
import { ConnetcError500 } from "./../pages/page-500/page-500";


function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetchUsersData()
      .then((users) => {
        console.log(users);
        setUsers(users);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных пользователей:", error);
      });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='*' element={<NotFound404 />} />
			<Route path='/500' element={<ConnetcError500 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
