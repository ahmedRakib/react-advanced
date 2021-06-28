import React, { useState, useEffect } from 'react';
import axios from 'axios'

function User(props) {
    const [user, setUser] = useState([])

    useEffect (() =>{
        getUserList(); //we cannot pass async function as parameter of useEffect. So we had to pass a normal function from where we call the async function 
    });

    const getUserList = async () =>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUser(data)
    }
    
    return (
        <div>
            <ul>
                {user.map(user =>
                    <li>{user.name}</li>
                )}
            </ul>
        </div>
    );
}

export default User;