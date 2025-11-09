import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { Stack, Typography, Link } from "@mui/material";
import AuthSocial from '../../sections/auth/AuthSocial';
import LoginForm from '../../sections/auth/LoginForm';



const Login = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">giriş yap</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Yeni kullanıcı?</Typography>

          <Link
            to={"/auth/register"}
            component={RouterLink}
            variant="subtitle2"
          >
            Bir hesap oluşturun
          </Link>
        </Stack>
        <LoginForm/>
        <AuthSocial />
      </Stack>

  )
}

export default Login