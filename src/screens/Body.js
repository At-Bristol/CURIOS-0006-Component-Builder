import React from 'react'

import Button from '../components/Button'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Text from '../components/Text'
import Grid from '../components/Grid'
import Hero from '../components/Hero'
import Value from '../components/Value'

import horizon from '../assets/img/horizon.jpg'
import vertical from '../assets/img/vertical.jpg'

const Body = () => (
  <div>
    <Hero image={horizon} label={'Hero Image'} imagePos={'center bottom'}/>

    <Value />

    <Heading tag='h1'>Heading H1</Heading>
    <Heading tag='h2'>Heading H2</Heading>
    <Heading tag='h3'>Heading H3</Heading>
    <Heading tag='h4'>Heading H4</Heading>
    <Heading tag='h5'>Heading H5</Heading>
    <Heading tag='h6'>Heading H6</Heading>

    <Heading tag='h1' strong={false}>Heading H1</Heading>
    <Heading tag='h2' strong={false}>Heading H2</Heading>
    <Heading tag='h3' strong={false}>Heading H3</Heading>
    <Heading tag='h4' strong={false}>Heading H4</Heading>
    <Heading tag='h5' strong={false}>Heading H5</Heading>
    <Heading tag='h6' strong={false}>Heading H6</Heading>

    <Card
      image={vertical}
      imagePos={'center'}
      label={'Heading'}
      date={'May 17, 2018'}
    >
      Join our Live Science Team as we explore
      their differences and discover how
      humans have changed the food that
      we eat over time.
    </Card>

    <Card
      image={horizon}
      imagePos={'top center'}
      label={'New'}
    >
      Join our Live Science Team as we explore
      their differences and discover how
      humans have changed the food that
      we eat over time.
    </Card>

    <Card label={'Super long thing'}>
        <Text>
          Join our Live Science Team as we explore
          their differences and discover how
          humans have changed the food that
          we eat over time.
        </Text>
        <Button label='Action'/>
    </Card>

    <Card
      mini={true}
      image={vertical}
      label={'Heading'}
      date={'May 17 2018'}
      imagePos={'center'}
    />

    <Grid columns={3}>
      <Card
        mini={true}
        image={vertical}
        label={'Heading'}
        date={'May 17 2018'}
        imagePos={'center'}
      />
      <Card
        mini={true}
        image={vertical}
        label={'Heading'}
        date={'May 17 2018'}
        imagePos={'center'}
      />
      <Card
        mini={true}
        image={vertical}
        label={'Heading'}
        date={'May 17 2018'}
        imagePos={'center'}
      />
      <Card
        mini={true}
        image={vertical}
        label={'Heading'}
        date={'May 17 2018'}
        imagePos={'center'}
      />
      <Card
        mini={true}
        image={vertical}
        label={'Heading'}
        date={'May 17 2018'}
        imagePos={'center'}
      />
      <Card
        mini={true}
        image={vertical}
        label={'Heading'}
        date={'May 17 2018'}
        imagePos={'center'}
      />
      <Card
        mini={true}
        image={vertical}
        label={'Heading'}
        date={'May 17 2018'}
        imagePos={'center'}
      />
    </Grid>

    <Button label='Default'/>
    <Button label='Secondary' secondary={true}/>
    <Button label='Critical' critical={true}/>
    <Button label='Critical' critical={true} secondary={true}/>
    <Button label='Fill' fill={true} />
    <Button label='Fill' fill={true} secondary={true}/>
  </div>
)

export default Body
