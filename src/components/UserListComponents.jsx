import React, { Component } from 'react'
import { Alert, Table } from 'reactstrap'
import FormComponent from './FormComponent';

class UserListComponents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            user: {}
        }

        this.hide = this.hide.bind(this);
    }

    hide() {
        this.setState({ visible: false })
    }

    getUser(user) {
        this.setState({
            user: user,
            visible: true
        })
    }
    render() {
        return (
            <div className='container mt-5'>
                <button className='btn btn-primary' onClick={() => { this.setState({ user: {}, visible: true }) }}>Add</button>
                {this.state.visible && <FormComponent visible={this.state.visible} hide={this.hide} addUser={this.props.addUser} user={this.state.user} editUser={this.props.editUser} />}
                {
                    this.props.users.length > 0 ? (
                        <Table
                        >
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        Username
                                    </th>
                                    <th>
                                    </th>
                                </tr>
                            </thead>


                            <tbody>
                                {
                                    this.props.users.map((user) => (
                                        <tr key={user.id}>
                                            <th scope="row">
                                                {user.id}
                                            </th>
                                            <td>
                                                {user.firstname}
                                            </td>
                                            <td>
                                                {user.lastname}
                                            </td>
                                            <td>
                                                {user.username}
                                            </td>
                                            <td>
                                                <button className='btn btn-warning me-2' onClick={() => {
                                                    this.getUser(user);
                                                }}>Edit</button>
                                                <button className='btn btn-danger' onClick={() => {
                                                    this.props.deleteUser(user)
                                                }}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    ) : (
                        <Alert className='mt-2' color="danger">
                            There is no user
                        </Alert>
                    )
                }
            </div>
        )
    }
}

export default UserListComponents
