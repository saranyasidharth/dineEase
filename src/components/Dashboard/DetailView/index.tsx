import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";

const detailViewList = [
  {
    icon: <GpsFixedIcon />,
    name: "Goals",
    color: "#5f3237",
  },
  {
    icon: <LunchDiningIcon />,
    name: "Popular Dishes",
    color: "#293368",
  },
  {
    icon: <BrunchDiningIcon />,
    name: "Menus",
    color: "#20495e",
  },
];

export default function DetailView() {
  return (
    <Paper elevation={3} sx={{ mt: 2, padding: 2, alignItems: "center", display: "grid" }}>
      {detailViewList.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="detailView"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              [`& .MuiSvgIcon-root`]: {
                borderRadius: "50px",
                padding: "12px",
                backgroundColor: item.color,
                marginRight: "20px",
              },
            }}
            className="itemIcon"
          >
            <div className="itemIcon">
              {item.icon}
            </div>
            <Typography variant="h5" sx={{ marginLeft: 1 }}>
              {item.name}
            </Typography>
          </Box>
          <ChevronRightIcon cursor={"pointer"} />
                </Box>
      ))}
    </Paper>
  );
}
