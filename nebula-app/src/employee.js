import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Employee = () =>{

    const [show, setShow] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd = () => setShowAddModal(true);
    const handleAddClose = () => setShowAddModal(false);

    const[name, setName] = useState('')
    const[age, setAge] = useState('')
    const[isActive, setIsActive] = useState(0)

    const[editId, setEditId] = useState('')
    const[editName, setEditName] = useState('')
    const[editAge, setEditAge] = useState('')
    const[editIsActive, setEditIsActive] = useState(0)

    const empData = [
        {
            id : 1,
            name : 'Virat',
            age: 30,
            isActive:1
        },
        {
            id : 2,
            name : 'Virat',
            age: 30,
            isActive:1
        }
    ]

    const handleEdit =(id) =>{
        handleShow();
    }

    const handleDelete =(id) =>{
        if(window.confirm("Are you sure to delete this emloyee?") == true)
        {
            alert(id);
        }
    }

    const handleUpdate = () =>{

    }

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(empData)
    }, [])

    return(
        <Fragment>
            <Container>

            <Row className="justify-content-start">
                    <button className="btn btn-success" onClick={handleAdd} style={{ maxWidth: '150px' }} >Add New</button>
            </Row>
            <Modal show={showAddModal} onHide={handleAddClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Emloyee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                    <Col>
                        <input type="text" className="form-control" />
                    </Col>
                    <Col><input type="text" className="form-control" /></Col>
                    <Col>
                        <input type="checkbox" />
                        <label>IsActive</label>
                    </Col>
                </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleUpdate}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>


            </Container>
            <br></br>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>IsActive</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0?
                        data.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.isActive}</td>
                                    <td colSpan={2}>
                                        <button className="btn btn-primary" onClick={()=> handleEdit(item.id)}>Edit</button> &nbsp;
                                        <button className="btn btn-danger" onClick={()=> handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        'Loading...'
                    }
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update Emloyee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                    <Col>
                        <input type="text" className="form-control" />
                    </Col>
                    <Col><input type="text" className="form-control" /></Col>
                    <Col>
                        <input type="checkbox" />
                        <label>IsActive</label>
                    </Col>
                    <Col>
                        <button className="btn btn-primary">Submit</button>
                    </Col>
                </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

        </Fragment>
    )

}

export default Employee;