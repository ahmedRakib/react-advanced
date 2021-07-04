import React, { Component } from 'react';
import UserContext from './userContext';
import MovieRow from './MovieRow';

class MovieList extends Component {
    //static contextType = UserContext; // contextType is a static property of MovieList class. this line is executed while creating the class. not after like below
    
    componentDidMount() {
        console.log("User Context", this.context.name)
    }

    render() {
        return (
            <UserContext.Consumer>
            {
                value =>  <div>Movie List (class component) = { value.currentUser ? value.currentUser.name : "" } <MovieRow /> </div>
            }   
            </UserContext.Consumer>
            
        );
    }
}

MovieList.contextType = UserContext; //contextType is a static property of MovieList class
                                 //static property is a property that belongs to a class. not to an object
                                 //this line executed after creating the class
export default MovieList;