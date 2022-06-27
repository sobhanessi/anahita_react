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
      Object.keys(mm).map((m) => mm[m].map((men) => console.log(men.name)))
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
                  <Typography gutterBottom sx={{ mt: 4, mb: 4 }}>
                    {m}
                  </Typography>
                  {mm[m].map((men) => (
                    <>
                      <Card sx={{ mt: 2, mb: 2 }}>
                        <CardMedia image={men.pic} />
                        <CardContent>{men.name}</CardContent>
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
