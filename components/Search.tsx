import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [isDesktop] = useMediaQuery("(min-width: 1000px)");

  const search = async () => {
    router.replace(`/?q=${query}`);
  };

  const buttonSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    search();
  };

  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") search();
  };
  return (
    <Flex w="full" justifyContent="center" mr="3">
      <Flex position="relative" w="full">
        <Input
          variant="outline"
          bg="white"
          type="text"
          w="100%"
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
            variant="unstyled"
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
