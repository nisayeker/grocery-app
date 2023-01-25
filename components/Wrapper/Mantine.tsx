import { MantineProvider } from "@mantine/core"
import { FC, PropsWithChildren } from "react"

const Mantine: FC<PropsWithChildren> = ({ children }) => {
  return <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    withCSSVariables
    theme={{
      colorScheme: "light",
    }}
  >{children}</MantineProvider>
}

export default Mantine
