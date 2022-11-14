import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  listItemContainer: {
    height: 30,
    display: "flex",
    padding: "0 20px 0 14px",
    alignItems: "center",
    cursor: "default",

    "&:hover": {
      background: "#ebebeb",
    },
  },
  title: {
    fontSize: 16,
  },
  titleHistory: {
    color: "#52188c",
  },
  icon: {
    color: "#9aa0a6",
    height: 20,
    lineHeight: 20,
    width: 20,
    marginRight: 14,
  },
  historyIcon: {
    color: "#9aa0a6",
    height: 15,
    width: 20,
    marginRight: 14,
  },
  content: {
    zIndex: 10,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  delete: {
    fontSize: 14,
    color: "gray",
  },
});
