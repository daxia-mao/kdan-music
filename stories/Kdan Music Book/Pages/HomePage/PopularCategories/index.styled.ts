import styled from "styled-components";

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const CategoriesContanier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const Heading = styled.div`
  ${(props) => props.theme.typography.getHeading({ level: 4 })};
  color: ${(props) => props.theme.colors.titleDark};
`;

const Wrapper = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding: 60px 100px;

  ${CategoriesContanier} {
    margin-bottom: 20px;
  }
  ${CategoriesWrapper} {
    max-width: 1042px;
  }
  ${Heading} {
    margin-bottom: 23px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 40px 60px;
    ${CategoriesContanier} {
      margin-bottom: 15px;
    }
    ${CategoriesWrapper} {
      max-width: 648px;
      gap: 16px;
    }
    ${Heading} {
      ${(props) => props.theme.typography.getHeading({ level: 5 })};
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 30px 16px;
    ${CategoriesContanier} {
      margin-bottom: 16px;
    }
    ${CategoriesWrapper} {
      max-width: 288px;
      gap: 10px;
    }
    ${Heading} {
      ${(props) => props.theme.typography.getHeading({ level: 6 })};
    }
  }
`;

export default {
  Wrapper, Heading, CategoriesContanier, CategoriesWrapper
}