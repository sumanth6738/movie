import React from 'react' 
import axios from 'axios'
import MovieForm from './form'

class MovieNew extends React.Component {
    constructor(){
        super() 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
      //  console.log('contact new component')
        axios.post('http://training.mobignosis.net/movies', formData)
        .then(() => this.props.history.push('/movies'))
        .catch(err => console.log(err))
    }

    render(){
        
        return (
            <div>
                
                <h2> Add Movie </h2>
                <MovieForm handleSubmit={this.handleSubmit} /> 
            </div>
        )   
    }
}

export default MovieNew