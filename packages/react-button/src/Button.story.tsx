import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Button } from './Button'

storiesOf('Button', module)
  .add('default', () => <Button />)
  .add('with label', () => (
    <Button id="test" label={'username'} />
  ))
  .add('with label and type', () => (
    <Button
      id="test"
      label="username"
      type="text"
    />
  ))
