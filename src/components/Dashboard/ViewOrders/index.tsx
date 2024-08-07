import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Chip, Typography } from "@mui/material";

function createData(
  name: string,
  orderNo: number,
  amount: string,
  status: string
) {
  return { name, orderNo, amount, status };
}

const rows = [
  createData("Wade Warren", 15478256, "$124.00", "Delivered"),
  createData("Jane Cooper", 48967586, "$305.00", "Pending"),
  createData("Guy Hawkins", 78995215, "$45.88", "Delivered"),
  createData("Kristin Watson", 20965732, "$66.00", "Cancelled"),
  createData("Savannah Nguyen", 7851428, "$128.20", "Delivered"),
  createData("Cody Fisher", 95715620, "$545.00", "Delivered"),
  createData("Roy Jack", 78514568, "$128.20", "Delivered"),
];

export default function ViewOrder() {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" sx={{ float: "left", padding: " 10px" }}>
        Recent Orders
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="right">Order No.</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.orderNo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Avatar alt={row.name} src="/static/images/avatar/3.jpg" />
                {row.name}
              </TableCell>
              <TableCell align="right">{row.orderNo}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">
                <Chip
                  label={row.status}
                  sx={{
                    backgroundColor:
                      row.status === "Delivered" ? "#135c4a" : "#8a4143",
                    color: row.status === "Delivered" ? "#0b8b67" : "#b84f51",
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
