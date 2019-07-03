import React from 'react' 
import axios from 'axios'
import MovieForm from './form'

class EditMovie extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            movie : {},
         }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount (){
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`http://training.mobignosis.net/movies/${id}`)
        .then(response => this.setState(()=> ({movie:response.data})))
    }
        
       

    handleSubmit(formData) {
       // console.log('note new component')
        axios.put(`/movies/${this.state.movie.id}`, formData)
            .then(() => this.props.history.push(`/movies/${this.state.movie.id}`))
            .catch(err => console.log(err))
    }

    render(){
        console.log(this.state.movie)
        return (
            <div>
                <h2> Edit movie</h2>
                <MovieForm
                  movie = {this.state.movie}
                  handleSubmit = {this.handleSubmit}
                  />
            </div>
        )
    }
}

export default EditMovie