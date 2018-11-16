import React from 'react'
import {storiesOf} from "@storybook/react"
import Button from './index'

    storiesOf ('Components/Form/Button', module)
    .add('Default', () => (
        <Button  > Enviar </Button>
    ))
    
    .add ('With disabled', () => (
        <Button disabled >Enviar</Button>
    )
    )

 