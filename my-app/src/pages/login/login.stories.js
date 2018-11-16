import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react/dist/client/preview';
import Login from './index';
import Button from './index'

storiesOf('Pages/Login', module)
.addDecorator(StoryRouter())
    .add ('default', () => (
      <Login></Login>

    ))
  