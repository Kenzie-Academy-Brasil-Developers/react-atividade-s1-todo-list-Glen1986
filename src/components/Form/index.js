const Form = ({list, setList, newTodo, setNewTodo}) =>{

  const addTodo = (newTodo) =>{
    setList([...list, newTodo])
    setNewTodo("")
    console.log(list)
  }
  const handleTodo =()=>{
   const lessItem = list.filter((item) => item === selected)
  }
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
