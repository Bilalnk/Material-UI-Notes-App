import React from 'react'
import { Divider, makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import { Typography } from '@material-ui/core'
import { flexbox, fontSize } from '@material-ui/system'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { useHistory, useLocation } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {format} from 'date-fns'

import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons/'


const drawerWidth = 240

const useStyles = makeStyles((theme) => {

        return {
                page: {
                        background: '#f9f9f9',
                        width: '100%',
                        padding: theme.spacing(3)
                },
                drawer: {
                        width: drawerWidth
                },
                drawerPaper: {
                        width: drawerWidth
                },
                root: {
                        display: 'flex'
                },
                active: {
                        background: '#5959ff',
                        color: '#ffffff',
                        '&:hover': {
                                color: '#5959ff'
                        }
                },
                title: {
                        padding: theme.spacing(2)
                },
                appbar: {
                        width: `calc(100% - ${drawerWidth}px)`
                },
                toolbar: theme.mixins.toolbar,
                centerItems:{
                        display: 'flex',
                        justifyContent: 'center',
                      
                },  
                date:{
                        flexGrow: 1
                },
                avatar:{
                       marginLeft: theme.spacing(2)
                }
        }


})

function Layout({ children }) {

        const classes = useStyles();
        const history = useHistory()
        const location = useLocation()

        const menuItems = [
                {
                        text: 'My Notes',
                        icon: <SubjectOutlined />,
                        path: '/'
                },
                {
                        text: 'Create Notes',
                        icon: <AddCircleOutlineOutlined />,
                        path: '/create'
                }
        ]

        return (
                <div className={classes.root}>

                        {/* Navbar */}

                        <AppBar
                                className={classes.appbar}
                        >
                                <Toolbar className={classes.centerItems}>
                                        <Typography className={classes.date}>
                                                {format(new Date(), 'do MMM Y')}
                                        </Typography>

                                        <Typography>
                                                BİLAL
                                        </Typography>
                                        <Avatar src="https://avatars.githubusercontent.com/u/50082041?v=4" className={classes.avatar}/>
                                </Toolbar>
                        </AppBar>

                        {/* Left Side Drawer */}
                        <Drawer
                                className={classes.drawer}
                                variant='permanent'
                                anchor="left"
                                classes={{ paper: classes.drawerPaper }}>
                                <div className={classes.centerItems}>
                                        <Typography variant='h5' className={classes.title}>
                                                MENU
                                        </Typography>
                                </div>

                                <Divider/>

                                <List>

                                        {
                                                menuItems.map(item => (

                                                        <ListItem
                                                                key={item.text}
                                                                button
                                                                onClick={() => history.push(item.path)}
                                                                className={location.pathname == item.path ? classes.active : null}>
                                                                <ListItemIcon> {item.icon} </ListItemIcon>
                                                                <ListItemText primary={item.text} />
                                                        </ListItem>
                                                ))
                                        }

                                </List>

                        </Drawer>


                        {/* PAGES */}
                        <div className={classes.page}>
                                <div className={classes.toolbar}></div>

                                {children}

                        </div>
                </div>
        )
}

export default Layout
