import React from 'react' 
import {Row, Form, Col, Button, Card, Popover, OverlayTrigger} from 'react-bootstrap'
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
          title: "",
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
        // console.log('clicked')
        const formData = {
           title: this.state.title,
           notes: this.state.notes,
           year: this.state.year,
           director: this.state.director,
           cast: this.state.cast,
           genre: this.state.genre
          
        }
        console.log(formData)
        this.props.handleSubmit(formData)
        // console.log(this.props)

        // clear form 

        this.setState(() => ({ 
           title:'',
           notes:'',
           year:'',
           director:"",
           cast:'',
           genre:''

        }))
      
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
                    
                  <br></br>
                  <Form as={Col} md="8" >
               
               <Form.Group as={Col} md="8" controlId="formBasicName">
                   <Form.Label> Movie Name <Example/> </Form.Label>
                   <Form.Control type="text" value={this.state.title} onChange={this.handleTitleChange}  placeholder="title" required />
               </Form.Group><hr></hr>
               <Form.Group as={Col} md="8" controlId="formBasicDescription">
                   <Form.Label> Notes <Example/> </Form.Label>
                   <Form.Control as="textarea" rows='3' value={this.state.notes} onChange={this.handleNotesChange}  placeholder="description" required />
               </Form.Group><hr></hr>
               <Form.Group as={Col} md="8" controlId="formBasicYear">
                   <Form.Label>Year</Form.Label>
                   <Form.Control type="text" value={this.state.year} onChange={this.handleYearChange}  placeholder="year" required />
               </Form.Group><hr></hr>
               <Form.Group as={Col} md="8" controlId="formBasicDirector">
                   <Form.Label>Director</Form.Label>
                   <Form.Control type="text" value={this.state.director} onChange={this.handleDirectorChange}  placeholder="director" required />
               </Form.Group><hr></hr>
               <Form.Group as={Col} md="8" controlId="formBasicCast">
                   <Form.Label>Cast</Form.Label>
                   <Form.Control type="text" value={this.state.cast} onChange={this.handleCastChange}  placeholder="cast" required />
               </Form.Group><hr></hr>
               <Form.Group as={Col} md="8" controlId="formBasicGenre">
                   <Form.Label>Genre</Form.Label>
                   <Form.Control as="select" value={this.state.genre} onChange={this.handleGenreChange}   required >
                    <option>select</option>
                    <option value="Action">Action</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    <option value="Comedy-drama">Comedy-drama</option>
                    
                    </Form.Control>
               </Form.Group>
               
               <br></br>
              
               
              
               <br/>
               <Button variant="primary" type="submit" onClick={this.handleSubmit}>
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