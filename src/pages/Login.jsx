import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

function Login() {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    return;
  };

  return (
    <div className="flex w-full">
      <Card variant="outlined" className="flex flex-col p-5 w-fit">
        <h2>Login</h2>
        <Box
          className="flex flex-col w-full gap-2"
          component="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <FormControl>
            <FormLabel htmlFor="name">Email</FormLabel>
            <TextField
              type="email"
              name="name"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <TextField
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          <br />
          {/* {error && <div style={{ color: "red" }}>{error}</div>} */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // onClick={validateInputs}
          >
            Sign in
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default Login;
