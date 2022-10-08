import React from "react";
import PropTypes from "prop-types";

// MUI
import { CircularProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import LoadingButton from '@mui/lab/LoadingButton';

//Bootstrap
import { Spinner } from "react-bootstrap";

// MApping States to propes nad Routing
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { loginClient } from "../../redux/actions/UserActions";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "} Tanos Maalouf{" "}
      <Link color="inherit" href="https://euriskomobility.com/">
        Eurisko
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      laoding: true,
    };

    this.doLogin = this.doLogin.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  doLogin(e) {
    e.preventDefault();
    // console.log(this.state.username, this.state.password);
    this.props.dispatch(
      loginClient(
        { username: this.state.username, password: this.state.password },
        this.props.history
      )
    );
  }

  changeUsername(event) {
    this.setState({ username: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid
          container
          component="main"
          sx={{ height: "50vh", alignContent: "center" , width:"150%" }}
        >
          <CssBaseline sx={{ size: 40 }} />

          <Grid
            direction="column"
            xs={8}
            align="center"
            container
            sm={8}
            md={8}
            item
            component={Paper}
            elevation={5}
          >
            <Box
              sx={{
                my: 2,
                mx: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: 5,
                borderRadius: 10,
              }}
              xs={4}
              xl={2}
            >
              <Avatar sx={{ m: 5, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>

              <Box
                component="form"
                noValidate
                onSubmit={this.doLogin}
                sx={{ mt: 5, width: "20%" }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={this.changeUsername}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.changePassword}
                />

                <Button
                  type="submit"
                  disabled={
                    (!this.state.username || !this.state.password) && true
                  }
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  <Spinner role="status" aria-hidden="true" animation="grow" />
                  {this.props.isLoading ? (
                    <Box sx={{ display: "flex" }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    "Sign in"
                  )}
                </Button>
                <Copyright sx={{ mt: 10, fontSize: 15 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.authReducer.message,
  accessToken: state.authReducer.accessToken,
});

export default withRouter(connect(mapStateToProps)(Login));
