import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Whatshot from "@material-ui/icons/Whatshot";
import Movie from "@material-ui/icons/Movie";
import Search from "@material-ui/icons/Search";
import TV from "@material-ui/icons/Tv";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#2d313a",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const pathDict = {
    0: "/",
    1: "/movies",
    2: "series",
    3: "search",
  };
  useEffect(() => {
    navigate(pathDict[value]);
  }, [value]);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<Movie />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<TV />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
