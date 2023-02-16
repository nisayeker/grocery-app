import {
  ActionIcon,
  Divider,
  Group,
  List,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { Trash, X } from "tabler-icons-react";

const SearchHistory = () => {
  return (
    <>
      <Stack spacing="xs">
        <Group px="sm">
          <Text size="xs">Geçmiş aramalar</Text>
        </Group>
        <Paper px="sm" shadow="xs" radius={0}>
          <Group
            py="sm"
            position="apart"
            sx={{
              // borderBottom: "1px solid #ced4da",
            }}
          >
            <Text size="sm">Test</Text>
            <ActionIcon size="sm">
              <X />
            </ActionIcon>
          </Group>
        </Paper>
      </Stack>
    </>
  );
};

export default SearchHistory;
