import { Button as MuiButton, Box, Typography } from "@mui/material";
import withSxStyles from "./withSxStyles/withSxStyles";

const Button = ({ styles, children }) => {
  return (
    <Box sx={styles.root}>
      <MuiButton>{children}</MuiButton>
    </Box>
  );
};

export default withSxStyles(
  {
    root: {
      backgroundColor: "red",
      color: "white",
    },
  },
  { name: "Button" }
)(Button);
