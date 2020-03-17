import React, { Component } from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';




export default class GetAnimals extends Component {

    state = {
        animals: []
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/animals');
        this.setState({animals: res.data})
        console.log(this.state.animals)
    }
    render() {
        return(
            <>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Creation date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        this.state.animals.map(animal => (
                            <tr>
                                  <td>{animal._id}</td>
                                  <td>{animal.name}</td>
                                  <td>{animal.date}</td>
                                  <td>
                                      <Button variant="outline-warning">Editar</Button>{' '}
                                      <Button variant="outline-danger">Eliminar</Button>{' '}
                                  </td>
                            </tr>
                                ))
                            }
                  </tbody>
                </Table>


             </>







        )

    }
}