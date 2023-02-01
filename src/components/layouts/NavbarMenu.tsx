import { Link, useLocation } from "react-router-dom";
import {
  Box,
  createStyles,
  Group,
  NavLink,
  UnstyledButton,
} from "@mantine/core";
import { useMemo } from "react";
import { Dashboard } from "tabler-icons-react";
import useMenuState from "../../stores/useMenuState";

const useStyle = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");

  return {
    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      width: "100%",
      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },
    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const links = [{ label: "Dashboard", path: "/", icon: Dashboard }];

export const NavbarMenu = ({ showText = false }) => {
  const { pathname, state } = useLocation();
  const [menuOpen, setMenuOpen] = useMenuState();
  const { classes, cx } = useStyle();

  const currentPath = useMemo(() => {
    return `/${pathname.split("/")[1]}`;
  }, [pathname]);

  return (
    <>
      <Box w="100%" p="sm">
        {links.map((link) => (
          <UnstyledButton
            onClick={() => setMenuOpen(false)}
            component={Link}
            to={link.path}
            key={link.path}
            className={cx(classes.link, {
              [classes.linkActive]: link.path === currentPath,
            })}
          >
            <Group>
              <link.icon size={20} className={classes.linkIcon} />
              <span>{link.label}</span>
            </Group>
          </UnstyledButton>
        ))}
      </Box>
    </>
  );
};
