import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction="row"
        spacing="3"
      >
        <PaginationItem number={1}/>
        <PaginationItem number={2} isCurrent/>
        <PaginationItem number={3}/>
        <PaginationItem number={4}/>
      </Stack>
    </Stack>
  );
}