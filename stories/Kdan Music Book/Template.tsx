import React from 'react'
import styled from 'styled-components'

type Props = {}

const TemplateWrapper = styled.div`
  ${props => props.theme.typography.getHeading({level: 2})};
`
function Template({}: Props) {
  return (
    <div>Template</div>
  )
}

export default Template