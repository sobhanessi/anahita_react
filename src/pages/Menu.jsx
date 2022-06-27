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
import { useTranslation } from "react-i18next";

import menu from "../database/menu.js";

function Menu() {
  const { t, i18n } = useTranslation();

  console.log(
    menu.map((mm) =>
      Object.keys(mm).map((m) => mm[m].map((men) => console.log(men.pic)))
    )
  );

  return (
    <Container>
      <Grid container justifyContent={"center"}>
        {menu.map((mm) => (
          <>
            {Object.keys(mm).map((m) => (
              <>
                <Grid item sm={8} md={8} lg={8} xs={10} xl={8}>
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
                      <Card sx={{ mt: 2, mb: 2 }}>
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
                                {t(`MENU.${m}.${men.name}.DESCRIPTION`)}
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
                                <span>{t(`MENU.${m}.${men.name}.PRICE`)}</span>
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
  );
}

export default Menu;
