import withSxStyles from "./withSxStyles/withSxStyles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
} from "@mui/material";
import AiCardContent from "./AiCardContent";

const AiCard = ({ styles, name, description, img }) => {
  return (
    <Card sx={styles.root}>
      <CardActionArea>
        <CardMedia
          sx={styles.media}
          component="img"
          height="140"
          image={img.url}
          alt={img.alt}
        />
        <AiCardContent
          styles={styles.cardContent}
          name={name}
          description={description}
        />
      </CardActionArea>
      <CardActions>
        <Button sx={styles.button} size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
export default withSxStyles({
  root: {
    maxWidth: 345,
  },
  button: {
  },
  cardContent: {
    name: {
      backgroundColor: "red"
    },
    description: {
      backgroundColor: "green"
    }
  }
})(AiCard);
