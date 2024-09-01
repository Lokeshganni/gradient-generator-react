import {LiEle, LiButton} from './styledComponents'

const GradientDirectionItem = ({obj, onClickDirection, isActive}) => {
  const {displayText, value} = obj
  console.log(isActive)
  return (
    <LiEle onClick={() => onClickDirection(value)}>
      <LiButton isActive={isActive} type="button" value={value}>
        {displayText}
      </LiButton>
    </LiEle>
  )
}

export default GradientDirectionItem
