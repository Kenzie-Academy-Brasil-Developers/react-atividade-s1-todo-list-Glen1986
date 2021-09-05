const Form = ({list, setList, newTodo, setNewTodo, addTodo}) =>{

  return(
  <section>
    <input type="text" 
           value={newTodo}
           onChange = {(e)=>setNewTodo(e.target.value)}
    />
    <button onClick = {(e)=>addTodo(newTodo)}>enviar</button>
  </section>
  )
}
export default Form;
