import { Todo } from "./Interfaces"
import { Component } from "react";

export default class TodoStore {
    private static i = 0
    public todos!: Todo[]

    static increment (){
        return this.i++
    }

    addTodo (title: string): void {
        this.todos = [{
            id: TodoStore.increment(),
            title: title,
            completed: false
        }, ...this.todos]
    }

    removTodo(todo: Todo): void {
        this.todos = this.todos.filter(t => t !== todo)
    }

    updateTitle(todo: Todo, title: string): void {
        this.todos = this.todos.map(t => t === todo ? { ...t, title } : t)
    }

    clearTodo(): void{
        this.todos = this.todos.filter(t => !t.completed)
    }

    toggleTodo(todo: Todo, completed = true): void{
        this.todos = this.todos.map(t => t === todo ? { ...t, completed } : t)
    }

    toggleAll(completed = true){
        this.todos = this.todos.map(t => completed !== t.completed ? { ...t, completed } : t)
    }
}