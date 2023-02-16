import {
  Box,
  Container,
  Flex,
  Group,
  LoadingOverlay,
  MediaQuery,
  Paper,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { Search } from "tabler-icons-react";
import useSWR from "swr";
import { useFocusTrap, useFocusWithin, useMediaQuery } from "@mantine/hooks";
import SearchList from "./search-list";
import SearchHistory from "./search-history";

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
  const { ref, focused } = useFocusWithin();
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useSWR(
    searchTerm.length > 2 ? `product/${searchTerm}` : null,
    () => productSearchFetcher(searchTerm)
  );

  const isMobile = useMediaQuery("(max-width: 700px)");

  const SearchBar = (
    <Group position="center" grow={isMobile}>
      <TextInput
        ref={ref}
        value={searchTerm}
        variant="unstyled"
        onChange={(e) => setSearchTerm(e.target.value)}
        icon={<Search size={18} />}
        placeholder="Ürün Adı ile ara..."
        miw={{ xs: 350, sm: 450, md: 500, lg: 600 }}
      />
    </Group>
  );

  return (
    <>
      <Paper radius={0} shadow="md">
        {isMobile ? (
          <>{SearchBar}</>
        ) : (
          <>
            <Paper
              radius={0}
              py="md"
              sx={(theme) => ({
                backgroundColor: theme.colors.indigo[5],
              })}
            >
              {SearchBar}
            </Paper>
          </>
        )}
      </Paper>

      {focused && (searchTerm.length < 3 || isLoading) && (
        <Box py="md">
          <SearchHistory />
        </Box>
      )}

      <Container mih="calc(100% - 56px)" py="md" pos="relative">
        {isLoading ? (
          <>
            <LoadingOverlay visible={true} />
          </>
        ) : (
          <SearchList data={data?.data?.products} />
        )}
      </Container>
    </>
  );
};

export default SearchPage;
