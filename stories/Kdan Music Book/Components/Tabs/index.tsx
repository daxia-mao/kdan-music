import React, { useState, ReactNode } from "react";
import S from "./index.styled";
export interface TabType {
  id: number;
  label: string;
  children: ReactNode;
}

export interface TabsProps {
  defaultValue: number;
  items: TabType[] | undefined;
}

function Tabs({ defaultValue, items }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultValue);
  const handleTabClick = (id: number) => {
    setActiveId(id);
  };
  return (
    <S.Wrapper>
      <S.TabListWrapper>
        <S.TabList>
          {items &&
            items.map((item) => (
              <S.Tab
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                isActive={item.id === activeId}
              >
                {item.label}
              </S.Tab>
            ))}
        </S.TabList>
      </S.TabListWrapper>

      <S.TabPanel>{items && items[activeId].children}</S.TabPanel>
    </S.Wrapper>
  );
}

export default Tabs;
