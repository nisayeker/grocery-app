import {
  Box,
  Container,
  Flex,
  Group,
  LoadingOverlay,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { Search } from "tabler-icons-react";
import useSWR from "swr";
import { useMediaQuery } from "@mantine/hooks";
import SearchList from "./search-list";

const productSearchFetcher = (search: string) => {
  const options = {
    method: "POST",
    headers: {
      shopid: "04dae108-ef2b-4cdf-9bb1-b80c163f3fa0",
      "Content-Type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      client: "yunus",
    },
    body: JSON.stringify({ query: search }),
  };

  return fetch(
    "https://core.marketyo.net/api/v1/Products/Search",
    options
  ).then((response) => response.json());
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useSWR(
    searchTerm.length > 2 ? `product/${searchTerm}` : null,
    () => productSearchFetcher(searchTerm)
  );

  const matches = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <Box
        py="sm"
        sx={(theme) => ({
          backgroundColor: theme.colors.indigo[5],
        })}
      >
        <Container>
          <Group position="center" grow={matches}>
            <TextInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search size={18} />}
              placeholder="Ürün Adı ile ara..."
              miw={{ xs: 350, sm: 450, md: 500, lg: 600 }}
            />
          </Group>
        </Container>
      </Box>
      <Container mih="100%">
        <Box mih="100%">
          {isLoading ? (
            <>
              <LoadingOverlay visible={true} />
            </>
          ) : (
            <SearchList data={data?.data?.products} />
          )}
        </Box>
      </Container>
    </>
  );
};

export default SearchPage;