import { IconButton } from "@mui/material";
import withSxStyles from "../withSxStyles/withSxStyles";

const IconBautton = ({ styles, children, onClick }) => {
  return (
    <IconButton onClick={onClick} sx={styles.root} aria-label="chat">
        {children}
    </IconButton>
  );
};

export default withSxStyles({
    
})(IconBautton);
