import { useReducer } from "react";
import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavBar";
import todoReducer from "./reducers/todoReducer";
import TodoContext from "./contexts/todoContext";
import authReducer from "./reducers/authReducer";
import LoginContext from "./contexts/loginContext";

const App = () => {

  const [todos, todosDispatch] = useReducer(todoReducer, []);
  const [user, userDispatch] = useReducer(authReducer, ""); 

  return (
    <>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Login/> */}
      <LoginContext.Provider value={{ user, dispatch: userDispatch}}>
        <TodoContext.Provider value={{ todos, dispatch: todosDispatch }}>
          <MyNavbar />
          <HomePage />
        </TodoContext.Provider>
      </LoginContext.Provider>
    </>
  );
};

export default App;
