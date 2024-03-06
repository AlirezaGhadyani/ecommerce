import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const StyledSidebar = styled(motion.div)`
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
