import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import menu from "../database/menu";
import Navbar from "./components/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

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

  // console.log(
  //   menu.map((mm) =>
  //     Object.keys(mm).map((m) => mm[m].map((men) => console.log(men.pic)))
  //   )
  // );

  return (
    <>
      <Navbar />
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
                      }}
                    >
                      {m === "MAIN_COURSE"
                        ? "MAIN COURSE"
                        : m === "COFFEE_TEA"
                        ? "COFFEE TEA"
                        : m}
                    </Typography>
                    {mm[m].map((men) => (
                      <>
                        <Card
                          sx={{
                            mt: 2,
                            mb: 2,
                            backgroundColor: "#ebe3d9",
                          }}
                          key={men.name}
                        >
                          <CardMedia image={men.pic} component="img" />
                          <CardContent>
                            <Grid container>
                              <Grid item sm={11}>
                                <Typography
                                  component="h6"
                                  variant="h6"
                                  sx={{
                                    fontWeight: 700,
                                    fontSize: "1.5em",
                                    mr: 1,
                                  }}
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
                                  }}
                                >
                                  {i18n.exists(
                                    `MENU.${m}.${men.name}.DESCRIPTION`
                                  ) && t(`MENU.${m}.${men.name}.DESCRIPTION`)}
                                </Typography>
                              </Grid>
                              <Grid
                                item
                                sm={1}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontWeight: "bold",
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <span> € </span>
                                  <span>
                                    {t(`MENU.${m}.${men.name}.PRICE`)}
                                  </span>
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                        <Divider />
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
