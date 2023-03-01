import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";

//very simple styling for the AppBarHeader to include a little bit of branding with a logo and App name.
const AppBarHeader = () => {
  return (
    <AppBar sx={{ textAlign: "center", backgroundColor: "#1e1f1e" }}>
      <Toolbar>
        <img
          src={require("./logo.png")}
          width="40"
          height="30"
          className="banner-logo"
          alt="Inspirational Quotes Logo"
        />
        <Typography
          variant="h5"
          sx={{
            mr: 2,
            flexGrow: 1,
            fontWeight: 400,
            letterSpacing: ".4rem",
            padding: "25px",
          }}
        >
          The Inspirational Quote App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default AppBarHeader;
