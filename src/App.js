// import Movie from '../src/hoc/Movie.jsx';
// import Counter from './hooks/Counter.jsx';
// import './App.css';
// import User from './hooks/user.jsx';

// function App() {
//   return (
//     // <Movie id = {1} />
//     // <Counter />
//     <User />
//   );
// }

// export default App;

//implement with class component
import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import Login from './context/Login';
import UserContext from './context/userContext';
import CartContext from './context/cartContext';

class App extends Component {
  state = { currentUser : null, cart : [{id : 1, name : "Adidas"}] }

  handleLogin = (userName) => {
    console.log("Getting the username" , userName);
    const user = { name : 'Rakib' };

    this.setState({ currentUser : user });
  }
  render() {
    return (
      <CartContext.Provider value={ this.state.cart }>
        <UserContext.Provider value= { { currentUser : this.state.currentUser, onLogin : this.handleLogin } } >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>  
    );
  }
}

export default App;
