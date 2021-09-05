const TodoList = ({list,handleTodo}) =>{
  return(
  <form>
    <ul>
       {list.map((name, index)=><div key={index} id={index}>{name}
        <button href="#" onClick = {(e)=>handleTodo(name) } > cleanWork</button>
        </div>
        )}
    </ul>
  </form>
  )
}
export default TodoList;
