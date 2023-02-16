import { Global, MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";
import useThemeMode from "../../stores/useThemeMode";

const MantineWrapper = ({ children }: PropsWithChildren) => {
  const [theme] = useThemeMode();
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: theme,
        fontFamily: "'Open Sans', sans-serif;",
        headings: {
          fontFamily: "'Open Sans', sans-serif;",
          fontWeight: "400"
        },
      }}
    >
      {/* <Global
        styles={[
          {
            "@font-face": {
              "font-family": "Poppins",
              "font-style": "normal",
              "font-weight": "400",
              "font-display": "swap",
              src: `url(${regular}) format('woff2')`,
              // "unicode-range": "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
            },
          },
          {
            "@font-face": {
              "font-family": "Poppins",
              "font-style": "normal",
              "font-weight": "700",
              "font-display": "swap",
              src: `url(${bold}) format('woff2')`,
              // "unicode-range": "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
            },
          },
        ]}
      /> */}
      {children}
    </MantineProvider>
  );
};

export default MantineWrapper;
