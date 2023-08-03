import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
  useMediaQuery,
  Typography, Divider
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import EducationRow from '../EducationRow';
import EducationDialog from '../EducationDialog';

const EducationDetail = () => {
  const [educationList, setEducationList] = useState([]);
  const [open, setOpen] = useState(false)
  const handleOnSave = (data) => {
    setEducationList([...educationList, data]);
  }
  const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
  return (
    <>
      <Stack>
        <Typography variant={isLargeScreen ? "h6" : 'body1'} paddingLeft={1}><b>Add your <span style={{ color: '#ff6d05' }}>education</span></b></Typography>
        {
          educationList.length > 0 ? (
            <Button variant="outlined" color="secondary" onClick={() => {
              setOpen(true)
            }}
            >Add More</Button>
          ) : null
        }
      </Stack>
      {educationList.length === 0 ?
        (<AddNewEducation onSave={handleOnSave} />) :
        educationList.map(education => {
          return (
            <EducationRow
              islargeScreen={isLargeScreen}
              data={education}
            />
          )
        })}

      <EducationDialog open={open}/>
    </>

  )
}

const AddNewEducation = ({ onSave }) => {
  const [college, setCollege] = useState('');
  const [univ, setUniv] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [course, setCourse] = useState('');
  const [marks, setMarks] = useState('');
  const [currentlyPursuing, setCurrentlyPursuing] = useState(false);
  const [showPassingYearOnly, setShowPassingYearOnly] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can console.log or send the form data to the server
    onSave({
      college,
      univ,
      fromDate,
      toDate,
      course,
      marks,
      currentlyPursuing,
    });
  };

  const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <Stack direction={'column'} spacing={3} padding={1}>
      <TextField
        label="Course"
        variant="outlined"
        autoComplete='off'
        fullWidth
        color='secondary'
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <TextField
        label="College/School"
        variant="outlined"
        autoComplete='off'
        fullWidth
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        color='secondary'
      />
      <TextField
        label="Board/Univ"
        variant="outlined"
        fullWidth
        autoComplete='off'
        value={univ}
        color='secondary'
        onChange={(e) => setUniv(e.target.value)}
      />
      <Stack direction={'row'} spacing={3}>
        <TextField
          label="From Date"
          variant="outlined"
          type="date"
          disabled={showPassingYearOnly}
          fullWidth
          autoComplete='off'
          value={fromDate}
          color='secondary'
          onChange={(e) => setFromDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="To Date"
          variant="outlined"
          type="date"
          disabled={currentlyPursuing}
          autoComplete='off'
          fullWidth
          color='secondary'
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Stack>

      <Stack direction={'row-reverse'}>
        <FormControlLabel
          sx={{
            color: '#ff9d54',
            fontWeight: !isLargeScreen ? '8px' : '12px'
          }}
          control={
            <Checkbox
              disabled={showPassingYearOnly}
              checked={currentlyPursuing}
              onChange={(e) => setCurrentlyPursuing(e.target.checked)}
              color='secondary'
            />
          }
          label={
            <Typography
              variant="body1"
              sx={{
                fontSize: isLargeScreen ? "16px" : "12px", // Set the font size to the desired value
              }}>
              Currently Pursuing
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={showPassingYearOnly}
              disabled={currentlyPursuing}
              onChange={(e) => setShowPassingYearOnly(e.target.checked)}
              color='secondary'
            />
          }
          label={
            <Typography
              variant="body1"
              sx={{
                fontSize: isLargeScreen ? "16px" : "12px", // Set the font size to the desired value
              }}>
              Show only passing year
            </Typography>
          }
        />
      </Stack>
      <TextField
        label="Marks(%)"
        variant="outlined"
        autoComplete='off'
        type='number'
        color='secondary'
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        sx={{
          width: "50%", // Set the width to 50% of the available space
        }}
      />
      <Divider />
      <Stack direction={'row-reverse'} spacing={3}>
        <Button type="submit" variant="outlined" color="secondary" endIcon={<SaveIcon />} onClick={handleSubmit}>
          Save
        </Button>
        <Button type="submit" variant="outlined" color="primary" endIcon={<DeleteIcon />}>
          Discard
        </Button>
      </Stack>
    </Stack>
  );
};

export default EducationDetail;
