import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <Paper elevation={3} sx={{ mt: 2, padding: 2 }}>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
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
                <div style={{}} className="itemIcon">
                  {item.icon}
                </div>
                <Typography variant="h5" sx={{ marginLeft: 1 }}>
                  {item.name}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Paper>
  );
}
