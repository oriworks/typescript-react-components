import * as React from 'react'
import styled from 'styled-components'

export interface LabelProps {
  labelWidth?: number
}

export interface InputWithLabelProps extends LabelProps {
  id?: string
  label?: string
}

export interface InputWithoutLabelProps extends LabelProps {
  id: string
  label: string
}

export type InputLabelProps = InputWithLabelProps | InputWithoutLabelProps

export interface InputProps {
  name?: string
  type?: string
}

const Wrapper = styled.div`
  display: flex;
  margin: 10px;
`

const Label = styled.label`
  color: red;
  margin-right: 10px;
  font-weight: bold;
  width: ${({ labelWidth = 100 }: LabelProps) => labelWidth}px;
`

const NativeInput = styled.input`
  width: 100%;
`

export const Button: React.FC<InputProps & InputLabelProps> = ({ label, id, labelWidth, ...rest }: InputProps & InputLabelProps) => (
  <Wrapper>
    { label && (
      <Label labelWidth={labelWidth} htmlFor={id}>
        {label}:
      </Label>
    )}
    <NativeInput id={id} {...rest} />
  </Wrapper>
)

Button.defaultProps = {
  type: 'text'
}
