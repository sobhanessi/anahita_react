import { Avatar, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import {
  FONT_FAMILY,
  PERSIAN_FONT_FAMILY,
  PERSIAN_TITR_FONT_FAMILY,
} from "../../public/theme/theme";

function Aboutus(): JSX.Element {
  const { t } = useTranslation();
  const { locale } = useRouter();
  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        item
        md={4}
        sm={8}
        xs={10}
        sx={{
          maxWidth: 290,
          marginRight: 3,
          mb: 5,
        }}
      >
        <Avatar
          src="/majid.png"
          variant="square"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            width: "100%",
            height: "auto",
            boxShadow: 10,
          }}
        />
      </Grid>
      <Grid item md={4} sm={8} xs={10} sx={{}}>
        <Typography
          component="q"
          sx={{
            mb: 2,
            fontSize: locale === "fa" ? "1.55rem" : "1.3rem",
            fontWeight: "bold",
            direction: locale === "fa" ? "rtl" : "ltr",
            fontFamily:
              locale === "fa" ? PERSIAN_TITR_FONT_FAMILY : FONT_FAMILY,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {t("ABOUT_US")}
        </Typography>
        <Typography
          sx={{
            // mt: 5,
            fontSize: locale === "fa" ? "1.55rem" : "1.3rem",
            // fontWeight: "bold",
            direction: locale === "fa" ? "rtl" : "ltr",
            fontFamily: locale === "fa" ? PERSIAN_FONT_FAMILY : FONT_FAMILY,
          }}
        >
          {t("ABOUT_ANAHITA.DESCRIPTION")}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Aboutus;
