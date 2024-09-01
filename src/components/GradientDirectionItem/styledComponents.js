import styled from 'styled-components'

export const LiEle = styled.li`
  list-style-type: none;
  margin: 10px;
`

export const LiButton = styled.button`
  background-color: ${props => (props.isActive ? '#fff' : '#ededed')};
  padding: 10px 32px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
`
