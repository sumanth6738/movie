import React from 'react';
import { BrowserRouter, Route,Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import List from './components/Movies/list'
import MovieShow from './components/Movies/MoviesShow'
import MovieNew from './components/Movies/New'
import EditMovie from './components/Movies/EditMovie';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Search from '@material-ui/icons/Search';
import Homeicon from '@material-ui/icons/Home';
// import Search from './components/layouts/Search'
import Modallist from './components/Modal/Mlist'

function App() {
 
  return (
    <BrowserRouter>
    <div>
    <nav>
      <ul>
          <li className="logo" style={{color:'white'}}>Book My Movie
          <span style={{float: 'right'}} >
          <Link to='/'><Homeicon  style={{ fill: 'white', marginRight:'10px' }} /></Link> 
            <Link to='/movies'><Search  style={{ fill: 'white', marginRight:'10px' }} /></Link> 
           <PermIdentity  style={{ fill: 'white' , marginRight:'30px'}}/></span></li>
          {/* <li>  <input type="text" placeholder="Search.." /></li> */}
      </ul>
        {/* <li><Link to="/"> Home </Link></li>
      <li><Link to="/about">  About </Link></li>
      <li><Link to="/contact">  Contact </Link></li>
      <li><Link to="/newmovie">  Add </Link></li>
      <li><Link to="/login">  Login </Link></li> */}
          
    </nav>
      <Switch>
        <Route path="/" component = {Home} exact={true} />
     
        <Route path="/movies" component = {List} exact={true} />
        {/* <Route path="/search" component = {Search} exact={true} /> */}
        <Route path="/movie/:id" component = {MovieShow} exact={true} />
        <Route path="/newmovie" component = {MovieNew} exact={true} />
        <Route path='/movies/edit/:id'component = {EditMovie} exact={true} />
        <Route path="/modallist" component = {Modallist} exact={true} />
        
           
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
