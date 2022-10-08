import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Button from "@mui/material/Button";

import Table from "../../components/Table/Table";
import articlesActions from "../../redux/actions/articlesActions";
import { logoutClient } from "../../redux/actions/UserActions";

const Dashboard = (props) => {
  const [page, setPage] = useState(0)

  useEffect(() => {
    props.getAllArticles(page)
  }, [page]);

  const logoutUser = () => {
    logoutClient(localStorage.removeItem("euriskoToken"));
    props.history.push("/");
  };




  return (
    <div>
      <Button onClick={() => logoutUser()} variant="outlined" color="error">
        Log Out
      </Button>



      <div style={{ textAlign: "center", marginTop: 35 }}>
        <Button
          children="Load More"
          style={{ color: "white" }}
          //  loading={isLoadingData}
          role="progressbar"
          variant="contained">

        </Button>
      </div>
      <Table data={props.articlesData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.articlesReducer.isLoading,
  message: state.articlesReducer.message,
  accessToken: state.authReducer.accessToken,
  isLoggedIn: state.authReducer.isLoggedIn,
  articlesData: state.articlesReducer.data

  //to do later
  // isLoadingData: state.articlesReducer.isLoadingData
});

const mapdispatchToProps = (dispatch) => ({
  getAllArticles: (page) => dispatch(articlesActions.getAllArticles(page)),
});

export default withRouter(
  connect(mapStateToProps, mapdispatchToProps)(Dashboard)
);
