import React from 'react';
import TodoApp from "./components/TodoApp";
import FooterOut from "./components/FooterOut";
import {TodoProvider} from "./Context/TodoContext";

function App() {
    return (
        <TodoProvider>
            <div className="container">
                <TodoApp/>
                <FooterOut/>
            </div>
        </TodoProvider>
    )
}

export default App;
