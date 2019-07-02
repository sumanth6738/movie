import React from 'react' 
import {Row, Form, Col, Button, Card, Popover, OverlayTrigger} from 'react-bootstrap'
// import axios from '../../config/axios'
//  import CreatableSelect from 'react-select/lib/Creatable';
import Help from '@material-ui/icons/Help';
// import Help from '@material-ui/icons/Help';

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class MovieForm extends React.Component {
    constructor() {
        super() 
        this.state = {
          title:'',
          year: '',       
          director:'',
          notes:'',
         cast:'',
          genre:'',
          files: [{
            source: 'index.html',
            options: {
                type: 'local'
            }
        }]
            
       
        }
         
    }
    handleTitleChange = (e) => {
        const title = e.target.value
        this.setState(()=>({title}))
    }
    handleNotesChange = (e) => {
        const notes = e.target.value
        this.setState(()=>({notes}))
    }
    handleYearChange = (e) => {
        const year = e.target.value
        this.setState(()=>({year}))
    }
   
     handleDirectorChange = (e) => {
        const director = e.target.value

        this.setState(()=>({director}))
      }
      handleCastChange = (e) => {
        const cast = e.target.value

        this.setState(()=>({cast}))
      }
    // handleChange = (e)=> {
    //     [e.target.name]= e.target.value
    // }
      handleGenreChange = (e) => {
        const genre = e.target.value

        this.setState(()=>({genre}))
      }
      componentWillReceiveProps(nextProps){
        const{title, notes, year,director, genre, cast} = nextProps.movie
        this.setState(()=>({
            title,
             notes,
              year,
              director,
               genre, 
               cast
        }))
    }
   
   
    
      handleSubmit = (e) => {
       
        e.preventDefault() 
        console.log('clicked')
        // const formData = {
        //    title: this.state.title,
        //    notes: this.state.notes,
        //    year: this.state.year,
        //    director: this.state.director,
        //    cast: this.state.cast,
        //    genre: this.state.genre
          
        // }
        // console.log(formData)
        // this.props.handleSubmit(formData)
        // // console.log(this.props)

        // // clear form 

        // this.setState(() => ({ 
        //    title:'',
        //    notes:'',
        //    year:'',
        //    director:"",
        //    cast:'',
        //    genre:''

        // }))
      
    }
    
    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }
    
    render() {
        const popover = (
            <Popover id="popover-basic" name="Add a story description">
            Movies with descriptions get 100x more reads than ones without<br></br>
                Write a short description that will excite your readers and look them in

            </Popover>
          );
          
          const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Help ></Help>
            </OverlayTrigger>
          ); 
      
        return (
            <div className = 'container-fluid' style={{paddingTop:'120px'}}>
            <Row>
                <div className="col-sm-4" >
                <b><center><h2>Add Image</h2> </center></b>
                <FilePond ref={ref => this.pond = ref}
                          files={this.state.files}
                          allowMultiple={true}
                          maxFiles={3} 
                          server="/api"
                          oninit={() => this.handleInit() }
                          onupdatefiles={fileItems => {
                              // Set currently active file objects to this.state
                              this.setState({
                                  files: fileItems.map(fileItem => fileItem.file)
                              });
                          }}>
                </FilePond>
                </div>


                <div className="col-sm-8" >
               
               <Card>
                    <Card.Header><b>Add a Movie</b></Card.Header>
                    {/* <Card.Body>
                        <Card.name>Special name treatment</Card.name>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body> */}
                  <br></br>
               <Form as={Col} md="12"  >
               
                    <Form.Group as={Col} md="6" controlId="formBasicTitle">
                        <Form.Label> <b>Movie Name</b> </Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={this.handleTitleChange}  name="title"   placeholder="unnamed story" required />
                        
                    </Form.Group>
                    <hr></hr>
                    
                    <Form.Group as={Col} sm="12" controlId="formBasicDescription">
                    
                         <Form.Label><b> Description </b> 
                        <Example />
                    
                        </Form.Label>
                        <Form.Control as="textarea" rows='10'  value={this.state.notes} onChange={this.handleNotesChange} name="notes" placeholder="description" required />
                        
                    </Form.Group>   <br></br><hr></hr>
                    <Form.Group as={Col} sm="12" controlId="formBasicYear">
                <Form.Label><b> year </b> 
                    <Example />
                
                    </Form.Label>
                    <Form.Control type="text"   value={this.state.year} onChange={this.handleYearChange} name='year'  placeholder="year" required />
                    
                </Form.Group>   <br></br><hr></hr> 
                    <Form.Group as={Col} sm="12" controlId="formBasicDirector">
                    
                    <Form.Label><b> Director </b> 
                    <Example />
                
                    </Form.Label>
                    <Form.Control type="text" rows='10'  value={this.state.director} onChange={this.handleDirectorChange}  name ="director" placeholder="director" required />
                    
                </Form.Group>   <br></br><hr></hr>
                <Form.Group as={Col} sm="12" controlId="formBasicCast">
                <Form.Label><b> Cast </b> 
                    <Example />
                
                    </Form.Label>
                    <Form.Control type="text" rows='10'  value={this.state.cast} onChange={this.handleCastChange} name="cast" placeholder="music" required />
                    
                </Form.Group>   <br></br><hr></hr>
                   
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect1" > 
                        <Form.Label> <b>Genre</b> <Example /></Form.Label>
                       
                        <Form.Control as="select" value={this.state.genre} onChange={this.handleGenreChange}>
                    {/* <select value={this.state.genreId} onChange={this.handlegenreChange}> */}
                        <option> Select a genre</option>
                        <option value='action'> Action</option>
                        <option value='horror'> horror</option>
                        <option value="romance"> romance</option>
                    {/* </select> */}
                        </Form.Control>
                    </Form.Group>    <hr></hr>
                  
                    {/* <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect2" >
                        <Form.Label> <b>Tags</b> <Example /></Form.Label>
                    <CreatableSelect
                        isClearable
                        onChange={this.handleTagChange}
                        isMulti
                        // options={options}
                    />
                     </Form.Group> */}
                    <br/>
                    <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                        Submit
                    </Button>
                  
                </Form>
                <br></br>
                </Card>
            
                </div>
                </Row>
            </div>
        )
            
    }
}

export default MovieForm