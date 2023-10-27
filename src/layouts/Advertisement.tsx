import { Box, Heading } from "@chakra-ui/react";

const Advertisement = () => {
  return (
    <>
      <Box
        w={"full"}
        h={"500px"}
        alignItems={"center"}
        justifyContent={"center"}
        p={10}
        bgColor={"#eee"}
        borderRadius={"md"}
      >
        <Heading textAlign={"center"} fontSize={150}>
          Advertisment
        </Heading>
      </Box>
    </>
  );
};

export default Advertisement;
