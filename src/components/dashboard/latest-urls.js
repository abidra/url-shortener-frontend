import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { DataGrid } from '@mui/x-data-grid'
import { SeverityPill } from '../severity-pill';
import { useSelector } from 'react-redux';
import apiClient from '../../services/api'
import { useDispatch } from 'react-redux';
import { deleteUrl } from 'src/slices/short-url';

const renderDetailsButton = (params) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    console.log('Edit');
   }
   
   const handleDelete = () => {
      dispatch(deleteUrl(params.row.id));
   }
   
   const handleView = () => {
     window.open('http://localhost/'+params.row.url_key, '_blank').focus();
  }

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleView}>View</Button>
    </ButtonGroup>
  )
}

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'to_url', headerName: 'Original URL', width: 200 },
  { field: 'url_key', headerName: 'Shorten URL', width: 500 },
  { 
    field: 'action', 
    headerName: 'Action', 
    width: 400 ,
    renderCell: renderDetailsButton,
  }
]

export const LatestUrls = (props) => {
const [tableData, setTableData] = useState([])
useEffect(() => {
  apiClient.get('/api/latest-url')
    .then((response) => response.data)
    .then((response) => setTableData(response.data))

}, [])
console.log(tableData);
const { urls } = useSelector((state) => state.url);  
return (
  <Card {...props}>
    <CardHeader title="Latest urls" />
    <PerfectScrollbar>
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={10}
        />
      </Box>
    </PerfectScrollbar>
  </Card>
)
};
