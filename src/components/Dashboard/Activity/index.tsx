// import { Card, Paper, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { axisClasses } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Activity() {
  return (
    <Paper
      elevation={3}
      sx={{
        marginTop: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#282c34",
        alignItems: "left",
      }}
    >
      <Typography variant="h4" sx={{ float: "left", padding: " 10px" }}>
        Activity
      </Typography>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: [
              "5",
              "9",
              "11",
              "13",
              "15",
              "17",
              "19",
              "21",
              "23",
              "25",
              "27",
            ],
          },
        ]}
        series={[
          {
            data: [
              4000, 10000, 15000, 15000, 8000, 4000, 7000, 12000, 6500, 16000,
              18000,
            ],
          },
        ]}
        height={300}
        borderRadius={50}
        sx={{
          [`.${axisClasses.root}`]: {
            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
              stroke: "#acacbb",
            },
            [`.${axisClasses.tickLabel}`]: {
              fill: "#acacbb",
            },
          },
        }}
      />
    </Paper>
  );
}
