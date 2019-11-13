import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, ListGroup, Row } from 'react-bootstrap';
import ThingStorage from './ThingStorage';
import Image from 'react-bootstrap/Image';
import { formatToDateString } from '../../utils/dateUtils';

// The id should be String due to a known issue in apollo client query props.
const THING_DETAIL = gql`
  query getThingDetailById($id: String!) {
    thingDetailById(id: $id) {
      id,
      name,
      thumbnail,
      added,
      modified,
      license,
      like_count,
      file_count,
      layout_count,
      download_count,
      view_count,
      description_html,
      details,
      default_image {
        url,
      }
      creator {
        thumbnail,
        first_name,
        last_name
       }
    }
  }
`;

const ThingDetails = (thing: ThingDetails) => {
  return (
    <Container style={{paddingTop: '10px'}}>
      <Row className="justify-content-md-center">
        <Col sm={8} >
          <h1>{thing.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={8}><Image fluid={true} src={thing.default_image.url}/></Col>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item className="float-right" variant="secondary">Views {thing.view_count}</ListGroup.Item>
            <ListGroup.Item className="float-right" variant="secondary">Downloads {thing.download_count}</ListGroup.Item>
            <ListGroup.Item className="float-right" variant="secondary">Likes {thing.like_count}</ListGroup.Item>
            <ListGroup.Item className="float-right" variant="secondary">Files {thing.file_count}</ListGroup.Item>
            <ListGroup.Item className="float-right" variant="secondary">Added {formatToDateString(thing.added)}</ListGroup.Item>
            <ListGroup.Item className="float-right" variant="secondary">Modified {formatToDateString(thing.modified)}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm={8} >
          <p>{thing.license}</p>
        </Col>
      </Row>
      <Row>
        <Col><h1>Summary</h1></Col>
      </Row>
      <Row>
        <Col>
          <div className="content" dangerouslySetInnerHTML={{__html: thing.description_html}}/>
        </Col>
      </Row>
    </Container>
  );
}

export const ThingDetailsQuery = () => {
    return (
      <Query<ThingDetailByIdResponse, ThingId> variables={{id: ThingStorage.id}} query={THING_DETAIL}>
      {({loading, error, data}) => {
        if (error) return <p>Error</p>;
        if (loading) return <p>Loading</p>;
        if (data) {
          return <ThingDetails {...data.thingDetailById}/>;
        }
        return <div/>;
      }}
    </Query>)
  };