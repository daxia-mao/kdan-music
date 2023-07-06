import React, { useState, ReactNode } from 'react'
import styled, { css, keyframes } from 'styled-components';
export interface TabType {
  id: number;
  label: string,
  children: ReactNode;
}

export interface TabsProps {
  defaultValue: number;
  items: TabType[] | undefined;

}

interface TabWrapperProps {
  isActive: boolean;
}

const fade = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`


const TabWrapper = styled.span<TabWrapperProps>`
  white-space: nowrap;
  position: relative;
  color: ${props => props.theme.colors.descriptionDark};
  cursor: pointer;
  ${props => props.theme.typography.getSubtitle({
    level: 3,
    weight: 'medium'
  })};

  ${(props) => {
    return props.isActive && css`
      color: ${props => props.theme.colors.darkBlue};
      &::before {
        animation: ${fade} 0.5s ease-in-out;
        position: absolute;
        top: 120%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        content: '';
        width: 19px;
        height: 2px;
        background-color: ${props => props.theme.colors.darkBlue};
        border-radius: 5px;
      }
    `
  }}
  @media screen and (max-width: ${props => props.theme.breakpoints.tablet} ) {
    ${props => props.theme.typography.getSubtitle({level: 4, weight: 'medium'})}
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile} ) {
    ${props => props.theme.typography.getSubtitle({level: 4, weight: 'medium'})}
  }
`
const TabList = styled.div`
  display: flex;
  overflow: auto;
  gap: 28px;
  flex-wrap: nowrap;
  padding: 10px 10px 14px 10px;
  user-select: none;

`

const TabPanel = styled.div`
`
const TabListBox = styled.div`
  display: flex;
  justify-content: center;
`
const TabsWrapper = styled.div`
  ${TabList} {
    margin-bottom: 20px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.tablet} ) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile} ) {
    margin-bottom: 14px;
  }
`

function Tabs({ defaultValue, items }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultValue);
  const handleTabClick = (id: number) => {
    setActiveId(id);
  }
  return(
    <TabsWrapper>
      <TabListBox>
        <TabList>
          { items && items.map((item) => 
            <TabWrapper key={item.id} onClick={() => handleTabClick(item.id)} isActive={ item.id === activeId }>
              { item.label }
            </TabWrapper>
          )}
        </TabList>
      </TabListBox>

      <TabPanel>
        { items && items[activeId].children }
      </TabPanel>

    </TabsWrapper>
  )
}

export default Tabs;