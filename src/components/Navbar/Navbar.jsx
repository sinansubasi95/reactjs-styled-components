import React, { Fragment } from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon } from './Navbar.elements';

const Navbar = () => {
    return (
        <Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        ULTRA
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </Fragment>
    )
}

export default Navbar;
