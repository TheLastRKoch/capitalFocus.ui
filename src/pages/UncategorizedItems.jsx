import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { FiArrowLeftCircle, FiSave, FiArrowRightCircle } from "react-icons/fi";

// Components
import UncategorizedTable from '../components/uncategorized/table';
// import UncategorizedModal from '../components/uncategorized/modal';

const UncategorizedItems = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Transaction description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><b>Commerce: </b>Netflix</ListGroup.Item>
                        <ListGroup.Item><b>City and country: </b>844-5052993, Pais no Definido</ListGroup.Item>
                        <ListGroup.Item><b>Date: </b>Sep 14, 2022, 00:00</ListGroup.Item>
                        <ListGroup.Item><b>Card: </b>************3382</ListGroup.Item>
                        <ListGroup.Item><b>Authorization: </b>411284</ListGroup.Item>
                        <ListGroup.Item><b>reference: </b>225710411284</ListGroup.Item>
                        <ListGroup.Item><b>Type of transaction: </b>Compra</ListGroup.Item>
                        <ListGroup.Item><b>Amount: </b>USD 15.99</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                       <FiArrowLeftCircle></FiArrowLeftCircle> Previous
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                       <FiSave></FiSave> Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                       <FiArrowRightCircle></FiArrowRightCircle> Next
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UncategorizedItems