import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
// import Appli from './components/Movies/movies'
// import Suggestions from './components/layouts/Suggestion'
import MovieForm from './components/Movies/form'
import Movielist from './components/Movies/Movielist'
import UserLogin from './authentication/login'
import Drama from './components/genres/Drama'
import MovieShow from './components/Movies/MoviesShow'
import MovieNew from './components/Movies/New'
import EditMovie from './components/Movies/EditMovie';



function App() {
  return (
    <BrowserRouter>
    <div>
    <nav>
            <ul>
                <li className="logo">Book My Movie</li>
            </ul>
         
            <ul>
                 <li><Link to="/"> Home </Link></li>
                <li><Link to="/about">  About </Link></li>
             
                <li><Link to="/mission">  Mission </Link></li>
                <li><Link to="/contact">  Contact </Link></li>
                <li><Link to="/login">  Login </Link></li>
            </ul>
           
        </nav>
      {/* <Header />
      <Img_slide /> <br></br>
      <Movielist /> */}

      
      <Switch>
      <Route path="/" component = {Home} exact={true} />
      <Route path="/login" component = {UserLogin} exact={true} />
        <Route path="/movies" component = {Movielist} exact={true} />
        <Route path="/movie/:id" component = {MovieShow} exact={true} />
        <Route path="/newmovie" component = {MovieNew} exact={true} />
        <Route path='/movies/edit/:id'component = {EditMovie} exact={true} />
        <Route path="/genre/Drama" component = {Drama} exact={true} />
        {/* <Route path="/suggestion" component = {Suggestions} exact={true} /> */}
           
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
