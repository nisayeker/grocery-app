import { AppShell, Header } from "@mantine/core"
import { FC, PropsWithChildren } from "react"

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShell fixed header={<Header height={60}>asd</Header>}>
      {children}
    </AppShell>
  )
}

export default AppLayout
