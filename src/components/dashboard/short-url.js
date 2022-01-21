import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { sendUrl } from 'src/slices/short-url';

export const ShortUrl = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    url: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };
  const handleClick = (event) => {
    // console.log(values);
    dispatch(sendUrl(values));
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Short your URL"
          title="Short URL"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="URL"
            margin="normal"
            name="url"
            onChange={handleChange}
            type="text"
            value={values.url}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            Make it short
          </Button>
        </Box>
      </Card>
    </form>
  );
};
