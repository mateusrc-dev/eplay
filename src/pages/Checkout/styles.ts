import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto; // the width will be distributed of form equal in all elements

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    font-weight: regular;
    color: ${cores.branca};
  }

  input {
    background-color: ${cores.branca};
    border: 1px solid ${cores.branca};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
