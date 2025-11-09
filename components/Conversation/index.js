import { Box, Stack } from "@mui/material";
import React from "react";
import Message from "./Message";

import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/*Header Start*/}
      <Header />
      {/*Body (message) Start*/}
      <Box
        width={"100%"}
        sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
      >
        <Message menu={true}/>
      </Box>
      {/*Footer Start*/}
      <Footer />
    </Stack>
  );
};

export default Conversation;
