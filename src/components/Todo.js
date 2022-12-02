const Todo = (props) => {
    const todoClasses = ['italic'];
    if (props.todo.complete){
        todoClasses.push('line-through');
    }
    return(
    <div>
        <input onChange={(e) => {props.handleToggleComplete(props.i)}} checked={props.todo.complete} type='checkbox'/>
        <span className={todoClasses.join(' ')}>{props.todo.text} </span>
        <button onClick={(e) => {props.handleTodoDelete(props.i);}}>Delete</button>
    </div>
);
};

export default Todo;