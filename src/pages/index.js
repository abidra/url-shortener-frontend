import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { ShortUrl } from '../components/dashboard/short-url';
import { LatestUrls } from '../components/dashboard/latest-urls';
import { useRequireAuth } from "../services/useRequireAuth.js";

const Dashboard = () => {
  const { user } = useRequireAuth();

  if (!user) {
      return <div>Loading...</div>;
  }
  return (
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Settings
        </Typography>
        <Box sx={{ pt: 3 }}>
          <ShortUrl />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Typography
          sx={{ my: 3 }}
          variant="h4"
        >
          Latest URLs
        </Typography>
        <Box>
          <LatestUrls />
        </Box>
      </Container>
    </Box>
  </>
  );
};

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
