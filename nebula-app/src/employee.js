import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";


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
        getAllEmployees();
    }, [])

    const getAllEmployees = () =>{
        axios.get('https://localhost:44374/api/Employee')
        .then((result)=>{
            setData(result.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    const DepartmentEnum = {
        IT: 'IT',
        HR: 'HR',
        Finance: 'Finance',
        Marketing: 'Marketing'
      };
    
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

            {data && data.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
						<th>#</th>
						<th>Id</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Gender</th>
						<th>Date Of Birth</th>
						<th>Basic Salary</th>
						<th>Department</th>
						<th>Address</th>
                        <th>Actions</th>
						</tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.EmpID}</td>
                                <td>{item.FirstName}</td>
                                <td>{item.LastName}</td>
                                <td>{item.Gender}</td>
                                <td>{item.DateOfBirth}</td>
                                <td>{item.BasicSalary}</td>
                                <td>{DepartmentEnum[item.DepartmentID]}</td>
                                <td>{item.Address}</td>
                                <td colSpan={2}>
                                    <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
                                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>Loading...</p>
            )}

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