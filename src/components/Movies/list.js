import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container, } from '@material-ui/core';
import {Link} from 'react-router-dom'
import img1 from '../../images/Kabir.jpg'
import Grid from '@material-ui/core/Grid';
import Search from './../layouts/Search'

import axios from 'axios';



 const useStyles = makeStyles({
        card: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });

function Movie(props){
        
    const classes = useStyles();
    return(
        <div className='classes_root'  >
            <Container>
                <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                >
                
                {
                props.movies.map(movie => {
                    return(
                        <Grid item xs={12} sm={6} md={3} key={props.movies.indexOf(movie)}>
                        <Card className={classes.card} id="card" >
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={img1}
                            title={movie.title}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            <Link to={`/movie/${movie.id}`}style={{color:'black'}}>{movie.title} </Link>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {movie.year}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                        </Card>
                        </Grid>
                        
                    )
                })
                        
                }           
                </Grid>
            </Container>
        </div>
    )
}

class list extends React.Component{
    constructor(props){
        super(props)
        this.state={
        movies : []
      
    }
   

    }
    componentDidMount(){
        axios.get('http://training.mobignosis.net/movies?page=0&limit=20')
        .then(response => this.setState(()=> ({movies:response.data.values})))
    }
    
    handleSearch  = (results)=>{
        this.setState(()=>({
          movies: results
        }))
      }
   
    
    render(){
 
        return(
            <div style={{paddingTop : '70px'}}>
               <Container > 
                   <hr></hr>
                   <h2 style={{color:'#ad0954'}}> Listing Movies: {this.state.movies.length}
                   <span style={{float: 'right'}}><Search  handleSearch={this.handleSearch}/></span>
                   </h2> <hr></hr>
                </Container>   <br></br>
                <Movie movies={this.state.movies}/>
               <br></br>
            </div>
        )
    }

}
export default list;



