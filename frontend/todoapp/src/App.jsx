import './App.css'

import useTodos from './fetchData/customHook';

import {CreateTodo} from './components/CreateTodo'
import {RenderTodo} from './components/RenderTodo'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path : '/todo', Component : Todos},
]);

function App() {
  return <RouterProvider router={router} />;
}

function Todos(){
  const {todos, setChange} = useTodos();
  return <div className="container" >
    <CreateTodo setChange={setChange}></CreateTodo>
    <RenderTodo  todos={todos} setChange={setChange}></RenderTodo>
</div>
}

export default App
