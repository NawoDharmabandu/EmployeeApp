import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Employee = () =>{

    const [show, setShow] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd = () => setShowAddModal(true);
    const handleAddClose = () => setShowAddModal(false);

    const[FirstName, setFirstName] = useState('')
    const[LastName, setLastName] = useState('')
    const[Gender, setGender] = useState('')
    const[DateOfBirth, setDateOfBirth] = useState('')
    const[BasicSalary, setBasicSalary] = useState(null)
    const[DepartmentID, setDepartmentID] = useState('')
    const[Address, setAddress] = useState('')

    const[editID, setEditID] = useState('')
    const[editFirstName, setEditFirstName] = useState('')
    const[editLastName, setEditLastName] = useState('')
    const[editGender, setEditGender] = useState('')
    const[editDateOfBirth, setEditDateOfBirth] = useState('')
    const[editBasicSalary, setEditBasicSalary] = useState(null)
    const[editDepartmentID, setEditDepartmentID] = useState(null)
    const[editAddress, setEditAddress] = useState('')

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

    const getAllEmployees = () =>{
        axios.get('https://localhost:44374/api/Employee')
        .then((result)=>{
            setData(result.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    const handleEdit =(id) =>{
        handleShow();
        axios.get('https://localhost:44374/api/Employee/${id}')
        .then((result)=>{
            setEditFirstName(result.data.FirstName);
            setEditLastName(result.data.LastName);
            setEditGender(result.data.Gender);
            setEditDateOfBirth(result.data.DateOfBirth);
            setEditBasicSalary(result.data.BasicSalary);
            setEditDepartmentID(result.data.DepartmentID);
            setEditAddress(result.data.Address);
            setEditID(id);
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    const handleDelete =(id) =>{
        if(window.confirm("Are you sure to delete this emloyee?") == true)
        {
            axios.delete('https://localhost:44374/api/Employee/${id}')
            .then((result) => {
                if(result.status == 200)
                {
                    toast.success('Employee has been deleted,')
                }
            })
            .catch((error)=>{
                toast.error(error);
            })
        }
    }

    const handleUpdate = () =>{
        const url = 'https://localhost:44374/api/Employee/${editID}';
        const data = {
            "firstName": editFirstName,
            "lastName": editLastName,
            "gender": editGender,
            "dateOfBirth": editDateOfBirth,
            "basicSalary": editBasicSalary,
            "departmentID": editDepartmentID,
            "address": editAddress
        }
        axios.post(url,data)
        .then((result) =>{
            getAllEmployees();
            clear();
            toast.success('Employee has been updated,')
        }).catch((error)=>{
            toast.error(error);
        })
    }

    const handleSave = ()=>{
        const url = 'https://localhost:44374/api/Employee';
        const data = {
            "firstName": FirstName,
            "lastName": LastName,
            "gender": Gender,
            "dateOfBirth": DateOfBirth,
            "basicSalary": BasicSalary,
            "departmentID": DepartmentID,
            "address": Address
        }
        axios.post(url,data)
        .then((result) =>{
            getAllEmployees();
            clear();
            toast.success('Employee has been added,')
        }).catch((error)=>{
            toast.error(error);
        })
    }

    const clear =() =>{
        setFirstName('');
        setLastName('');
        setGender('');
        setDateOfBirth('');
        setBasicSalary('');
        setDepartmentID('');
        setAddress('');
        setEditFirstName('');
        setEditLastName('');
        setEditGender('');
        setEditDateOfBirth('');
        setEditBasicSalary('');
        setEditDepartmentID('');
        setAddress('');
    }

    //post -https://localhost:44374/api/Employee
    //delete -https://localhost:44374/api/Employee/4

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, [])

    const DepartmentEnum = {
        IT: 'IT',
        HR: 'HR',
        Finance: 'Finance',
        Marketing: 'Marketing'  
      };
    
    return(
        <Fragment>
            <ToastContainer/>
            <Container>
            <Row className="justify-content-start">
                    <button className="btn btn-success" onClick={handleAdd} style={{ maxWidth: '150px' }} >Add New</button>
            </Row>
            <Modal show={showAddModal} onHide={handleAddClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Emloyee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" className="form-control" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" className="form-control" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <input type="text" id="gender" className="form-control" value={Gender} onChange={(e) => setGender(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input type="text" id="dateOfBirth" className="form-control" value={DateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="basicSalary">Basic Salary:</label>
                        <input type="text" id="basicSalary" className="form-control" value={BasicSalary} onChange={(e) => setBasicSalary(e.target.value)} />
                    </div>
                    <div>
                            <label htmlFor="departmentID">Department:</label>
                            <select id="departmentID" className="form-control" value={DepartmentID} onChange={(e) => setDepartmentID(e.target.value)}>
                                <option value="" disabled>Select Department</option>
                                {Object.keys(DepartmentEnum).map(key => (
                                    <option key={key} value={key}>{DepartmentEnum[key]}</option>
                                ))}
                            </select>
                    </div>
                    <div>
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" className="form-control" value={Address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
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
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" className="form-control" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" className="form-control" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <input type="text" id="gender" className="form-control" value={Gender} onChange={(e) => setGender(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input type="text" id="dateOfBirth" className="form-control" value={DateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="basicSalary">Basic Salary:</label>
                        <input type="text" id="basicSalary" className="form-control" value={BasicSalary} onChange={(e) => setBasicSalary(e.target.value)} />
                    </div>
                    <div>
                            <label htmlFor="departmentID">Department:</label>
                            <select id="departmentID" className="form-control" value={DepartmentID} onChange={(e) => setDepartmentID(e.target.value)}>
                                <option value="" disabled>Select Department</option>
                                {Object.keys(DepartmentEnum).map(key => (
                                    <option key={key} value={key}>{DepartmentEnum[key]}</option>
                                ))}
                            </select>
                    </div>
                    <div>
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" className="form-control" value={Address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )

}

export default Employee;