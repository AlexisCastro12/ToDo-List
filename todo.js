function Todo({todo,index, remove,complete}){
  function handleDelete(){
    console.log(todo.text + ' -> ' + 'is deleted');
    remove(index);
  }

  return <div id={index.toString()} className="todo">{todo.text}<button onClick={handleDelete} className="btn-delete">-</button></div>
}
