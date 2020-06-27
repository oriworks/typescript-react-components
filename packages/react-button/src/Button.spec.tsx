import * as React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  test('should match snapshot and styles for default props', () => {
    // Act
    const { container: component } = render(<Button />)

    // Assert
    expect(component).toMatchSnapshot()
  })

  test('should match snapshot with label', () => {
    // Act
    const { container: component } = render(<Button id="test" label="Name" />)

    // Assert
    expect(component).toMatchSnapshot()
  })
})
