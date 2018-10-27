import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
import ListItem from '@material-ui/core/ListItem'

const drawerWidth = 240
const styles = theme => {
  return {
    appBar: {
      position: 'absolute',
      marginLeft: drawerWidth,
      zIndex: theme.zIndex.drawer + 1
    },
    drawerPaper: {
      width: drawerWidth,
      [theme.breakpoints.up('md')]: {
        position: 'relative'
      }
    },
    drawerDocked: {
      height: '100%'
    },
    navIconHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    barColorPrimary: {
      backgroundColor: theme.palette.primary.light
    },
    toolbar: theme.mixins.toolbar
  }
}

class CruiseControlAppBar extends Component {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  renderMenu = () => {
    return ["State","Load","Partition Load","Cluster State","Proposals"]
    .map(menu=> {
      return (<ListItem button key={menu}>
        <ListItemText secondary={menu} />
      </ListItem>)
    })
  }
  render() {
    const { classes, theme } = this.props

    const drawer = (
      <Fragment>
        <div className={classes.toolbar} />
        <List component="nav">
          {
            this.renderMenu()
          }
        </List>
      </Fragment>
    )

    return (
      <Fragment>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Kafka Cruise Control Dashboard
            </Typography>
          </Toolbar>
          
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            elevation={20}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
              docked: classes.drawerDocked
            }}>
            {drawer}
          </Drawer>
        </Hidden>
      </Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(CruiseControlAppBar)
