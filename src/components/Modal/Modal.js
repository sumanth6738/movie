import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
import {Row} from 'react-bootstrap'
import ReactPlayer from 'react-player'
function ModalView(props) {
    return(
        <>
           {props.show && (
                <Modal size="lg" show={props.show} onHide={props.handleClose}>
                <Modal.Header>    
                    <h4> {props.movies.title}</h4><br></br>
                </Modal.Header>
                <Modal.Body style={{fontFamily:'san-serif'}}>
                <div className="col xs={12} sm={12} md={6} lg={6}">
                    <ReactPlayer url='https://www.youtube.com/watch?v=668nUCeBHyY' playing /> <br></br>
                </div>
                <h4><b>Title</b>: {props.movies.title}</h4>
                <h6>{props.movies.year}</h6>
                <Row> 
                        <div className="col ">
                            <StarRatings
                            rating={4}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="gold"
                        /> <br></br><p>Users rating</p> 
                        </div>
                        <div className="col">
                            <StarRatings
                            rating={3.5}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="gold"
                        /> <br></br><span >Critics rating</span> 
                        </div>
                    </Row>
                <h6><b>Director</b>: {props.movies.director}</h6>
                <h6><b>Cast</b>: {props.movies.cast}</h6>
                <h6><b>Description</b>: {props.movies.notes}</h6>
                </Modal.Body>
                <Modal.Footer>
                    
                  <Button variant="secondary" onClick={props.handleClose}>
                    Close
                  </Button>
                 
                </Modal.Footer>
              </Modal>
           )}
        </>
    )
}
export default ModalView