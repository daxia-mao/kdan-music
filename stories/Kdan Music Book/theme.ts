import { css, FlattenSimpleInterpolation } from "styled-components";

/**
 *
 *  Typography 排版
 *
 * */
export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}
export interface SubtitleProps {
  level: 1 | 2 | 3 | 4;
  weight: "medium" | "reguler" | "semibold";
}
export interface CaptionProps {
  level: 1 | 2 | 3;
  weight: "medium" | "reguler";
}
export interface LabelProps {
  level: 1 | 2 | 3;
  weight: "medium" | "reguler";
}
export interface CapitalisedProps {}
function getHeading({ level }: HeadingProps): FlattenSimpleInterpolation {
  const fontSize = ["72px", "48px", "36px", "28px", "24px", "20px"];
  const fontWeight = ["700", "700", "700", "600", "600", "600"];
  const lineHeight = ["98px", "64px", "53px", "45px", "38px", "30px"];
  return css`
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-size: ${fontSize[level - 1]};
    font-weight: ${fontWeight[level - 1]};
    line-height: ${lineHeight[level - 1]};
  `;
}

function getSubtitle({
  level,
  weight,
}: SubtitleProps): FlattenSimpleInterpolation {
  const fontSize = ["20px", "18px", "16px", "14px"];
  // const fontWeight = weight === 'medium' ? '500' : '400';
  const fontWeight = {
    reguler: "400",
    medium: "500",
    semibold: "600",
  };
  const lineHeight = ["34px", "31px", "22px", "19px"];
  return css`
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-size: ${fontSize[level - 1]};
    font-weight: ${fontWeight[`${weight}`]};
    line-height: ${lineHeight[level - 1]};
  `;
}
function getCaption({
  level,
  weight,
}: CaptionProps): FlattenSimpleInterpolation {
  const fontSize = ["18px", "16px", "14px"];
  const fontWeight = weight === "medium" ? "500" : "400";
  const lineHeight = ["34.02px", "28.8px", "24.08px"];
  return css`
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-size: ${fontSize[level - 1]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight[level - 1]};
  `;
}
function getLabel({ level, weight }: LabelProps) {
  const fontSize = ["16px", "14px", "12px"];
  const fontWeight = weight === "medium" ? "600" : "400";
  const lineHeight = ["24px", "24px", "16px"];
  return css`
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-size: ${fontSize[level - 1]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight[level - 1]};
  `;
}
function getCapitalised() {
  return css`
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-size: 18px;
    font-weight: 600;
    line-height: 16px;
    text-transform: uppercase;
  `;
}

/**
 *
 *  Theme 主題彙總
 *
 * */
export interface ThemeType {
  colors: {
    pureWhite: string;
    pureBlack: string;
    darkBlue: string;
    deepBlue: string;
    deepBlueSaturation: string;
    braveYellow: string;
    braveYellowSaturation: string;
    titleDark: string;
    titleLight: string;
    descriptionDark: string;
    descriptionLight: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    extraDesktop: string;
  };
  typography: {
    getHeading: ({ level }: HeadingProps) => FlattenSimpleInterpolation;
    getSubtitle: ({
      level,
      weight,
    }: SubtitleProps) => FlattenSimpleInterpolation;
    getCaption: ({ level, weight }: CaptionProps) => FlattenSimpleInterpolation;
    getLabel: ({ level }: LabelProps) => FlattenSimpleInterpolation;
    getCapitalised: () => FlattenSimpleInterpolation;
  };
}

const theme: ThemeType = {
  colors: {
    pureWhite: "#FFFFFF",
    pureBlack: "#000000",
    darkBlue: "#020D37",
    deepBlue: "#0432DF",
    deepBlueSaturation: "#CDD6F9",
    braveYellow: "#F59E00",
    braveYellowSaturation: "#FCE2B3",
    titleDark: "#020D37",
    titleLight: "#EEEEEE",
    descriptionDark: "#4C526A",
    descriptionLight: "#ACAFB8",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "992px",
    desktop: "1200px",
    extraDesktop: "1400px",
  },
  typography: {
    getHeading,
    getSubtitle,
    getCaption,
    getLabel,
    getCapitalised,
  },
};

export default theme;
