import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function SummaryCard({ data }: any) {
  return (
    <Paper elevation={3} className="gridCntainer">
      <CardContent>
        <div className="icons">{data.icon}</div>
        <Typography variant="h5" gutterBottom>
          {data.heading}
        </Typography>
        <div className="rateSection">
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              float: "left",
            }}
          >
            {data.num}
          </Typography>
          <Typography
            sx={{
              mb: 1.5,
              fontSize: 16,
              float: "right",
              alignItems: "center",
              display: "flex",
            }}
            color={data.rateSign === "+" ? "green" : "error"}
          >
            {data.rateSign === "+" ? (
              <ArrowDropUpIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
            {data.rateNumber}%
          </Typography>
        </div>
      </CardContent>
    </Paper>
  );
}
