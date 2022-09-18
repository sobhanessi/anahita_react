import {
  ANAHITA_COLOR,
  FONT_FAMILY,
  PERSIAN_FONT_FAMILY,
  PERSIAN_TITR_FONT_FAMILY,
} from "../../public/theme/theme";
import { Grid, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Address() {
  const { locale } = useRouter();
  const { t } = useTranslation();
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Grid
        item
        xs={10}
        sm={10}
        md={4}
        lg={4}
        xl={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          mr: 2,
          boxShadow: 20,
          borderRadius: 20,
        }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1571.4685936649207!2d23.7909334007901!3d38.02524379786575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a198f15837befd%3A0x3af37333c0b1808c!2sAnahita!5e0!3m2!1sen!2sgr!4v1638007336178!5m2!1sen!2sgr"
          width="100%"
          height="400"
          style={{ border: "5px", borderRadius: 20 }}
          // allowfullscreen="true"
          loading="lazy"
        ></iframe>
      </Grid>
      <Grid
        item
        xs={10}
        sm={10}
        md={4}
        lg={4}
        xl={4}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography
          key="address"
          sx={{
            color: ANAHITA_COLOR,
            mt: 5,
            fontSize: "1.55rem",
            fontWeight: "bold",
            direction: locale === "fa" ? "rtl" : "ltr",
            fontFamily:
              locale === "fa" ? PERSIAN_TITR_FONT_FAMILY : FONT_FAMILY,
          }}
        >
          {t("ADDRESS")}
        </Typography>
        <Typography
          key="anahita address"
          sx={{
            fontSize: locale === "fa" ? "1.55rem" : "1.3rem",
            direction: locale === "fa" ? "rtl" : "ltr",
            fontFamily: locale === "fa" ? PERSIAN_FONT_FAMILY : FONT_FAMILY,
          }}
        >
          {t("ANAHITA_ADDRESS")}
        </Typography>
        <Typography
          key="telephone"
          sx={{
            color: ANAHITA_COLOR,
            mt: 5,
            fontSize: "1.55rem",
            fontWeight: "bold",
            direction: locale === "fa" ? "rtl" : "ltr",
            fontFamily:
              locale === "fa" ? PERSIAN_TITR_FONT_FAMILY : FONT_FAMILY,
          }}
        >
          {t("TELEPHONE")}
        </Typography>
        <Typography
          key="anahita telephone"
          component="a"
          href="tel:+302106891222"
          noWrap
          sx={{
            fontSize: locale === "fa" ? "1.55rem" : "1.3rem",
            direction: locale === "fa" ? "rtl" : "ltr",
            fontFamily: locale === "fa" ? PERSIAN_FONT_FAMILY : FONT_FAMILY,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PhoneIcon
              style={{
                color: "blue",
                marginRight: locale !== "fa" ? 2 : 0,
                marginLeft: locale === "fa" ? 2 : 0,
              }}
            />
          </span>
          <span>{t("ANAHITA_TELEPHONE")}</span>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Address;
