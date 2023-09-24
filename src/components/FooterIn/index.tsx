import React from "react";
import {useData} from "../../Context/TodoContext";

const FooterIn: React.FC = () => {
    const {
        todos,
        setTodos,
        selectedList,
        setSelectedList
    } = useData()

    return (
        <footer className="footer">
                <span className="todo-count">
                    <strong>{todos.length} </strong>
                    items left
                </span>
            <ul className="filters">
                <li>
                    <a
                        href="#/"
                        className={selectedList === "All" ? "selected" : ""}
                        onClick={() => setSelectedList("All")}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        href="#/"
                        className={selectedList === "Active" ? "selected" : ""}
                        onClick={() => setSelectedList("Active")}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        href="#/"
                        className={selectedList === "Completed" ? "selected" : ""}
                        onClick={() => setSelectedList("Completed")}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            <button className="clear-completed" onClick={() => setTodos([])}>
                Clear completed
            </button>
        </footer>
    )
}

export default FooterIn