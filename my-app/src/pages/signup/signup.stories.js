import React from 'react'
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import SignUp from './index';

storiesOf('Pages/SignUp', module)
.addDecorator(StoryRouter())
    .add('default', () => (
        <SignUp></SignUp>
    ))