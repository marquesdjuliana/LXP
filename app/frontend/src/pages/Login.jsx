import React, { useState } from "react";
import { requestLogin, setToken, requestRole } from "../services/requests";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Container,
  Box,
  Typography,
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { token } = await requestLogin("/login", { email, password });
      setToken(token);

      const { role: userRole, userId: userId } = await requestRole(
        "/login/role"
      );

      localStorage.setItem("token", token);
      localStorage.setItem("role", userRole);
      localStorage.setItem("userId", userId);

      if (userRole === "student") {
        navigate("/courses");
      } else if (userRole === "professor") {
        navigate("/courses-professor");
      }
    } catch (error) {
      setFailedTryLogin(true);
      setOpenModal(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="LXP Logo"
          style={{
            marginBottom: 20,
            borderRadius: "50%",
            width: 150,
            height: 150,
          }}
        />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#4caaaf", color: "white" }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Erro de Login</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            O endereço de e-mail ou a senha não estão corretos. Por favor, tente
            novamente.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Login;
