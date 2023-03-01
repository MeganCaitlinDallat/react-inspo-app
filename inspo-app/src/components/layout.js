import { styled, Paper, Box, Grid } from "@mui/material";
import AppBarHeader from "./appBarHeader.js";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
  alignItems: "center",
  alignSelf: "center",
  direction: "row",
  justifyContent: "center",
}));

//This is a reusable component which could be customised for different modals to be used within the grids.
export default function Layout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={25}>
        <Grid item xs={12}>
          <Item>
            <AppBarHeader></AppBarHeader>
          </Item>
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Box>
            <Item>{children}</Item>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
