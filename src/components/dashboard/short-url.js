import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, AlertTitle, Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { sendUrl } from 'src/slices/short-url';

export const ShortUrl = (props) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    url: '',
  });
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };
  const handleClick = async() => {
    try {
      const shortUrl = await dispatch(sendUrl(values));;
      console.log(shortUrl);
      if (shortUrl.status === 200) {
        setAlertContent('http://localhost/'+shortUrl.data.url_key);
        setAlert(true);
      } else {
        alert('shortUrl failed');
      }
      
    } catch (error) {
      console.error(error);
    }
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
          {alert ?
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              {alertContent}
            </Alert> : <></>
          }
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
