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

const SearchList = ({ data }: { data: Array<any> }) => {
  console.log(data);
  return (
    <>
      <SimpleGrid cols={2}>
        {data?.map((item) => (
          <Paper key={item.name} bg="white" shadow="md">
            <Stack justify="center" align="center" spacing="xs">
              <Image src={item.images[0]} maw="80%" alt="" />
              <Text>
                {item.name} - {item.price} TL
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </>
  );
};

export default SearchList;
