import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Post = props => (
  <post>
    <div className="p-3">
      <Card>
        <Card.Img
          variant="top"
          src={props.image}
          alt={props.alt || 'default'}
        />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{__html: props.title}} />
          <Card.Text>
            <div dangerouslySetInnerHTML={{__html: props.html}} />
          </Card.Text>
          <Button variant="warning" href={props.readMore}>Read More...</Button>
        </Card.Body>
      </Card>
    </div>
  </post>
);

export default Post;
