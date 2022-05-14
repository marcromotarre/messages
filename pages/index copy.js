import { Box } from "@mui/system";
import { gql, useQuery } from "@apollo/client";
import { Typography } from "@mui/material";

const AllCountersQuery = gql`
  query {
    counters {
      id
      count
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(AllCountersQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Box>
      {data.counters.map((counter) => (
        <Box display={"flex"} key={counter.id}>
          <Typography>{counter.id}</Typography>
          <Typography>{"   ->   "}</Typography>
          <Typography>{counter.count}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Home;
