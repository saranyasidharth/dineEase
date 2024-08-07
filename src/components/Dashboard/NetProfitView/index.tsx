import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function NetProfitView() {
  return (
    <Paper
      elevation={3}
      style={{ gridTemplateColumns: "2fr 1fr" }}
      className="gridItem"
    >
      <CardContent sx={{ justifyContent: "left" }}>
        <Typography variant="h5" gutterBottom>
          Net Profit
        </Typography>
        <Typography
          variant="h3"
          component="div"
          sx={{
            mb: 1,
            fontWeight: "bold",
          }}
        >
          $6759.23
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: 16,
            alignItems: "center",
            display: "flex",
          }}
          color={"green"}
        >
          <ArrowDropUpIcon />
          3%
        </Typography>
      </CardContent>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 50,
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={100}
            thickness={6}
            size={100}
            sx={{
              color: "#283366",
            }}
          />
          <CircularProgress
            variant="determinate"
            value={70}
            thickness={6}
            size={100}
            sx={{
              position: "absolute",
              left: 0,
              color: "#3f51b5",
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
              },
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">70%</Typography>
          </Box>
        </Box>
      </div>
    </Paper>
  );
}
