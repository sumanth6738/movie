import React from 'react'
import {Modal, Button} from 'react-bootstrap'

function ModalView(props) {
    return(
        <>
           {props.show && (
                <Modal show={props.show} onHide={props.handleClose}>
               
                <Modal.Body style={{fontFamily:'san-serif'}}>
                <h4><b>Title</b>: {props.movies.title}</h4>
                <h6>{props.movies.year}</h6>
                <h6><b>Director</b>:{props.movies.director}</h6>
                <h6><b>Cast</b>:{props.movies.cast}</h6>
                <h6><b>Description</b>:{props.movies.notes}</h6>
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