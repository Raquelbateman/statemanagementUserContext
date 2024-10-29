import { useContext } from "react"
import TodoContext from "../contexts/todoContext";
import LoginContext from "../contexts/loginContext";

interface Todo {
    id: number;
    value:number;
}

const Todo = () => {

    const {todos, dispatch} = useContext(TodoContext);
    const {user} =useContext(LoginContext);

    const generateRandomNumber = ():number => {
     
        return Date.now();
    }


  const addTodo = () => {
   dispatch({type:'ADD', todo: {id:generateRandomNumber(), title:'todo' + generateRandomNumber(),}})
  };


  const deleteTodo = (id: number) => {
   dispatch({type:"DELETE",todoId: id})
  };

  return (
  <>
  
    <div className="container mt-5">
      <h1 className="mb-4">My Todo List</h1>
      <p>user: {user}</p>
      <button className="todoButton" onClick={addTodo}>
        Add Todo Item:
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <button className="logoutButton" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
  )
}
export default Todo
