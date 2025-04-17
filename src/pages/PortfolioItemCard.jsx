import { Image, Tag, Stack, Heading, Text, Divider } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

export const PortfolioItemCard = ({ portfolioItem }) => {
  return (
    <Card
      w="350"
      h="410"
      boxShadow="lg"
      borderColor="gray.200"
      backgroundColor="white"
      borderStyle="solid"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m={2}
    >
      <CardBody>
        <Image
          src={portfolioItem.imageUrl}
          alt={portfolioItem.title}
          boxSize={350}
          h={100}
          objectFit="cover"
        />
        <Stack mt="6" spacing="3">
          <Heading size="sm">{portfolioItem.title}</Heading>
          <Text fontSize="sm">{portfolioItem.summary}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter
        gap={2}
        display="flex"
        wrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
      >
        {portfolioItem.skills.map((skill, index) => (
          <Tag key={index} size={["sm", "md"]}>
            {skill}
          </Tag>
        ))}
      </CardFooter>
    </Card>
  );
};
