import React from 'react' 
// import {  Link,} from 'react-router-dom'
// import Header from './layouts/Header'
import Img_slide from './layouts/Img_slide'
import './../App.css'
import Movielist from './Movies/Movielist'
import Modallist from './Modal/Mlist'




class Home extends React.Component {
    render() {
    return (
        <div style={{paddingTop:'50px'}}>
            {/* <Header /> */}
            <Img_slide /> <br></br>
            <Movielist /><br></br>
            <Modallist />
            
        </div>
    )
    }
}
export default Home