import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const StyledHeader = styled(motion.div)`
  width: 100dvw;
  height: 75px;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
