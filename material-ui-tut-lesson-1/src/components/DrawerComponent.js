import React from 'react'

import { Divider, makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import { Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { useHistory, useLocation } from 'react-router-dom'

import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons/'


const drawerWidth = 240

const useStyles = makeStyles((theme) => {

        return {
        
                drawer: {
                        width: drawerWidth
                },
                drawerPaper: {
                        width: drawerWidth
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
                centerItems:{
                        display: 'flex',
                        justifyContent: 'center',
                      
                }
        }


})

function DrawerComponent() {

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

                        <Divider />

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

        )
}

export default DrawerComponent
