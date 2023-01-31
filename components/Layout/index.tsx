import { AppShell, Avatar, Flex, Group, Header, Menu } from "@mantine/core"
import { IconLogout } from "@tabler/icons-react"
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react"
import { FC, PropsWithChildren } from "react"

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const supabase = useSupabaseClient()
  const user = useUser()

  const handleLogout =  async () => {
    const error = await supabase.auth.signOut()
  }
  return (
    <AppShell
      fixed
      header={
        <Header height={60}>
          <Flex
            direction="row"
            align="center"
            justify="space-between"
            h="100%"
            px="20px"
          >
            <Group></Group>
            <Group></Group>
            <Group align="center">
              <Menu position="bottom-end" width={180}>
                <Menu.Target>
                  <Avatar
                    radius={100}
                    src={user?.user_metadata?.avatar_url ?? ""}
                    alt=""
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={handleLogout} icon={<IconLogout />}>
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Flex>
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}

export default AppLayout
