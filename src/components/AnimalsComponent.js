import React, { Component } from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';




export default class AnimalsComponent extends Component {

    state = {
        name:'',
        animals: []
    }
    async componentDidMount() {
        this.getAnimals();
    }

    getAnimals = async () => {
        const res = await axios.get('http://localhost:4000/api/animals');
        this.setState({
            animals: res.data
        });

    }

    onChangeAnimalName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit = async e => {
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/api/animals',{name: this.state.name});
        this.setState({name: ''});
        this.getAnimals();
    }

    render() {
        return(
            <>
                <div className="row">
                    <div className="card card-body">
                        <h3>Create New Animal</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.onChangeAnimalName} />
                            </div>
                            <Button type="submit
                            " variant="outline-primary">Create</Button>{' '}
                        </form>
                    </div>
                </div>

                <div className="row">
                      <div className="card card-body">
                        <h3>Animals List</h3>
                    </div>
                </div>


                <div className="row">

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
                </div>
             </>
        )

    }
}