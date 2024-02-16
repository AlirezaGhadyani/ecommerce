import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function AuthLayout(props: ChildrenComponent) {
  const { children } = props;

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper sx={{ minWidth: 360, padding: "24px" }}>{children}</Paper>
    </Box>
  );
}
