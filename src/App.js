import React from "react"
import withStyles from "react-jss"
import globalStyles from "./styles/globalStyles"

const styles = {
  ...globalStyles,
  app: {
    margin: 0,
    padding: 0,
  },
}

const App = ({ classes }) => {
  return <main className={classes.app}></main>
}

export default withStyles(styles)(App)
