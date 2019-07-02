import React from 'react' 
import {Form, Col, Button} from 'react-bootstrap'



class FormTopic extends React.Component {
    constructor() {
        super() 
        this.state = {
          title:'',
          notes: '',
          year:'',
          director:'',
          genre:'',
          cast:''
       
        }
        // bind methods, sets the context of the this keyword
        
        this.handleSubmit = this.handleSubmit.bind(this) 
      
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
    // onEditorStateChange: Function = (editorState) => {
    //     this.setState({
    //       editorState: editorState.getCurrentContent()
    //     });
    //   };
    
    
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
        const{title, notes, year, director,cast,genre} = nextProps.story
        this.setState(()=>({
           title,
           notes,
           year,
           director,
           cast,
           genre
        }))
    }

    handleSubmit(e) {
        e.preventDefault() 
        const formData = {
           title: this.state.title,
           notes: this.state.notes,
           year: this.state.year,
           director: this.state.director,
          cast: this.state.cast,
          genre: this.state.genre
        }
        // console.log(this.props)
        this.props.handleSubmit(formData)
        // console.log(formData)
        // // clear form 
        
        this.setState(() => ({ 
           title: '',
           notes:'',
           year: '',
           director:'',
           cast:'',
           genre:''
        }))
      
    }
   
    render() {
        // const { editorState } = this.state;
    //    console.log(this.state.topics)
     
        return (
            <div style={{paddingTop:'100px'}}>
                
               <Form as={Col} md="6" >
               
                    <Form.Group as={Col} md="8" controlId="formBasicName">
                        <Form.Label> Movie Name </Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={this.handleTitleChange}  placeholder="title" required />
                        
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="formBasicnotes">
                        <Form.Label> Notes </Form.Label>
                        <Form.Control as="textarea" rows='10' value={this.state.notes} onChange={this.handleNotesChange}  placeholder="notes" required />
                        
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="formBasicName">
                        <Form.Label>Year </Form.Label>
                        <Form.Control type="text" value={this.state.year} onChange={this.handleYearChange}  placeholder="year" required />
                        
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="formBasicName">
                        <Form.Label> director </Form.Label>
                        <Form.Control type="text" value={this.state.director} onChange={this.handleDirectorChange}  placeholder="director" required />
                        
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="formBasicName">
                        <Form.Label> Cast </Form.Label>
                        <Form.Control type="text" value={this.state.cast} onChange={this.handleCastChange}  placeholder="cast" required />
                        
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="formBasicName">
                        <Form.Label> genre </Form.Label>
                        <Form.Control type="text" value={this.state.genre} onChange={this.handleGenreChange}  placeholder="genre" required />
                        
                    </Form.Group>
                   
                   
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
               
            </div>
        )
    }
}

export default FormTopic