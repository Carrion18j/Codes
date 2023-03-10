import * as React from "react";
import * as mui from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CalculateIcon from "@mui/icons-material/Calculate";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";

const App= ()=>{
  const [value, setValue] = React.useState(0);

  return (
    <mui.Box sx={{ width: 1 }}>
      <mui.BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ bgcolor: "black", borderRadius: 5, height: 70 }}
      >
        <mui.BottomNavigationAction
          sx={{ rowGap: 1, spacing: 1, color: "white" }}
          label="Home"
          icon={<HomeIcon />}
        />
        <mui.BottomNavigationAction
          sx={{ rowGap: 1, spacing: 1, color: "white" }}
          label="About Us "
          icon={<InfoIcon />}
        />
        <mui.BottomNavigationAction
          sx={{ rowGap: 1, spacing: 1, color: "white" }}
          label="Fitness Calculater "
          icon={<CalculateIcon />}
        />
        <mui.BottomNavigationAction
          sx={{ rowGap: 1, spacing: 1, color: "white" }}
          label="Email Us"
          icon={<EmailIcon />}
        />
        <mui.BottomNavigationAction
          sx={{ rowGap: 1, spacing: 1, color: "white" }}
          label="Register"
          icon={<AppRegistrationIcon />}
        />
        <mui.BottomNavigationAction
          sx={{ rowGap: 1, spacing: 1, color: "white" }}
          label="Login"
          icon={<LoginIcon />}
        />
      </mui.BottomNavigation>
    </mui.Box>
  );
}

export default App ;