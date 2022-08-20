import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [isDesktop] = useMediaQuery("(min-width: 1000px)");

  const bottom = isDesktop ? 12 : 6;

  const search = async () => {
    if (query) {
      router.replace(`/?q=${query}`);
    }
  };

  const buttonSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    search();
  };

  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") search();
  };
  return (
    <Flex position="fixed" w="full" bottom={bottom} justifyContent="center">
      <Flex position="relative">
        <Input
          variant="outline"
          bg="white"
          type="text"
          w="100%"
          maxW="300px"
          placeholder="Margo City, Kokas"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={enterHandler}
          autoFocus={true}
          mr={3}
        />
        {query !== "" && (
          <IconButton
            aria-label="remove query"
            icon={<CloseIcon />}
            onClick={() => setQuery("")}
            position="absolute"
            bg="transparent"
            right="3"
            fontSize={12}
            color="gray.500"
            zIndex={10}
          />
        )}
      </Flex>
      <IconButton
        aria-label="Search musholla"
        icon={<SearchIcon />}
        onClick={buttonSubmitHandler}
        color="gray.600"
      />
    </Flex>
  );
}

export default Search;
