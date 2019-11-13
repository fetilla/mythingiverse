import React from 'react';
import './Header.css';
import history from '../../navigation/history';
import { observer } from 'mobx-react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import AuthStorage from '../auth/Auth.storage';
import ThingStorage from '../thing/ThingStorage';

const NavigatePopular = () => {
  const popularRef = '/popular';
  if(window.location.pathname !== popularRef) {
    history.push(popularRef);
  }
}

@observer
export class Header extends React.Component {
  public render() {
    return (
      <Navbar bg="dark" expand="lg">
      {(AuthStorage.bearer_token) ?
        (<Nav.Link onClick={NavigatePopular}>Popular</Nav.Link>)
        : (null)
      }
      <Col md={{ span: 4, offset: 4 }}><Navbar.Text>
        My thingiverse
      </Navbar.Text></Col>
    </Navbar>);
  }
}