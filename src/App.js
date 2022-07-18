import SignUp from "./components/Signup";
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
   
    <div className="App">
        <Router>
          <AuthProvider>
              <Routes exact path = "/" element = {<PrivateRoute />}>
                <Route exact path = '/' element = {<Dashboard />}></Route>
              </Routes>
              <Routes exact path = "/signup" element = {<PrivateRoute />}>
                <Route exact path = '/signup' element = {<SignUp />}></Route>
              </Routes>
              <Routes exact path = "/login" element = {<PrivateRoute />}>
                <Route exact path = '/login' element = {<Login />}></Route>
              </Routes>
        </AuthProvider>
        </Router>
    </div>
    
  );
}

export default App;
