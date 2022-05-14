import useSWR from "swr";
import fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const useRooms = () => {
  const { data, error } = useSWR("/rooms", fetcher);
  return {
    rooms: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};

export const useRoom = ({ id }) => {
  const { data, error } = useSWR(`/room/${id}`, fetcher);
  return {
    rooms: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
