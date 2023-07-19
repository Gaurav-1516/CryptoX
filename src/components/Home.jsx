import { Box, Image} from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/logo.jpg";
import { motion } from "framer-motion";

function Home(){
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"90vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          
        />
      </motion.div>

    </Box>
  );
};

export default Home;