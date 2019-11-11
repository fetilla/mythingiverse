import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

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

interface Things {
  things: [Thing];
}

interface Thing {
  id: number;
  name: string;
  url: string;
  public_url: string;
  thumbnail: string;
  creator: Creator;
  is_private: boolean;
  is_purchased: boolean;
  is_published: boolean;
}

interface Creator {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  url: string;
  public_url: string;
  thumbnail: string;
}

const Cards = (things: Thing[]) => {
  return things.map((thing: Thing) =>
    <Col sm={3} style={{paddingBottom: "10px", paddingTop: "10px"}}>
      <Card border={'dark'} >
        <Row className="justify-content-md-center">
          <Col sm={8}><Image src={thing.thumbnail} thumbnail={true}/></Col>
        </Row>
        <Card.Body>
          <Card.Title>{thing.name}</Card.Title>
          <Card.Footer>
            <Container>
              <Row>
                <Col><Image src={thing.creator.thumbnail} thumbnail={true}/></Col>
                <Col><p>{`${thing.creator.first_name} ${thing.creator.last_name}`}</p></Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col><Button variant="primary">View</Button></Col>
              </Row>
            </Container>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export const PopularThings = () =>
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
  </Query>
;