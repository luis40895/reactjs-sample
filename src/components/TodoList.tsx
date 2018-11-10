import * as React from 'react'
import TodoStore from '../TodoStore'
import { Todo } from '../Interfaces'
import TodoItem from './TodoItem'

interface TodoListProps  {

}

interface TodoListState{
    todos: Todo[]
}

export default class TodoList extends React.Component<TodoListProps,TodoListState> {
    private store: TodoStore = new TodoStore()
    private toggleTodo: (todo: Todo) => void

    constructor (props: TodoListProps) {
        super(props)
        this.store.addTodo('Salut')
        this.store.addTodo('les Gens')
        this.state = {
            todos: this.store.todos
        }
        this.toggleTodo = this.store.toggleTodo.bind(this.store)
    }
    render () {
        let { todos } = this.state
        return <div>
             <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?"/>
            </header>
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    { todos.map(todo =>{
                        return <TodoItem todo={todo} key={todo.id} onToggle={this.toggleTodo}/>
                    })}
                </ul>
            </section>
            <footer className="footer">
                <span className="todo-count"><strong>2</strong> items left</span>
                <ul className="filters">
                    <li>
                        <a href="#/" className="selected">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed"></button>
            </footer>
        </div>
    }
}
