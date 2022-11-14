import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  searchContainer: {
    padding: "5px 4px 0 14px",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    boxShadow: "0 2px 5px 1px rgb(64 60 67 / 16%)",
    borderRadius: "24px",
    height: "min-content",
    maxWidth: "600px",
    position: "relative",
  },
  searchContainerActive: {
    width: "85%",
    borderRadius: "24px 24px 0 0",
    boxShadow: "0 2px 8px 1px rgb(64 60 67 / 24%)",
    borderColor: "rgba(223,225,229,0)",

    "&:before": {
      content: '""',
      position: "absolute",
      bottom: 2,
      left: "2.5%",
      width: "95%",
      height: 1,
      display: "block",
      zIndex: 9999,
      background: "#e8eaed",
    },
  },
  searchBody: {
    display: "flex",
    height: "44px",
    justifyContent: "space-between",
  },
  input: {
    border: "unset",
    flex: 1,
    fontSize: 16,
    marginBottom: 1,

    "&:focus-visible": {
      outline: "transparent",
    },
  },
  actionsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px",
  },
  searchIcon: {
    margin: "auto",
    color: "#9aa0a6",
    height: "20px",
    lineHeight: "20px",
    width: "20px",
    marginRight: "8px",
  },
  cancelIcon: {
    color: "#70757a",
    outline: "none",
    height: "24px",
    width: "24px",
  },
  list: {
    background: "white",
    position: "absolute",
    maxHeight: 290,
    overflow: "auto",
    boxShadow:
      "0 9px 8px -3px rgb(64 60 67 / 24%), 8px 0 8px -7px rgb(64 60 67 / 24%), -8px 0 8px -7px rgb(64 60 67 / 24%);",
    width: "100%",
    top: 44,
    right: 0,
    borderRadius: "0 0 24px 24px",
    margin: 0,
    padding: "10px 0 16px",
  },
});
