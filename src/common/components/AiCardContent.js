import withSxStyles from "./withSxStyles/withSxStyles";
import { CardContent, Typography } from "@mui/material";

const AiCardContent = ({ styles, name, description, img }) => {
  return (
    <CardContent sx={styles.root}>
      <Typography sx={styles.name} gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography
        sx={styles.description}
        variant="body2"
        color="text.secondary"
      >
        {description}
      </Typography>
    </CardContent>
  );
};
export default withSxStyles({})(AiCardContent);
