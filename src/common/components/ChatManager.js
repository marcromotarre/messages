import IconButton from "./buttons/IconButton";
import withSxStyles from "./withSxStyles/withSxStyles";
import ChatIcon from "./chat-icon-component";
import { Box, style } from "@mui/system";
import { useState } from "react";
import Chat from "./Chat";
import Button from "./Button";

const ChatManager = ({ styles }) => {
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <Box sx={styles.root}>
      {chatVisible && (
        <Box sx={styles.chat}>
          <Box
            sx={styles.chatCloseButton}
            onClick={() => setChatVisible(false)}
          />
          <Chat styles={styles.chatComponent}></Chat>
        </Box>
      )}
      {!chatVisible && (
        <IconButton
          styles={styles.chatIcon}
          aria-label="chat"
          onClick={() => setChatVisible(true)}
        >
          <ChatIcon fill="white"></ChatIcon>
        </IconButton>
      )}
    </Box>
  );
};
export default withSxStyles({
  root: {},
  
  chat: {
    position: "fixed",
    width: "400px",
    height: "calc(100vH - 20px)",
    right: "10px",
    top: "10px",
    borderRadius: "25px",
  },
  chatComponent: {
    root: {
      borderRadius: "25px",

    }
  },
  chatCloseButton: {
    backgroundColor: "blue",
    width: "30px",
    height: "30px",
    position: "absolute",
    left: "10px",
    top: "10px",
  },
  chatIcon: {
    root: {
      position: "fixed",
      bottom: "25px",
      right: "25px",
      backgroundColor: "green",
      width: "75px",
      height: "75px",
    },
  },
})(ChatManager);
