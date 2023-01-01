import React from "react"
import { useReducer, useState } from "react"

const initialstate = {
    list: []
}

const reducer = (state, action) => {
    const data = action.value
    switch (action.type) {
        case "add":
            return {
                list: [
                    ...state.list,
                    {
                        data: data
                    }
                ]
            }
        case "remove":
            return {
                list: state.list.filter((value, index) => {
                    return action.id !== index
                })
            }
        default:
            return state
    }
}

function Todolist() {
    const [input, setInput] = useState("")
    const [state, dispatch] = useReducer(reducer, initialstate)
    const { list } = state
    return (

        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => dispatch({ type: "add", value: input }, setInput(""))}>submit</button>
            {list.map((value, i) => {
                return <li key={i}>{value.data}<span><button onClick={() => dispatch({ type: "remove", id: i })}>X</button></span></li>
            })}

        </div>
    )
}

export default Todolist