import React, {useEffect, useState} from "react";
import {Todo} from "../../types";
import {useData} from "../../Context/TodoContext";

const Header: React.FC = () => {
    const {todos, setTodos} = useData()
    const initialFormValues = {id: todos.length, text: "", done: false}
    const [form, setForm] = useState<Todo>(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    }, [todos])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({
            id: todos.length + 1,
            text: event.target.value,
            done: false
        })
    }

    const onSubmit = (event: React.FormEvent): void | boolean => {
        event.preventDefault()

        if (form.text === "") return false

        setTodos([...todos, form])
        console.log(todos)
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input
                    name="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={form.text}
                    onChange={onChange}
                    autoFocus
                />
            </form>
        </header>
    )
}

export default Header