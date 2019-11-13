import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ThingStorage from '../thing/ThingStorage';
import history from '../../navigation/history';

const POPULAR_QUERY = gql`
  query allThingsQuery {
    things {
      id,
      name,
      thumbnail,
      creator {
        thumbnail,
        first_name,
        last_name
       }
    }
  }
`;

const NavigateThing = (id: number, event: any) => {
  event.preventDefault();
  ThingStorage.id = id;
  history.push('/thing');
};


const handleOnClick = (thing: Thing) => {
  return (event: any) => NavigateThing(thing.id, event);
};

const Cards = (things: Thing[]) => {
  return things.map((thing: Thing) => (
    <Col key={thing.id.toString()} sm={3} style={{paddingBottom: "10px", paddingTop: "10px", textAlign: "center"}}>
      <Card border={'dark'} >
        <Row className="justify-content-md-center">
          <Col sm={8}><Image src={thing.thumbnail} thumbnail={true}/></Col>
        </Row>
        <Card.Body>
          <Card.Title>{thing.name}</Card.Title>
          <Card.Footer>
            <Container>
              <Row className="justify-content-md-center">
                <Col><Image src={thing.creator.thumbnail} thumbnail={true}/></Col>
                <Col><p>{`${thing.creator.first_name} ${thing.creator.last_name}`}</p></Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col><Button onClick={handleOnClick(thing)} variant="primary">View</Button></Col>
              </Row>
            </Container>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>)
  );
};

export const PopularThings = () => (
  <Query<Things, any> query={POPULAR_QUERY}>
    {({loading, error, data}) => {
      if (error) return <p>Error</p>;
      if (loading) return <p>Loading</p>;
      if (data) {
        return (
          <React.Fragment>
            <Container>
              <Row>
                {Cards(data!.things)}
              </Row>
            </Container>Container>
          </React.Fragment>
        );
      }
      return <div/>;
    }}
  </Query>);