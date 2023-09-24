import React, {ReactNode} from "react";

export interface TodoContextData {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    selectedList: string,
    setSelectedList: React.Dispatch<React.SetStateAction<string>>
}

export interface TodoProviderProps {
    children: ReactNode;
}

export interface Todo {
    id: number,
    text: string,
    done: boolean
}