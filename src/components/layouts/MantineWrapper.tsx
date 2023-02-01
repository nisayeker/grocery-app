import { MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";
import useThemeMode from "../../stores/useThemeMode";

const MantineWrapper = ({ children }: PropsWithChildren) => {
  const [theme] = useThemeMode();
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: theme }}
    >
      {children}
    </MantineProvider>
  );
};

export default MantineWrapper;
