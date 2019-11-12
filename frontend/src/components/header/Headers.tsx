import React from 'react';
import './Header.css';
import history from '../../navigation/history';
import { observer } from 'mobx-react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import AuthStorage from '../auth/AuthStorage';

const navigatePopular = () => {
  history.push('/popular');
}

@observer
export class Header extends React.Component {
  public render() {
    let navbar = <Navbar bg="dark" expand="lg">
      {(AuthStorage.bearer_token) ?
        (<Nav.Link href="/popular">Popular</Nav.Link>)
        : (null)
      }
      <Col md={{ span: 4, offset: 4 }}><Navbar.Text>
        My thingiverse
      </Navbar.Text></Col>
    </Navbar>;
    return navbar;
  }
}