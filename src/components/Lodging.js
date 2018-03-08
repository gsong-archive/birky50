import React from 'react';
import { Card, CardHeader, CardText, CardBody, CardTitle } from 'reactstrap';


export default () => {
  const cardStyle = {
    minWidth: '200px',
    maxWidth: '200px',
    marginBottom: '20px',
  }

  return (
    <Card style={cardStyle}>
      <CardHeader>Name of the place</CardHeader>
      <CardBody>
        <CardTitle>$100–$150/Night</CardTitle>
        <CardText>
          1827 N Skidmore Street<br />
          Portland, OR 97217
        </CardText>
      </CardBody>
    </Card>
  )
}
