import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Link} from 'react-router-dom'
import {Row, Modal,Button} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import Daterange from '@material-ui/icons/DateRange';
import StarRatings from '../../../node_modules/react-star-ratings';
import Fab from '@material-ui/core/Fab';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
class MovieShow extends React.Component {
    constructor(props,context) {
        super(props, context)
        this.state = {
           movie:{},
           show: false,
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
    componentDidMount(){
        const id = this.props.match.params.id
        //console.log(id)
        axios.get(`http://training.mobignosis.net/movies/${id}`)
        .then(response => this.setState(()=> ({movie:response.data.values})))
    }
    handleDelete (){
        // const confirmDelete = window.confirm("Are you sure?")
        // if(clicked){
        //api call to delete
        axios.delete(`http://training.mobignosis.net/movies/${this.state.movie.id}`)
        .then(()=> this.props.history.push('/movies'))
        .catch(err => (err))
        // }
    }
   
      render(){
        const {classes} = this.props;
        // console.log(this.state.movie)
        return(
            <div className="container-fluid" style={{paddingTop:'80px'}}>
            <div className="row">
              
                     
                <div className="col xs={12} sm={12} md={12} lg={12} "> <h2>Movie Details </h2> 
                <hr></hr>
                <Row>   
                    <div className="col xs={12} sm={12} md={6} lg={6}">
                    <ReactPlayer url='https://www.youtube.com/watch?v=668nUCeBHyY' playing /> <br></br>
                    </div>

                    <div className="col xs={12} sm={12} md={6} lg={6}" style={{paddingTop:"0px"}}>
                        <h1 style={{color:'#ad0954'}}> <b>{this.state.movie.title}</b>
                        <span style={{float:'right'}}>
                            <Fab size='small' style={{backgroundColor:"#ad0954",marginRight:'10px'}} aria-label="Edit" className={classes.fab}>
                            <Link to={`/movies/edit/${this.state.movie.id}`} style={{color:'white'}}>   <Edit /></Link>
                            </Fab>
                            <Fab size='small' style={{backgroundColor:"#ad0954",color:'white'}} aria-label="Delete" className={classes.fab} onClick={this.handleShow}>
                            <Delete /> 
                            </Fab>
                            <Modal show={this.state.show} onHide={this.handleClose} style={{marginTop:"200px"}}>
                                <Modal.Header  style={{backgroundColor:"#ad0954"}}>
                                    <Modal.Title style={{backgroundColor:"#ad0954",color:'white'}}>Delete </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Are you Sure, you want to delete?</Modal.Body>
                                <Modal.Footer>
                                    <Button   style={{backgroundColor:"#ad0954",color:'white'}} onClick={this.handleDelete}>
                                    Yes
                                    </Button>
                                    <Button  style={{backgroundColor:"#ad0954",color:'white'}} onClick={this.handleClose}>
                                    No
                                    </Button>
                                    
                                </Modal.Footer>
                            </Modal>
                        </span>
                        </h1> 
                        <Row> 
                        <div className="col xs={6} sm={6} md={3} lg={6}">
                            <StarRatings
                            rating={4}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="gold"
                        /> <br></br><p>Users rating</p> 
                        </div>
                        <div className="col xs={6} sm={6} md={3} lg={6}">
                            <StarRatings
                            rating={3.5}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="gold"
                        /> <br></br><span >Critics rating</span> 
                        </div>
                        </Row>
                            <h2><Daterange /> {this.state.movie.year}</h2> <br></br>
                            <h5  style={{fontfamily:  "sans-serif"}}><b> Director </b> : {this.state.movie.director}<br></br></h5>
                            <h5 style={{fontfamily:  "sans-serif"}}> <b> Cast </b> : {this.state.movie.cast}<br></br></h5>
                            <h5 style={{fontfamily:  "sans-serif"}}> <b> Description </b> : {this.state.movie.notes}<br></br> </h5> 
                            {/* <center>
                            <Link to ={`/movies/edit/${this.state.movie.id}`}><Button>Edit </Button> </Link>

                            <Button variant="primary"onClick= {this.handleDelete}>
                                delete 
                            </Button>
                            <Link to ="/movies"> <Button> Back</Button> </Link></center> */}
                                
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
MovieShow.propTypes = { 
    classes : PropTypes.object.isRequired
}
export default withStyles(styles)(MovieShow)
