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
  Button
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
            <div>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>View Photos</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='info'>View Album</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
