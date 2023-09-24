import React from "react";
import FooterIn from "../FooterIn";
import Main from "../Main";
import Header from "../Header";

const TodoApp: React.FC = () => {

    return (
        <section className="todoapp">
            <Header/>
            <Main/>
            <FooterIn/>
        </section>
    )
}

export default TodoApp