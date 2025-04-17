import { Grid, Flex } from "@chakra-ui/react";
import { portfolioItems } from "../utils/data";
import { PortfolioItemCard } from "./PortfolioItemCard";

export const PortfolioItemPage = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding={4}
      backgroundColor="#f0f0f0"
      minHeight="100vh"
      width="100%"
      maxWidth="1200px"
      margin="auto"
      boxShadow="md"
      borderRadius="lg"
    >
      <Grid
        templateColumns="repeat(4, 1fr)" // Always 4 items per row
        gap={6}
        width="100%"
        maxW="1200px"
        margin="auto"
        justifyContent={"center"}
        alignItems={"center"}
      >
        {portfolioItems.map((item, index) => (
          <PortfolioItemCard key={index} portfolioItem={item} />
        ))}
      </Grid>
    </Flex>
  );
};
