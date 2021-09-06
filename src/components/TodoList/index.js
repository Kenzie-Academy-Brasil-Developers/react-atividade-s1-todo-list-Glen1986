import './style.css'
const TodoList = ({list,handleTodo}) =>{
  return(
    <ul>
       {list.map((name, index)=><li key={index} id={index}>{name}
        <button id={index} href="#"onClick = {(e)=>handleTodo(name) } > cleanWork</button>
        </li>
        )}
    </ul>
  )
}
export default TodoList;
