import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const MainFooter = () => {
  const { t } = useTranslation("home");
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
            {t("footer.title")}
            <span className=" uppercase font-bold">
              {t("footer.logo")}
              .!
            </span>
          </Typography>
          <Typography variant="h6" gutterBottom>
            <span className=" uppercase"> {t("footer.logo")}</span>{" "}
            {t("footer.subtitle")}
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
            {t("quick_links.home")}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t("quick_links.about_us")}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t("quick_links.contact_us")}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t("quick_links.faq")}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t("quick_links.login")}
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
            <Typography variant="body1" gutterBottom>
              {t("contact_us.title")}
            </Typography>{" "}
          </Typography>
          <Typography
            variant="body1"
            className="max-w-[300px] text-center"
            gutterBottom
          >
            {t("contact_us.street")}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t("contact_us.phone")}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t("contact_us.email")}
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default MainFooter;
