import React from 'react';
import { Segment, Header, Image } from 'semantic-ui-react';

const PekedexHeader = ({ name,author }) => {
  return (
    <Segment basic inverted padded="very" vertical>
        <Header as='h1'>This is a header for {name} Pekedex!</Header>
        <Image src={'haunter.png'} size="small" centered/>
        <Header as='h3'>Author: {author}</Header>
    </Segment>
  )
}

export default PekedexHeader