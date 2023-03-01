import {
  styled,
  Grid,
  Paper,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import setDynamicBackground from "../dynamicBackground";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
  boxShadow: "none",
}));

export default function QuoteGenerator() {
  const [quoteData, setQuoteData] = useState([]);
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //With each new quote that is generated, a background colour must be generated.
  const generateNewQuote = () => {
    selectRandomQuote();
    handleBackgroundHexCode();
  };

  //creating a background colour and setting via dynamicBackground.js function
  const handleBackgroundHexCode = () => {
    const hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setDynamicBackground({ color: hexCode });
  };

  const selectRandomQuote = () => {
    if (quoteData && quoteData.length > 0) {
      const item = quoteData[Math.floor(Math.random() * quoteData.length)];
      setQuoteText(item.text);
      setQuoteAuthor(item.author);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((dataResponse) => {
        setQuoteData(dataResponse);
        generateNewQuote();
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        return error;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    generateNewQuote();
  }, [quoteData]);

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: "auto",
          p: 2,
        }}
      >
        <Grid>
          <Grid item xs={2}>
            <img
              src={require("./logo.png")}
              width="40"
              height="30"
              className="banner-logo"
              alt="Inspirational Quotes Logo"
            />
          </Grid>
          <Grid container wrap="nowrap">
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {quoteText}
            </Typography>
          </Grid>
          <Grid item textAlign="center">
            <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
              {quoteAuthor}
            </Typography>
          </Grid>
          <Grid item textAlign="right">
            <Button
              sx={{
                marginTop: 2,
                bgcolor: "#1e1f1e",
                color: "white",
                "&:hover": {
                  bgcolor: "#2c2d2c",
                },
              }}
              aria-label="close"
              size="small"
              onClick={generateNewQuote}
            >
              New Quote
            </Button>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}
