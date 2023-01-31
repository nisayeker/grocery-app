import { AppShell, Avatar, Flex, Group, Header, Menu } from "@mantine/core"
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react"
import { IconLogout } from "@tabler/icons-react"
import { useRouter } from "next/router"
import { PropsWithChildren } from "react"

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const user = useUser()
  const supabase = useSupabaseClient()
  const router = useRouter()
  const handleSignout = async () => {
    const error = await supabase.auth.signOut()
    router.replace("/")
  }

  return (
    <AppShell
      header={
        <Header height={56}>
          <Flex h="100%" direction="row" align="center" justify="center">
            <Group></Group>
            <Group></Group>
            <Group>
              <Menu width={180} position="bottom-end">
                <Menu.Target>
                  <Avatar
                    radius={100}
                    src={user?.user_metadata?.avatar_url}
                    alt=""
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={handleSignout}>
                    <IconLogout /> Logout
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

export default DashboardLayout
