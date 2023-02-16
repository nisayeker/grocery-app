import {
  ActionIcon,
  AppShell,
  Avatar,
  Flex,
  Group,
  Header,
  Menu,
  Navbar,
  ScrollArea,
} from "@mantine/core";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Outlet, useNavigate } from "react-router-dom";
import { Logout, Menu2, Moon, Moon2, Sun } from "tabler-icons-react";
import useMenuState from "../../stores/useMenuState";
import useThemeMode from "../../stores/useThemeMode";
import { NavbarMenu } from "./NavbarMenu";

const AppLayout = () => {
  const supabase = useSupabaseClient();
  const navigate = useNavigate();
  const user = useUser();

  const [menuOpen, setMenuOpen] = useMenuState();
  const [theme, setTheme] = useThemeMode();

  const handleLogout = async () => {
    const error = await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };
  return (
    <AppShell
      header={
        <Header height={56}>
          <Flex h="100%" align="center" justify="space-between" px="md">
            <Group>
              <ActionIcon
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                <Menu2 />
              </ActionIcon>
            </Group>
            <Group></Group>
            <Group>
              <Menu position="bottom-end" shadow="md" width={180}>
                <Menu.Target>
                  <Avatar
                    radius={100}
                    src={user?.user_metadata?.avatar_url}
                    alt=""
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    icon={theme === "dark" ? <Sun /> : <Moon />}
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? "Light mode" : "Dark mode"}
                  </Menu.Item>
                  <Menu.Item icon={<Logout />} onClick={handleLogout}>
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Flex>
        </Header>
      }
      navbarOffsetBreakpoint={0}
      navbar={
        <Navbar
          fixed
          hiddenBreakpoint={1500}
          hidden={!menuOpen}
          height="100%"
          width={{ base: 256 }}
          // ref={ref}
          styles={(theme) => ({
            root: {
              // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
            },
          })}
        >
          <Navbar.Section grow component={ScrollArea}>
            <NavbarMenu showText={true} />
          </Navbar.Section>
        </Navbar>
      }
      styles={(theme) => ({
        body: {
          backgroundColor: "#fafafa"
        },
        main: {
          paddingTop: "calc(var(--mantine-header-height, 0px) + 0px)",
          paddingBottom: "calc(var(--mantine-footer-height, 0px) + 0px)",
          paddingLeft: "calc(0px)",
          // paddingLeft: "calc(var(--mantine-navbar-width, 0px) + 0px)",
          paddingRight: "calc(var(--mantine-aside-width, 0px) + 0px)",
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingLeft: "0px",
          },
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
};

export default AppLayout;
