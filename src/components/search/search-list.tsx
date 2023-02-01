import {
  Box,
  Flex,
  Group,
  Image,
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
          <Stack key={item.name} justify="center" align="center" spacing="xs">
            <Image src={item.images[0]} maw="80%" alt="" />
            <Text>
              {item.name} - {item.price} TL {console.log(item)}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </>
  );
};

export default SearchList;
