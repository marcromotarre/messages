import withSxStyles from "./withSxStyles/withSxStyles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Chat = ({ styles }) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.chatHeader}></Box>
      <Typography>Hola</Typography>
      <Typography>Hola</Typography>
      <Typography>Hola</Typography>
      <Typography>Hola</Typography>
    </Box>
  );
};

export default withSxStyles({
  root: { width: "100%", backgroundColor: "red", height: "100%" },
  chatHeader: {
    width: "100%",
    height: "50px",
  },
})(Chat);
