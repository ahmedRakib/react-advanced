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
import UserContext from './context/userContext';

class App extends Component {
  state = { currentUser :  { name : "Rakib" } }
  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
      
    );
  }
}

export default App;
