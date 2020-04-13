import React, { useState } from 'react'

/*
    引用相等
    昂贵的计算
    
    不必要的重新渲染 函数
    const increment1 = React.useCallback(() => setCount1(c => c + 1), [])
    （非原始值）对象、数组、函数
    const bar = React.useCallback(() => {}, [])
    const baz = React.useMemo(() => [1, 2, 3], [])
    return <Foo bar={bar} baz={baz} />
*/

const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']

export const MemoCallbackTest = () =>{
    // const initialCandies = React.useMemo(
    //     () => ['snickers', 'skittles', 'twix', 'milky way'],[],
    // )
    
    const [candies, setCandies] = useState<Array<string>>(initialCandies)
    const dispense = (candy: string) => {
        setCandies(allCandies => allCandies.filter(c => c !== candy))
    }

    // const dispenseCallback = useCallback(dispense, [])

    return(
        <div>
            <h1>Candy Dispenser</h1>
            <div>
            <div>Available Candy</div>
                {candies.length === 0 ? (
                    <button onClick={() => setCandies(initialCandies)}>refill</button>
                ) : (
                    <ul>
                    {candies.map(candy => (
                        <li key={candy}>
                        <button onClick={() => dispense(candy)}>grab</button> {candy}
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </div>
    )
}