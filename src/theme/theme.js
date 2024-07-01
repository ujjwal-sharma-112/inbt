import { createTheme } from "@mui/material"
import _ from "lodash"
import { typography } from "./typography"

const baseOptions = {
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: "linear-gradient(180deg, #51D2FC 0%, #0099DC 100%)",
          borderRadius: "24px",
          fontFamily: "Roboto",
          fontSize: "14px",
          boxShadow: "none"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(2px)",
          webKitBackdropFilter: "blur(2px)",
        }
      }
    }
  }
}
const themeOptions = {}

export const createMuiTheme = (config = {}) => {
  const options = _.merge({}, baseOptions, config)
  const theme = createTheme(_.merge({}, themeOptions, options))
  return theme;
}