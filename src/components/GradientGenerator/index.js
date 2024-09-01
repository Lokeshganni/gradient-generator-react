import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  ColorPickerMainContainer,
  ColorPickerCard,
  InputColorPicker,
  UlContainer,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    bgColor1: '#8ae323',
    bgColor2: '#014f7b',
    value1: '#8ae323',
    value2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    changeDirection: gradientDirectionsList[0].value,
  }

  handleColorChangeOne = event => {
    this.setState({value1: event.target.value})
  }

  handleColorChangeTwo = event => {
    this.setState({value2: event.target.value})
  }

  onClickGenerate = () => {
    const {value1, value2, direction} = this.state
    this.setState({
      bgColor1: value1,
      bgColor2: value2,
      changeDirection: direction,
    })
  }

  onClickDirection = value => {
    this.setState({direction: value})
  }

  render() {
    const {
      value1,
      value2,
      direction,
      changeDirection,
      bgColor1,
      bgColor2,
    } = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        bgColor1={bgColor1}
        bgColor2={bgColor2}
        changeDirection={changeDirection}
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <UlContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              onClickDirection={this.onClickDirection}
              key={each.directionId}
              obj={each}
              isActive={each.value === direction}
            />
          ))}
        </UlContainer>
        <p>Pick the Colors</p>
        <ColorPickerMainContainer>
          <ColorPickerCard>
            <p>{value1}</p>
            <InputColorPicker
              onChange={this.handleColorChangeOne}
              type="color"
              value={value1}
            />
          </ColorPickerCard>
          <ColorPickerCard>
            <p>{value2}</p>
            <InputColorPicker
              onChange={this.handleColorChangeTwo}
              type="color"
              value={value2}
            />
          </ColorPickerCard>
        </ColorPickerMainContainer>
        <GenerateButton onClick={this.onClickGenerate} type="button">
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
