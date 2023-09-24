import React, {createContext, useContext, useState} from "react";
import {Todo, TodoContextData, TodoProviderProps} from "../types";

const initialValues: TodoContextData =  {
    todos: [],
    setTodos: (): void => {},
    selectedList: "",
    setSelectedList: (): void => {}

}
const TodoContext = createContext<TodoContextData>(initialValues);

export const useData = (): TodoContextData => {
    return useContext(TodoContext);
}

export const TodoProvider: React.FC<TodoProviderProps> = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [selectedList, setSelectedList] = useState<string>("All")

    const data: TodoContextData = {
        todos,
        setTodos,
        selectedList,
        setSelectedList
    }

    return (
        <TodoContext.Provider value={data}>
            {children}
        </TodoContext.Provider>
    )
}