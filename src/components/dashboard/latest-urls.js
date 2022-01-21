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
import { SeverityPill } from '../severity-pill';
import { useSelector } from 'react-redux';

export const LatestUrls = (props) => {
const { urls } = useSelector((state) => state.url);  
return (
  <Card {...props}>
    <CardHeader title="Latest urls" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Link
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {format(order.createdAt, 'dd/MM/yyyy')}
                </TableCell>
                <TableCell>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>Edit</Button>
                        <Button>Destroy</Button>
                        <Button>View</Button>
                    </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      {/* <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button> */}
    </Box>
  </Card>
)
};
