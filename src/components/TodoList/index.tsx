import React from "react";
import {useData} from "../../Context/TodoContext";
import {Todo} from "../../types";

const TodoList: React.FC = () => {
    const {
        todos,
        setTodos,
        selectedList
    } = useData()
    const onChange = (id: number, isChecked: boolean): void => {
        const updatedTodos: Todo[] = todos.map((item: Todo): Todo => {
            if (item.id === id) {
                return { ...item, done: isChecked };
            }
            return item;
        });

        setTodos(updatedTodos);
    }

    const removeTodo = (id: number): void => {
        const updatedTodos = todos.filter((item): boolean => item.id !== id)
        setTodos(updatedTodos)
    }

    const filteredTodos = (): Todo[] => {
        switch (selectedList) {
            case "All":
                return todos
            case "Active":
                return todos.filter((item: Todo) => !item.done)
            case "Completed":
                return todos.filter((item: Todo) => item.done)
            default:
                return todos
        }
    }

    return(
        <ul className="todo-list">
            {
                filteredTodos().map((item: Todo) => (
                    <li key={item.id} className={item.done ? "completed" : ""}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(item.id, event.target.checked)}
                            />
                            <label>{item.text}</label>
                            <button className="destroy" onClick={() => removeTodo(item.id)}></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList