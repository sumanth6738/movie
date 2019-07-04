import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container, } from '@material-ui/core';
import {Link} from 'react-router-dom'
import img1 from '../../images/Kabir.jpg'
import Grid from '@material-ui/core/Grid';
import axios from './../../config/axios';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
  }));

 

function Movie(props){
        
    const classes = useStyles();
    return(
        <div className='classes_root'  >
            <Container > 
                        
            <h3 style={{border:'1px', color:'#ad0954'}}><Link to='/movies' style={{color:'#ad0954'}}>Movies </Link>
            <span style={{float: 'right', fontSize:'15px'}}>
            <Fab style={{backgroundColor:"#ad0954", marginTop:'-10px'}} aria-label="Add" className={classes.fab}>
            <Link to='/newmovie'style={{color:'white'}}><AddIcon /></Link>  
            </Fab>
            </span></h3>

            </Container>   <br></br>
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
                        <Grid item xs={12} sm={6} md={2} key={props.movies.indexOf(movie)}>
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

class Movielist extends React.Component{
    constructor(props){
        super(props)
        this.state={
        movies : [],
      
    }
    }

    componentDidMount(){
        axios.get('/movies?page=0&limit=6')
        .then(response => this.setState(()=> ({movies:response.data.values})))
    }
    
    // handleSearch = (e) =>{
    //     const result = e.target.value
    //     // console.log(result)
    //     this.state.suggest = this.state.movies.filter(movie => Object.values(movie).join('').includes(result)) 
    //         console.log(this.state.suggest)
    // }
    
    
    render(){
  
        return(
            <div >
              
                <Movie movies={this.state.movies}/>
              
            </div>
        )
    }

}
export default Movielist;



