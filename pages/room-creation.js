import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Button, Input } from "@mui/material";
import { useState } from "react";
import { createRoom } from "../lib/mutations";
import { useMe } from "../lib/hooks";

const queryClient = new QueryClient();

const RoomCreation = () => {
  const { user } = useMe();
  const [roomName, setRoomName] = useState();
  console.log("Room Name", roomName);

  const createNewRoom = () => {
    createRoom({ name: roomName, userId: user.id });
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Input
        onChange={(event) => setRoomName(event.target.value)}
        autoFocus={true}
      ></Input>
      <Button onClick={createNewRoom}>Create</Button>
    </QueryClientProvider>
  );
};

export default RoomCreation;
