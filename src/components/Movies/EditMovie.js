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
        .then(response => this.setState(()=> ({movie:response.data.values})))
    }
        
       

    handleSubmit(formData) {
       
    //    const id = this.props.match.params.id
        axios.put(`http://training.mobignosis.net/movies/${this.state.movie.id}`, formData)
        .then(() => this.props.history.push(`/movies`))
        .catch(err => console.log(err))
    }

    render(){
        console.log(this.state.movie)
        return (
            <div style={{paddingTop: '70px'}}>
                
               <MovieForm
               movie= { this.state.movie}
               handleSubmit = {this.handleSubmit}
               />
            </div>
        )
    }
}

export default EditMovie