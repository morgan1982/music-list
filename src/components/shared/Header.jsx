import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            isOpen: false,
        };

    }
    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render() {

        return (
            <header className="wrapper">
            <h1>{this.props.username}</h1>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={ this.toggleNavbar }/>
                        <NavbarBrand tag={ Link } to="/">MusicList</NavbarBrand>
                            <Collapse isOpen={ this.state.isOpen }>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink tag={Link} to="/acount/login">Log in</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                </Navbar>
            </header>
            )
    }
}


