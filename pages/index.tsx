import Aboutus from "./components/Aboutus";
import Address from "./components/Address";
import { BACKGROUND_COLOR } from "../public/theme/theme";
import { Container } from "@mui/material";
import Head from "next/head";
import Instagram from "./components/Instagram";
import Navbar from "./components/Navbar";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Scheduling from "./components/Scheduling";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

function Homepage() {
  return (
    <>
      <Head>
        <title>Anahita Persian Restaurant</title>
        <meta name="description" content="anahita persian restaurant" />
        <meta name="keywords" content="anahita persian restaurant" />
      </Head>
      <div style={{ backgroundColor: BACKGROUND_COLOR }}>
        <Navbar />
        <Container sx={{ pt: 10 }}>
          <Aboutus />
          <Scheduling />
          <Address />
          <Instagram />
        </Container>
      </div>
    </>
  );
}

export default Homepage;
