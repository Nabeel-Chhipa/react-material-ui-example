import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Toolbar,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>Photo Album</Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque sed odit magni delectus porro incidunt necessitatibus esse voluptates cum.</Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
