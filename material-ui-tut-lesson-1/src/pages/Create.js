import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Radio } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import SendIcon from "@material-ui/icons/Send";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import TextFiled from "@material-ui/core/TextField";
import { useState } from "react";
import  Blue from "@material-ui/core/colors/blue"
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",

  },
  btn: {
    '&:hover': {
      backgroundColor: '#0d47a1',
      borderColor:"#564345",
      color: '#ffffff'
    }
  },
  radiogrp: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [category, setCategory] = useState("todos");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault()

    if (title == "") {
      setTitleError(true);
    }

    if (detailsError == "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
      setTitleError(false);
      setDetailsError(false);

      fetch("http://localhost:8099/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a Note
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextFiled
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="NoteTitle"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />

        <TextFiled
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
      </form>

      <FormControl  className={classes.field }>
        <FormLabel>Select a category</FormLabel>
        <RadioGroup
        className={classes.radiogrp}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          row
        >
          <FormControlLabel value="money" control={<Radio />} label="Money" />
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel
            value="reminders"
            control={<Radio />}
            label="Reminders"
          />
          <FormControlLabel value="work" control={<Radio />} label="Work" />
        </RadioGroup>
      </FormControl>

      <br />

      <Button
        onClick={() => {
          handleSubmit();
        }}
        type="submit"
        variant="outlined"
        color="primary"
        fullWidth
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
        className={classes.btn}
      >
        SUBMIT
      </Button>
    </Container>
  );
}
