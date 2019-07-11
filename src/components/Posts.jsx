import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Post = props => (
  <div className="p-3">
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{__html: props.title}} />
        <Card.Text dangerouslySetInnerHTML={{__html: props.html}} />
        <Button variant="warning" href={props.readMore}>Read More...</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Post;
