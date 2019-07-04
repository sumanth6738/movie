import React from 'react'
import axios from 'axios'
import {Form} from 'react-bootstrap'

class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            query: '',
            results: []
        }
    }

  getInfo = (e) => {
      axios.get(`http://training.mobignosis.net/movies`)
    // axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response =>{
        // console.log(this.state.query)
        // console.log(response.data)
        this.setState({
        results: response.data.values.filter(data => data.title.toLowerCase() === this.state.query)
       
    })
    this.props.handleSearch(this.state.results)
    })  
  }

  handleInputChange = (e) => {
      e.preventDefault()
    this.setState({
      query: this.search.value
     
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // if (this.state.query.length % 2 === 0) {
          this.getInfo()
        // }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
        <div align="center">
          <Form>
          <Form.Group  controlId="formBasicSearch">
            <Form.Control type="text"   onChange={this.handleInputChange}  placeholder="Search For..."  ref={input => this.search = input} />
          </Form.Group>
          </Form>
          {/* <form >
            <input
              placeholder="Search for..." id="myInput"
              onChange={this.handleInputChange}
            />
          </form> */}
      </div>
    )
  }
}

export default Search