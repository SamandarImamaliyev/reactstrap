import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { v4 as uuidv4 } from 'uuid';

export default class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            firstname: "",
            lastname: "",
            username: ""
        }
    }
    submitUser() {

        if (this.state.firstname && this.state.lastname && this.state.username) {
            this.props.addUser(this.state.firstname, this.state.lastname, this.state.username);
        }
    }
    updateUser() {
        this.props.editUser(this.state.id, this.state.firstname, this.state.lastname, this.state.username);
    }

    componentDidMount() {
        this.setState({
            id: this.props.user.id,
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname,
            username: this.props.user.username
        })
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.props.visible}>
                    <ModalHeader >Modal title</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="firstname">
                                    Firstname
                                </Label>
                                <Input
                                    value={this.state.firstname}
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    onChange={(e) => { this.setState({ firstname: e.target.value }) }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastname">
                                    Lastname
                                </Label>
                                <Input
                                    value={this.state.lastname}
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    onChange={(e) => { this.setState({ lastname: e.target.value }) }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="username">
                                    Username
                                </Label>
                                <Input
                                    value={this.state.username}
                                    id="username"
                                    name="username"
                                    type="text"
                                    onChange={(e) => { this.setState({ username: e.target.value }) }}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {this.props.user.id ?
                            <button className='btn btn-success' onClick={() => {
                                this.updateUser();
                                this.props.hide();
                            }}>Update</button>
                            :
                            <button className='btn btn-success' onClick={() => {
                                this.submitUser();
                                this.props.hide();
                            }}>Add</button>
                        }
                        <button className='btn btn-danger' onClick={() => { this.props.hide() }}>Cancel</button>

                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
