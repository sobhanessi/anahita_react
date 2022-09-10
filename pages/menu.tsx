import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import menu from "../database/menu";
import Navbar from "./components/Navbar";
import { PERSIAN_FONT_FAMILY } from "../public/theme/theme";
import persify from "persify";
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

function Menu(): JSX.Element {
  const { t, i18n } = useTranslation();
  const { locale } = useRouter();

  return (
    <>
      <Navbar
      // language={language} setLanguage={setLanguage}
      />
      <Container>
        <Grid container justifyContent={"center"}>
          {menu.map((mm) => (
            <>
              {Object.keys(mm).map((m) => (
                <>
                  <Grid item sm={8} md={6} lg={6} xs={10} xl={6} mr={1}>
                    <Typography
                      gutterBottom
                      sx={{
                        mt: 4,
                        mb: 4,
                        fontWeight: "bold",
                        fontSize: "1.75em",
                        fontFamily:
                          locale === "fa"
                            ? PERSIAN_FONT_FAMILY
                            : locale === "en"
                            ? "sans-serif"
                            : "",
                      }}
                      dir={locale === "fa" ? "rtl" : "ltr"}
                    >
                      {locale === "en"
                        ? m === "MAIN_COURSE"
                          ? "MAIN COURSE"
                          : m === "COFFEE_TEA"
                          ? "COFFEE / TEA"
                          : m
                        : locale === "el"
                        ? m === "MAIN_COURSE"
                          ? "Κύριο πιάτο"
                          : m === "COFFEE_TEA"
                          ? "ΚΑΦΕΣ / ΤΣΑΙ"
                          : m === "SALADS"
                          ? "Σαλάτες"
                          : m === "APPETIZERS"
                          ? "ΟΡΕΚΤΙΚΑ"
                          : m === "BEVERAGES"
                          ? "Ποτά"
                          : m
                        : m === "MAIN_COURSE"
                        ? "منو اصلی"
                        : m === "COFFEE_TEA"
                        ? "چای / قهوه"
                        : m === "SALADS"
                        ? "سالاد ها"
                        : m === "APPETIZERS"
                        ? "پیش غذا"
                        : m === "BEVERAGES"
                        ? "نوشیدنی ها"
                        : m === "WINE"
                        ? "شراب"
                        : m === "DESSERTS"
                        ? "دسرها"
                        : ""}
                    </Typography>
                    {mm[m].map((men) => (
                      <>
                        <Card
                          sx={{
                            mt: 2,
                            mb: 2,
                            backgroundColor: "#ebe3d9",
                            borderRadius: "15px",
                            boxShadow: 20,
                          }}
                          key={men.name}
                          dir={locale === "fa" ? "rtl" : "ltr"}
                        >
                          <CardMedia image={men.pic} component="img" />
                          <CardContent>
                            <Grid container>
                              <Grid item sm={10} xs={10}>
                                <Typography
                                  component="h6"
                                  variant="h6"
                                  sx={{
                                    fontWeight: 700,
                                    fontSize: "1.5em",
                                    mr: 1,
                                    fontFamily:
                                      locale === "fa"
                                        ? PERSIAN_FONT_FAMILY
                                        : locale === "en"
                                        ? "sans-serif"
                                        : "",
                                  }}
                                  key={men.name + "1"}
                                >
                                  {t(`MENU.${m}.${men.name}.NAME`)}
                                </Typography>
                                <Typography
                                  component="div"
                                  variant="body2"
                                  sx={{
                                    fontSize: "1.2em",
                                    fontWeight: 500,
                                    mr: 2,
                                    fontFamily:
                                      locale === "fa"
                                        ? PERSIAN_FONT_FAMILY
                                        : locale === "en"
                                        ? "sans-serif"
                                        : "",
                                  }}
                                  key={men.name + "2"}
                                >
                                  {i18n.exists(
                                    `MENU.${m}.${men.name}.DESCRIPTION`
                                  ) && t(`MENU.${m}.${men.name}.DESCRIPTION`)}
                                </Typography>
                              </Grid>
                              <Grid
                                item
                                sm={1}
                                xs={1}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontWeight: "bold",
                                    display: "flex",
                                    flexDirection: "row",
                                    fontFamily:
                                      locale === "fa"
                                        ? PERSIAN_FONT_FAMILY
                                        : locale === "en"
                                        ? "sans-serif"
                                        : "",
                                  }}
                                  key={men.name + "3"}
                                >
                                  <span
                                    style={{ paddingRight: 5, paddingLeft: 5 }}
                                  >
                                    {" "}
                                    €{" "}
                                  </span>
                                  <span>
                                    {locale === "fa"
                                      ? persify(
                                          parseFloat(
                                            t(`MENU.${m}.${men.name}.PRICE`)
                                          )
                                        )
                                      : parseFloat(
                                          t(`MENU.${m}.${men.name}.PRICE`)
                                        )}
                                  </span>
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </>
                    ))}
                  </Grid>
                </>
              ))}
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Menu;
