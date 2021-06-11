import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Avatar, IconButton } from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography, makeStyles } from '@material-ui/core';
import { blue, orange, purple, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
        avatar: {

                backgroundColor: (note) => {
                        if (note.category == 'work') {
                                return yellow[700]

                        }

                        if (note.category == 'reminders') {
                                return orange[700]
                        }

                        if (note.category == 'todos') {
                                return blue[700]
                        }

                        if (note.category == 'money') {
                                return purple[700]
                        }

                }
        },
        media: {
                height: 0,
                paddingTop: '56.25%', // 16:9
        },
})



function NoteCard({ note, handleDelete }) {

        const classes = useStyles(note)

        return (
                <div>
                        <Card elevation={3}
                                hoverable>
                                <CardHeader
                                        avatar={
                                                <Avatar className={classes.avatar}>
                                                        {note.category[0].toUpperCase()}
                                                </Avatar>
                                        }
                                        action={
                                                <IconButton aria-label="settings" onClick={() => handleDelete(note.id)}>
                                                        <DeleteOutlined />
                                                </IconButton>
                                        }

                                        title={note.title}
                                        subheader={note.category}
                                >
                                </CardHeader>

                                <CardMedia
                                        className={note.media == "" || note.media == undefined  ? null :  classes.media }
                                        image={note.media}
                                        title="Paella dish"
                                />

                                <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                                {note.details}
                                        </Typography>
                                </CardContent>


                        </Card>
                </div>
        )
}

export default NoteCard
