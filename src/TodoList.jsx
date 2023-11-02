import  { TodoItem } from "./TodoItem"


export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (<ul className="list">
    {todos.length === 0 && "Nothing to Do Today"}
    {todos.map(todo => {
        return (
            <TodoItem 
            // id={todo.id} 
            // completed={todo.completed} 
            // title={todo.title} 
            {...todo}
            key={TodoItem.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
        )
    })}
    </ul>
    )
}



