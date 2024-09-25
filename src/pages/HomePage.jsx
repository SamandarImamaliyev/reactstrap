import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import UserListComponents from '../components/UserListComponents'
import { v4 as uuidv4 } from 'uuid';
import ReactLoading from 'react-loading';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: uuidv4(),
                    firstname: "Samandar",
                    lastname: "Imamaliyev",
                    username: "samandarImamaliyev"
                },
                {
                    id: uuidv4(),
                    firstname: "Xayal",
                    lastname: "Islamli",
                    username: "xayalislamli"
                },
                {
                    id: uuidv4(),
                    firstname: "Farid",
                    lastname: "Akbarli",
                    username: "faridakbarli"
                },
                {
                    id: uuidv4(),
                    firstname: "Ulvi",
                    lastname: "Mammadov",
                    username: "ulvimamadov"
                }
            ],
            loading: true
        }

        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    addUser = (firstname, lastname, username) => {
        const users = [...this.state.users, { id: uuidv4(), firstname, lastname, username }];
        this.setState({ users });
    }

    editUser = (id, firstname, lastname, username) => {
        let updatedUser = this.state.users.map((user) => {
            if (user.id === id) {
                user = {
                    id: id,
                    firstname: firstname,
                    lastname: lastname,
                    username: username
                }
            }
            return user;
        })
        this.setState({ users: updatedUser });
    }

    deleteUser = (deletedUser) => {
        const newUsers = this.state.users.filter(user => {
            return user.id !== deletedUser.id;
        })
        this.setState({ users: newUsers });
    }



    render() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
        return (
            <div>
                {
                    this.state.loading ? <div className='container mt-5 d-flex justify-content-center'>
                        <ReactLoading type='bubbles' color={"red"} height={'20%'} width={'20%'} />
                    </div>
                        :
                        <div>
                            <Navbar light color='light'>
                                <div className="container">
                                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                                </div>
                            </Navbar>
                            <UserListComponents users={this.state.users} addUser={this.addUser} deleteUser={this.deleteUser} editUser={this.editUser} />
                        </div>
                }
            </div>
        )
    }
}

export default HomePage
