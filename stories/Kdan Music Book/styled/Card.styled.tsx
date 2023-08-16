import styled from "styled-components";
import NextImage from "next/image";
const SaveIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
`;
const Type = styled.p`
  position: absolute;
  right: 3.5%;
  bottom: 3.5%;
  max-width: fit-content;
  max-height: fit-content;
  background-color: inherit;
  padding: 6px;
  font-size: 10px;
  margin-left: auto;
  z-index: 10;
  border-radius: 3px;
`;

const Subtitle = styled.p`
  ${(props) => props.theme.typography.getLabel({ level: 3, weight: "reguler" })}
`;
const Title = styled.p`
  ${(props) =>
    props.theme.typography.getSubtitle({ level: 4, weight: "medium" })}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 14px;
  color: #fff;
  letter-spacing: 0.5px;
  background-color: #22223b;
  opacity: 0.8;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  & > * {
    max-width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  ${Title}:hover, ${Subtitle}:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Image = styled(NextImage)`
  min-width: 160px;
  min-height: 160px;
  max-width: 160px;
  max-height: 160px;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 320px;
  max-width: 320px;
  min-height: 260px;
  max-height: 260px;
  background-color: #212529;
  border-radius: 8px;
  user-select: none;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 1;
  }

  ${Image} {
    margin-top: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-width: 220px;
    max-width: 220px;
    min-height: 280px;
    max-height: 280px;
    ${Image} {
      margin-top: 28px;
    }
    ${Info} {
      padding: 14px;
    }
  }
`;

const Card = {
  Wrapper,
  Image,
  Info,
  Title,
  Subtitle,
  Type,
  SaveIcon,
};

export default Card;
