import React, { Fragment, useEffect, useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

function Counter(props) {
    const array = useState(0); //useState returns an array of two elements
    const count = array[0]; //first element is the current state vale. It is equivalent to "this.state.count" in a class component 
    const setCount = array[1]; //second element is a function to update the value. It is equivalent to "this.setState()" in a class component

    //we could write the above code like this by array destructuring 
    const [count2, setCount2] = useState(0); //so line 4,5,6 is equivalent to line 9

    const [user, setUser] = useState('');

    //in useEffect the first param is a function where we perform certain actions
    //the second param (dependency array) is optional which is used to declare on which values this effect is dependent. If that values are changed then this effect is executed.
    // we can also return a function from this effect where we will write the "clean up" code like we used to write in "componentWillUnmount" function.
    
    // useEffect (() => {
    //     document.title = `${user} clicked ${count} times`;

    //     return () => {
    //         //cleanup code
    //     }
    // }, [count]);

    //by using custom hooks
    useDocumentTitle(`${user} clicked ${count} times`);


    return (
        <Fragment>
            <div>
                <input type = "text" onChange={ e => setUser(e.target.value)} />
                <br />
                {user } clicked counter one {count} times !!
            </div>
            <button onClick= { () => setCount(count + 1)}>Counter 1</button>
            <br />
            <br />
            <div>
                {user } clicked counter two {count2} times !!
            </div>
            <button onClick= { () => setCount2(count2 + 1)}>Counter 2</button>
        </Fragment>
    );
}

export default Counter;