import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.changeDirection},
    ${props => props.bgColor1},
    ${props => props.bgColor2}
  );
  font-family: 'Roboto';
  color: white;
`

export const ColorPickerMainContainer = styled.div`
  display: flex;
`

export const ColorPickerCard = styled.div`
  margin: 10px;
`

export const InputColorPicker = styled.input`
  width: 150px;
  height: 40px;
  outline: none;
  cursor: pointer;
  opacity: 0.5;

  &:active {
    opacity: 1;
  }
`

export const UlContainer = styled.ul`
  display: flex;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border: none;
  outline: none;
  padding: 10px 32px;
  border-radius: 5px;
  color: black;
  margin-top: 20px;
  font-weight: bold;
`
