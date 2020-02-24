import React, { useState } from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import './index.css'

function TransitionGroupList(){
    const [ list , setList ] = useState([
        { id: 1, text: 'Buy eggs' },
        { id: 2, text: 'Pay bills' },
        { id: 3, text: 'Invite friends over' },
        { id: 4, text: 'Fix the TV' }])
    return(
        <div>
            <TransitionGroup >
            {list.map(({ id, text }) => (
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="fade"
                >
                <div>
                    <button onClick={()=>setList(list.filter(item=>item.id!==id))}> 
                        &times;
                    </button>
                    {text}
                </div>
                </CSSTransition>
            ))}
            </TransitionGroup>
            <button onClick={()=>setList(list.concat({id:5,text:'addone'}))}>
                Add Item
            </button>
        </div>
    )
}

export default TransitionGroupList;