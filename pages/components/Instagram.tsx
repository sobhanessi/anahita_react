import { Grid } from "@mui/material";
import InstagramEmbed from "react-instagram-embed";
import React from "react";

function Instagram() {
  const clientAccessToken =
    process.env.NEXT_PUBLIC_APP_ID + "|" + process.env.NEXT_PUBLIC_APP_SECRET;

  return (
    <Grid container>
      <Grid item sm={10} md={8}>
        <InstagramEmbed
          url=""
          clientAccessToken={clientAccessToken}
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </Grid>
    </Grid>
  );
}

export default Instagram;
