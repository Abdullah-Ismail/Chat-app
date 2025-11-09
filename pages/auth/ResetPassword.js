import { Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import React from 'react'
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm'
import { CaretLeft } from 'phosphor-react';

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
        Parolanızı mı unuttunuz?
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 5 }}>
        Lütfen hesabınızla ilişkili e-posta adresini girin ve Biz
           şifrenizi sıfırlamak için size bir bağlantı e-postası gönderecek.
        </Typography>
      </Stack>

      {/* Reset Password Form */}
      <ResetPasswordForm/>

      <Link
        component={RouterLink}
        to={"/auth/login"}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: "auto",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <CaretLeft size={24} />
        Girişe dönn
      </Link>
    </>
  )
}

export default ResetPassword