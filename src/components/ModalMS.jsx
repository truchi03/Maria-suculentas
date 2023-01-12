import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'

export function ModalMS(props) {
  const [show, setShow] = useState(false)

  const btnText = props.btnText

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button 
        variant="primary" 
        onClick={handleShow} 
        className="d-block m-auto mb-3"
      >
        {btnText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            {
              props.inputs.map((inp, i) => {
                return <Form.Group className="mb-3" key={i}>
                  <Form.Label>{inp.label}</Form.Label>
                  <Form.Control 
                    type={inp.type} 
                    placeholder={'Ingrese ' + inp.label} 
                    id={inp.name}
                  />
                </Form.Group>
              })
            }
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {props.btn1Text}
          </Button>
          <Button 
            variant="primary" 
            onClick={() => {props.btn2Method(); handleClose()}}
          >
            {props.btn2Text}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}