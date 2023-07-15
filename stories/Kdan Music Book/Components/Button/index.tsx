/* Librery */
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant: "primary" | "secondary" | "tertiary";
  size: "small" | "large";
}

interface ButtonWrapperProps {
  variant: ButtonProps["variant"];
  size: ButtonProps["size"];
}

const getStyleByVariant = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return css`
        border: 1px solid #0432df;
        border-radius: 8px;
        color: #ffffff;
        background-color: #0432df;
        &:hover {
          background-color: #0029c2;
          box-shadow: 0px 10px 12px rgba(4, 50, 223, 0.12);
        }
      `;
    case "secondary":
      return css`
        color: #0432df;
        background-color: #ffffff;
        border-radius: 8px;
        &:hover {
          color: #0029c2;
          text-decoration: underline;
        }
      `;
    case "tertiary":
      return css`
        border: 2px solid #0432df;
        border-radius: 8px;
        color: #0432df;
        background-color: #ffffff;
        &:hover {
          color: #0029c2;
          background-color: #cdd6f9;
        }
      `;
  }
};

const getStyleBySize = (size: ButtonProps["size"]) => {
  if (size === "large") {
    return css`
      padding: 14px 24px;
    `;
  }
  return css`
    padding: 10px 20px;
  `;
};

const BtnText = styled.span``;
const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: inline-block;
  transition: all 0.2s;
  color: #0432df;
  ${({ size }) => getStyleBySize(size)}
  ${({ variant }) => getStyleByVariant(variant)}

  ${BtnText} {
    ${({ theme, size }) =>
      size === "large"
        ? theme.typography.getLabel({ level: 1, weight: "medium" })
        : theme.typography.getLabel({ level: 2, weight: "medium" })}
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    ${getStyleBySize("small")};
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    ${getStyleBySize("small")};
  }
`;
type RefType = HTMLButtonElement;
const Button = React.forwardRef<RefType, ButtonProps>(
  ({ variant, size, children, className, ...props }: ButtonProps, ref) => {
    return (
      <ButtonWrapper
        variant={variant}
        size={size}
        className={className}
        ref={ref}
        {...props}
      >
        <BtnText>{children}</BtnText>
      </ButtonWrapper>
    );
  }
);

export default Button;
