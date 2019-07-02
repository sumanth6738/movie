import React from 'react'
// import Movielist from './../Movies/Movielist'

const Suggestions = (props) => {
    
  const options = props.movies.map(movie => (
    <li key={movie.id}>
      {movie.name}
    </li>
   
  ))

  return (
      <div>
  <ul>{options}</ul>
  
  </div>
  )
}

export default Suggestions