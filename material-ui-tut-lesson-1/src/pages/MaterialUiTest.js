import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { Radio } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import TextFiled from '@material-ui/core/TextField'
import { useState } from 'react'
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})


export default function MaterialUiTest() {

  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [category, setCategory] = useState('todos')

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault()

    console.log("Buraya geldi")

    if (title && details) {
      console.log(title, details, category)
    }
  }

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
        />

      </form>


      <Button
        onClick={() => {
          handleSubmit()
          console.log("you clicked me")
        }}
        type="submit"
        variant="outlined"
        color="primary"
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
        className={classes.btn}
      >
        Click me
      </Button>

      <br />

      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />

      <FormControl className = {classes.field}>

        <FormLabel>This is form label for radio buttons</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel value="money" control={<Radio />} label="Money" />
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
          <FormControlLabel value="work" control={<Radio />} label="Work" />

        </RadioGroup>
      </FormControl>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />



      {/* 
      <Button type="submit" color="primary">Submit</Button>
      <Button type="submit" color="secondary"> Submit </Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>One</Button>
        <Button>One</Button>
        <Button>One</Button>
        <Button>One</Button>
      </ButtonGroup>

      <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" /> */}
    </Container>
  )
}
