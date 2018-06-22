import React, { Component } from 'react'

import Box from './components/Box'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Tabs from './components/Tabs'
import Title from './components/Title'
import Notification from './components/Notification'
import Button from './components/Button'
import Text from './components/Text'

import Body from './screens/Body'

class TestApp extends Component {
  render() {
    return (
      <div>
        <Notification status={'ok'}>
          <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
          </Text>
          <Button label={'Done'}/>
        </Notification>
        <Header fixed={false}>
          <Title label={'Curious'}/>
          <Tabs
            content = {[
              { label: 'one', isSelected: true },
              { label: 'two' },
              { label: 'three' },
            ]}
          />
        </ Header>
        <Box isFullscreen={true}>
            <Sidebar
            visible={true}
            content = {[
              { label: 'One' },
              { label: 'Two' },
              { label: 'Three' },
              {
                label: 'Four',
                isSelected: true,
                sub: [
                  { label: '3.1', isSelected: true },
                  { label: '3.2' },
                ],
              },
              { label: 'Five' },
            ]}
          />
          <Box>
            <Body />
          </Box>
        </Box>
      </div>
    )
  }
}

export default TestApp
