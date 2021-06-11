import React from 'react'
import {makeStyles } from '@material-ui/core'
import NavAppBar from './NavAppBar'
import PagesComponent from './PagesComponent'
import DrawerComponent from './DrawerComponent'

const useStyles = makeStyles((theme) => {

        return {
                root: {
                        display: 'flex'
                }
        }
})

function Layout({ children }) {

        const classes = useStyles()

        return (
                <div className={classes.root}>

                        {/* Navbar */}
                        <NavAppBar/>

                        {/* Left Side Drawer */}
                        <DrawerComponent/>

                        {/* PAGES */}
                        <PagesComponent children={children}/>
                </div>
        )
}

export default Layout
