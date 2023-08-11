import { useState } from "react";
import { useTranslation } from "react-i18next";

import Swal from "sweetalert2";
import {
  FormGroup,
  TextField,
  FormControl,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

import "../styles/login.css";
import {
  containerStyles,
  contentStyles,
  containerBorder,
  centerInputs
} from "../styles/Styles";

const theme = createTheme({
  palette: {
    text: {
      primary: blue[50],
      secondary: blue[50],
    },
  },
});

export const Login = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState({ center: "", user: "", password: "" });

  const handleSetCenter = (center: string) =>
    setUser((prevUser) => ({ ...prevUser, center }));

  const handleSetUser = (user: string) =>
    setUser((prevUser) => ({ ...prevUser, user }));

  const handleSetPassword = (password: string) =>
    setUser((prevUser) => ({ ...prevUser, password }));

  const handleLogin = async () => {
    if (
      user.center.trim() === "" ||
      user.user.trim() === "" ||
      user.password.trim() === ""
    ) {
      return Swal.fire({
        title: "Ups!!!",
        text: "debes ingresar el centro, usuario y la contraseña",
        icon: "error",
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        style={containerStyles}
      >
        <FormGroup className="text-center p-5" style={contentStyles}>
          <Typography
            className="text-center ps-5 pe-5 p-p1"
            style={containerBorder}
          >
            ProGym Cloud - Acceso
          </Typography>
          <FormControl className="mt-3 mb-3" style={centerInputs}>
            <TextField
              variant="filled"
              label={t("Login.center")}
              type="text"
              name="center"
              onChange={(event) => handleSetCenter(event.currentTarget.value)}
            />
          </FormControl>
          <FormControl className=" mb-3" style={centerInputs}>
            <TextField
              variant="filled"
              label={t("Login.email")}
              type="text"
              name="user"
              onChange={(event) => handleSetUser(event.currentTarget.value)}
            />
          </FormControl>
          <FormControl className="mb-3" style={centerInputs}>
            <TextField
              variant="filled"
              label={t("Login.password")}
              type="password"
              name="password"
              onChange={(event) => handleSetPassword(event.currentTarget.value)}
            />
          </FormControl>
          <button style={centerInputs} className="btn btn-pgcloud1" onClick={handleLogin}>
            {t("Login.button")}
          </button>
          <hr />
          <Link style={centerInputs} className="btn btn-pgcloud2" to="/home/12">
            {t("Login.clients")}
          </Link>
        </FormGroup>
      </Box>
    </ThemeProvider>
  );
};
