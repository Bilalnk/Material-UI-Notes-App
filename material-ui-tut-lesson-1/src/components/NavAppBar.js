import React from 'react'

import { Divider, makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';

import { Typography } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { format } from 'date-fns'


const drawerWidth = 240

const useStyles = makeStyles((theme) => {

        return {

                appbar: {
                        width: `calc(100% - ${drawerWidth}px)`
                },
                toolbar: theme.mixins.toolbar,
                centerItems: {
                        display: 'flex',
                        justifyContent: 'center',

                },
                date: {
                        flexGrow: 1
                },
                avatar: {
                        marginLeft: theme.spacing(2)
                }
        }
})


function NavAppBar() {


        const classes = useStyles();

        return (
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
                                <Avatar src="https://avatars.githubusercontent.com/u/50082041?v=4" className={classes.avatar} />
                        </Toolbar>
                </AppBar>
        )
}

export default NavAppBar
