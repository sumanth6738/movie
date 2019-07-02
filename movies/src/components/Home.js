import React from 'react' 
import {  Link,} from 'react-router-dom'
// import Header from './layouts/Header'
import Img_slide from './layouts/Img_slide'
import './../App.css'
import Movielist from './Movies/Movielist'



class Home extends React.Component {
    render() {
    return (
        <div >
            {/* <Header /> */}
      <Img_slide /> <br></br>
      <Movielist />
        </div>
    )
    }
}
export default Home