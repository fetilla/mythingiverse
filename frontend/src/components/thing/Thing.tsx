import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import ThingStorage from './ThingStorage';

const THING_DETAIL = gql`
  query getThingDetailsById($id: String!) {
    thingDetailById(id: $id) {
      id,
      name,
      thumbnail,
      added,
      modified,
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

interface ThingId {
  id: number;
}

interface DefaultImage {
  url: string;
}

interface Creator {
  first_name: string;
  last_name: string;
  thumbnail: string;
}

interface ThingDetails extends ThingId {
  name: string;
  thumbnail: string;
  creator: Creator;
  added: Date;
  modified: Date;
  like_count: number;
  default_image: DefaultImage;
  description_html: string;
  details: string;
  file_count: number;
  layout_count: number;
  download_count: number;
  view_count: number;
}

export const ThingDetails = () => {
  console.log('test' + ThingStorage.id);
  return <Query<ThingDetails, ThingId> variables={{id: ThingStorage.id}} query={THING_DETAIL}>
    {({loading, error, data}) => {
      if (error) return <p>Error</p>;
      if (loading) return <p>Loading</p>;
      if (data) {
        return (
          <React.Fragment>
            <Container>
              <Row>
                {data.id}
              </Row>
            </Container>Container>
          </React.Fragment>
        );
      }
      return <div/>;
    }}
  </Query>
  }
;