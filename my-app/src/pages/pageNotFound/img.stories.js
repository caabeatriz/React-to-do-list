import React from 'react'
import {storiesOf} from '@storybook/react'
import Img from './index'

    storiesOf('Pages/pageNotFound/Img', module )
    .add('default', () => (
        <Img src='erro.gif'/>
    ))