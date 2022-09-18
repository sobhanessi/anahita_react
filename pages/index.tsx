import Aboutus from "./components/Aboutus";
import Address from "./components/Address";
import { BACKGROUND_COLOR } from "../public/theme/theme";
import { Container } from "@mui/material";
import Instagram from "./components/Instagram";
import Navbar from "./components/Navbar";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Scheduling from "./components/Scheduling";
// import { useTranslation } from "next-i18next";
// import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

function Homepage() {
  // const { t } = useTranslation();
  // const { locale } = useRouter();

  return (
    <div style={{ backgroundColor: BACKGROUND_COLOR }}>
      <Navbar />
      <Container sx={{ pt: 10 }}>
        <Aboutus />
        <Scheduling />
        <Address />
        <Instagram />
      </Container>
    </div>
  );
}

export default Homepage;
