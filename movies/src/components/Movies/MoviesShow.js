import React from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
 import {  Row} from 'react-bootstrap';




class MovieShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           movie:{}
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    componentDidMount(){
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`http://training.mobignosis.net/movies/${id}`)
        .then(response => this.setState(()=> ({movie:response.data.values})))
    }
    handleDelete (){
        const confirmDelete = window.confirm("Are you sure?")
        if(confirmDelete){
            //api call to delete
            axios.delete(`http://training.mobignosis.net/movies/${this.state.movie.id}`)
            .then(()=> this.props.history.push('/movies'))
            .catch(err => window.alert(err))
        }
    }
   
      render(){
 
        // console.log(this.state.movie)
        return(
            <div className="container-fluid" >
            <div className="row">
              
                     
                <div className="col-sm-9"> <h2>Movie Details </h2> <br></br>
                <hr></hr>
                <Row>   
                    <div className="col-sm-3">
                       
                        </div>
                        <div className="col-sm-4" style={{paddingTop:"50px"}}>
                                    <b> Title </b> :   <b>{this.state.movie.title}</b><br></br>
                                   <b> Year</b> : {this.state.movie.year}<br></br>
                                    <b> Director </b> : {this.state.movie.director}<br></br>
                                    <b> Cast </b> : {this.state.movie.cast}<br></br>
                                    <b> notes </b> : {this.state.movie.notes}<br></br>
                                    
                                    <center>
                     <Link to ={`/movies/edit/${this.state.movie.id}`}> edit </Link>

                     <button onClick= {this.handleDelete}>
                        delete 
                     </button>
                     <Link to ="/movies"> back </Link></center>
                                <br></br>
                            
                        <br></br>
                    <br></br>  
                    </div>  
                      
                </Row>  
               
                </div>  
            </div>


        </div>
        )
    }
}
export default MovieShow
