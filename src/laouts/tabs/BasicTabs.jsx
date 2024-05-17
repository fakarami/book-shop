import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Home from "../main/pages/homePage/Home";
import Shop from "../main/pages/shopPage/Shop";
import AboutUs from "../main/pages/aboutUsPage/AboutUs";
import ContactUs from "../main/pages/contactUsPage/ContactUs";

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="خانه" {...a11yProps(0)} />
            <Tab label="فروشگاه" {...a11yProps(1)} />
            <Tab label="درباره ما" {...a11yProps(2)} />
            <Tab label="تماس با ما" {...a11yProps(3)} />{" "}
            <Button color="inherit" style={{ marginRight: "auto" }}>
              <PersonIcon />
            </Button>
            <Button color="inherit">
              <ShoppingCartIcon />
            </Button>
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Home />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Shop />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <AboutUs />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ContactUs />
        </CustomTabPanel>
      </Box>
    </>
  );
}
