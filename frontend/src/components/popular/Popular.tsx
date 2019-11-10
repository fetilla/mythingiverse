import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';
import { CardColumns, CardDeck } from 'react-bootstrap';

const POPULAR_QUERY = gql`
  query allThingsQuery {
    thingQuery {
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

interface ThingQuery {
  thingQuery: [Thing];
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

const transformToThumbnailCard = (thumbnail: string): string =>
  thumbnail.replace('_thumb_medium.jpg', '_preview_card.jpg');


const Cards = (things: Thing[]) => {
  return things.map((thing: Thing) =>
    <Card>
      <Card.Img variant="top" src={transformToThumbnailCard(thing.thumbnail)}/>
      <Card.Body>
        <Card.Title>{thing.name}</Card.Title>
        <Card.Footer>
          <Card.Img className="Card-image-footer" variant="bottom" src={thing.creator.thumbnail}/>
          Creator: {`${thing.creator.first_name} ${thing.creator.last_name}`}
        </Card.Footer>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
};

const PopularThings = () =>
  <Query<ThingQuery, any> query={POPULAR_QUERY}>
    {({loading, error, data}) => {
      if (error) return <p>Error</p>;
      if (loading) return <p>Loading</p>;
      if (data) {
        return (
          <React.Fragment>
            <CardColumns>
              {Cards(data!.thingQuery)}
            </CardColumns>
          </React.Fragment>
        );
      }
      return <div/>;
    }}
  </Query>;

export class Popular extends React.Component {
  public render() {
    return (
      <PopularThings/>
    );
  }
}