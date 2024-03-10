import {TodoItem} from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return <ul className='list'>
      {todos.length === 0 && 'no todos'}
      {todos.map(todo => {
        if (todo.completed) {
            console.log('this is true')
            return (
                <div className='container'>
                    <TodoItem 
                    {...todo} key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    />
                    <img src="images/teemo.png" alt="a thumbs up teemo" />
                    
                </div>
            )
        }
        else {
            console.log('this is false')
            return (
                <div className='container'>
                    <TodoItem 
                    {...todo} key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                    />
                    <img src="images/teemo2.png" alt="a surprised teemo" />
                </div>
            )
        }
        
        
      })}
      
    </ul>
}
