import React from 'react';
import axios from 'axios'

class Drama extends React.Component {
    constructor() {
        super() 
        this.state = {
            Movies:[],
            
        }
    }
    componentDidMount(){
        axios.get('http://training.mobignosis.net/movies?page=1800&limit=10')
        .then(response => this.setState(()=> ({Movies:response.data.values})))
    }
    render(){
        const drama = this.state.Movies.filter(movie=>{
            console.log(movie.genre === 'Drama')
        }
            )
            console.log(drama)
        console.log(this.state.Movies)
        return(
            <div>
                <h2 style={{paddingTop:'100px'}}> Linsting all Drama Movies</h2>
            </div>
        )
    }
}
export default Drama;
