import { Card as MuiCard, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AiCard from "../src/common/components/AiCard";
import withSxStyles from "../src/common/components/withSxStyles/withSxStyles";

const Home = () => {
  const animals = [
    {
      name: "Lizard",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img: {
        url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        alt: "iguana image",
      },
    },

    {
      name: "Lizard",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img: {
        url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        alt: "iguana image",
      },
    },
    {
      name: "Lizard",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img: {
        url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        alt: "iguana image",
      },
    },
    {
      name: "Lizard",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      img: {
        url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        alt: "iguana image",
      },
    },
  ];

  const animal = {
    name: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img: {
      url: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      alt: "iguana image",
    },
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <h1>Animals</h1>
      <Box display={"flex"} width={"80%"}>
        <Box
          width={"100%"}
          display={"grid"}
          gridTemplateColumns={"repeat(4, auto [col-start])"}
          columnGap={"10px"}
          rowGap={"10px"}
        >
          <NewAiCard
            name={animal.name}
            description={animal.description}
            img={animal.img}
          />
          <NewAiCard
            name={animal.name}
            description={animal.description}
            img={animal.img}
          />
          <NewAiCard
            name={animal.name}
            description={animal.description}
            img={animal.img}
          />
          <NewAiCard
            name={animal.name}
            description={animal.description}
            img={animal.img}
          />
          <NewCard styles={{ color: "white", backgroundColor: "blue" }}>
            <Typography>Card Text</Typography>
          </NewCard>
          <NewCard sx={{ color: "white", backgroundColor: "blue" }}>
            <Typography>Card Text</Typography>
          </NewCard>
          <NewAiCard
            name={animal.name}
            description={animal.description}
            img={animal.img}
          />
        </Box>
      </Box>
    </Box>
  );
};

const NewCard = withSxStyles(
  {
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  { name: "NewCard" }
)(({ styles, ...props }) => <MuiCard sx={styles} {...props} />);

const NewAiCard = withSxStyles(
  {
    root: { backgroundColor: "#d0efff" },
    cardContent: {
      root: {
        backgroundColor: "white",
      },
      name: {
        backgroundColor: "yellow",
      },
      description: {
        backgroundColor: "white",
      },
    },
  },
  { name: "SuperAiCard" }
)(AiCard);
export default Home;
