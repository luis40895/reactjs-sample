import * as React from 'react'
import { Todo } from '../Interfaces';
import * as cx from 'classnames'

interface Props {
    todo: Todo
    onToggle: (checked: Todo) => void
}

interface State {

}

export default class TodoItem extends React.Component<Props,State> {
    render () {
        let { todo } = this.props
        return <li className={cx({completed: todo.completed})}>
                    <div className="view">
                        <input className="toggle" type="checkbox" onChange={this.toggle}/>
                        <label>{ todo.title }</label>
                        <button className="destroy"></button>
                    </div>
                </li>
    }

    toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        this.props.onToggle(this.props.todo)
    }
}