import {
  Box,
  Flex,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { toTitle } from "../../utils/string-utils";

const SearchList = ({ data }: { data: Array<any> }) => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <>
      <SimpleGrid cols={isMobile ? 3 : 5}>
        {data?.map((item) => (
          <Paper key={item.name} bg="white" shadow="xs" radius="md" p="16px">
            <Stack justify="space-between" align="center" spacing="xs" h="100%">
              <Image src={item.images[0]} maw="70%" alt="" />
              <Text size="sm" weight="500" align="center">
                {toTitle(item.name)}
              </Text>
              <Box w="100%">
                <Text color="violet.5" weight="500">
                  ₺{item.price}
                </Text>
              </Box>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </>
  );
};

export default SearchList;
