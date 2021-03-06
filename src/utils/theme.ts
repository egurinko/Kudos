import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export default createMuiTheme({
  palette: {
    background: {
      default: "#E75B76"
    }
  },
  typography: {
    fontFamily: ["typeface-roboto"].join(",")
  },
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: "white",
        width: 450,
        height: 400,
        padding: 40,
        margin: 50
      }
    }
  }
} as ThemeOptions);
