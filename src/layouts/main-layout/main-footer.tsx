import { Grid, Typography } from "@mui/material";

const MainFooter = () => {
  return (
    <section className="min-h-[40vh] bg-[#C4841D] p-3 place-content-center">
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Build and Make Dreams Come True With
            <span className=" uppercase">coursatak.!</span>
          </Typography>
          <Typography variant="h6" gutterBottom>
            <span className=" uppercase">coursatak</span> is a free online
            course and training service which aims to help you achieve your
            dreams in the field of technology.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Quick Links
          </Typography>
          <Typography variant="body1" gutterBottom>
            Home
          </Typography>
          <Typography variant="body1" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" gutterBottom>
            Contact
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            123, Main Street, City, Country
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: +123456789
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: 0JQpK@example.com
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default MainFooter;
