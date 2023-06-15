import React from "react";
import type { Preview } from "@storybook/react";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../stories/Kdan Music Book/theme";
import "@fontsource/poppins";
import "@fontsource/inter";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
