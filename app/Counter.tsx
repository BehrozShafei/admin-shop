'use client'
import React, { useReducer } from 'react'

export default function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })
    type counter = {
        count: number
    }
    interface actionInterface {
        type: string
    }
    function counterReducer(state: counter, action: actionInterface) {
        console.log('state,action', state, action)
        switch (action.type) {
            case "increment":
                return { ...state, count: state.count + 1 };
            case "decrement":
                return { ...state, count: state.count - 1 }
            default:
                throw new Error();
        }
    };
    return (
        <div>
            <p>Count: {state.count}</p>
            <button className='m-2 bg-red-200 p-4' onClick={() => dispatch({ type: 'increment' })}>  Increment  </button>
            <button className='m-2 bg-slate-800 p-4 text-white' onClick={() => dispatch({ type: 'decrement' })} >  Decrement  </button>
        </div>
    )
}
