import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  toolbar: {
    background: "#368B85",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    cursor: "pointer",
  },
  search: {
    margin: "10px 0px",
    padding: "5px",
    alignItems: "center",
    display: "flex",
    justifyContent: "SpaceBetween",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "50px",
  },
  searchicon: {
    margin: "0px 7px",
    height: "100%",
  },
}));
