import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import CategoryIcon from 'components/01_atoms/CategoryIcon'
import { theme } from 'constants/globalUITheme'

const WomenWrapper = styled(Avatar)`
  background-color: ${theme.palette.secondary.main};
`
const MenWrapper = styled(Avatar)`
  background-color: ${theme.palette.primary.main};
`

interface Props {
  name: string
  category: string
}

const CategoryAvator: React.FC<Props> = ({ name, category }) => {
  if (name === process.env.REACT_APP_MEN_NAME) {
    return (
      <MenWrapper>
        <CategoryIcon category={category} />
      </MenWrapper>
    )
  }
  return (
    <WomenWrapper>
      <CategoryIcon category={category} />
    </WomenWrapper>
  )
}

export default CategoryAvator
