import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { navbarStyles } from "./styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logoutClient } from "../../redux/actions/UserActions";

import { Button } from "reactstrap";

const Navbar = (props) => {
  console.log(props);
  // const navigate = useHistory();

  const doLogout = () => {
    props.dispatch(logoutClient());
  };

  return (
    <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <Button onClick={doLogout}>Logout</Button>
      {/* <List>
        {mainNavbarItems.map((item, index) => (
          <ListItem >
            <ListItemIcon sx={navbarStyles.icons}>

            </ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={item.label} />
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  message: state.authReducer.message,
  accessToken: state.authReducer.accessToken,
});

export default withRouter(connect(mapStateToProps)(Navbar));
