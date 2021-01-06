import React from 'react'

const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitInputHandler = (e) =>{
        console.log(e)
        e.preventDefault();
        setTodos([...todos, {text: inputText,
            completed: false, 
            id: Math.random()*1000 }])
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="tofo-input" />
            <button onClick = {submitInputHandler} type="submit" className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
            <div class="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
                
        </form>
    )
}
export default Form