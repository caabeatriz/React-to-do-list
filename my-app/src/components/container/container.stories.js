import React from 'react'
import {storiesOf} from '@storybook/react'
import Container from './index'
import Forms from '../form'

storiesOf ('Components/Form/Container', module)
    .add ('default', () => (
        <Container>
            CONTAINER
        </Container>
    ))