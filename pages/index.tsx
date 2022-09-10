import React from "react";
import Navbar from "./components/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

function Homepage() {
  const { t, i18n } = useTranslation();
  const { locale } = useRouter();

  return (
    <>
      <Navbar />
      <div>hello world</div>
    </>
  );
}

export default Homepage;
