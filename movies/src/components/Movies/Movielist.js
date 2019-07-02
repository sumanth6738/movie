import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
// import {Row, Container,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import img1 from '../../images/Kabir.jpg'
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add'
import axios from 'axios';
// import Suggestions from './../layouts/Suggestion'
// import img2 from '../../images/uri.jpg'
// import img3 from '../../images/sanju.jpg'
// import img4 from '../../images/rajni.jpg'
// import img5 from '../../images/dangal.jpg'
// import {Container, Row, Col} from 'react-pure-grid';


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
            <div className='classes_root' >
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
                            <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={img1}
                                title={movie.title}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                <Link to={`/movie/${movie.id}`}>{movie.title} </Link>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                {movie.year}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Book 
                                </Button>
                            </CardActions>
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
        movies : [
            // {id:1, name: 'kabir Singh', description: 'A house surgeon goes into a self-destructive spiral after his girlfriend is forced to marry another man.',
            //         director:'Sandeep Reddy Vanga', music:'Amaal mallik',img:'img1'},
            // {id:2, name:'Uri', description: 'Major Vihaan Singh Shergill of the Indian Army leads a covert operation against a group of militants who attacked a base in Uri, Kashmir, in 2016 and killed many soldiers.',
            //     director:'Aditya Dhar', music:'Shashwat Sachdev'},
            // {id:3, name:'sanju', description: 'Sanjay Dutt, an actor from the Bollywood film industry, struggles with the legacy that is handed down to him from his parents, along with his personal dilemmas and vices.',
            //         director:'Rajkumar Hirani', music:'A.R.Rahman'},
            // {id:4, name:'2.0', description: 'In Chennai, when Dr Vaseegaran and his humanoid robot, Nila, are summoned to help save the city from the destructive Pakshi Rajan, a bird-shaped being, he reinstates Chitti.',
            //         director:'S Shankar', music:'A.R.Rahman'},
            // {id:5, name:'Dangal', description: 'Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country by training his daughters for the Commonwealth Games despite the existing social stigmas.',
            //         director:'Nitesh Tiwari', music:'Pritam Chakraborty'},
            // {id:6, name:'KGF', description: 'With an endeavour to fulfil a promise made to his dying mother, Rocky, a young man, embarks on a quest to conquer power and wealth from the streets of Mumbai to Kolar Gold Fields.',
            //         director:'Prashanth Neel', music:'Ravi basur'},

        ]
    }
   

    }
    componentDidMount(){
        axios.get('http://training.mobignosis.net/movies?page=1800&limit=10')
        .then(response => this.setState(()=> ({movies:response.data.values})))
    }
   
    
    render(){
       
        return(
            <div >
               <Container> 
                <h3 style={{border:'1px'}}><Link to='/genre/Drama'>Drama</Link>
                <span style={{float: 'right'}}>
                <Link to='/newmovie'><Add></Add></Link>
                </span></h3>
                </Container>   <br></br>
            <Movie movies={this.state.movies}/>
            {/* <Suggestions movies={this.state.movies}/> */}
            </div>
        )
    }

}
export default Movielist;



