import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import SummaryCard from "./SummaryCard";
import ViewOrder from "./ViewOrders";
import Activity from "./Activity";
import DetailView from "./DetailView";
import CustomerFeedback from "./CustomerFeedback";
import NetProfitView from "./NetProfitView";

export default function Dashboard() {
  const summaryData = [
    {
      heading: "Total Order",
      icon: <ShoppingCartIcon />,
      num: "200",
      rateNumber: "3",
      rateSign: "+",
    },
    {
      heading: "Total Delivered",
      icon: <LocalShippingIcon />,
      num: "200",
      rateNumber: "3",
      rateSign: "-",
    },
    {
      heading: "Total Cancelled",
      icon: <RemoveShoppingCartIcon />,
      num: "200",
      rateNumber: "3",
      rateSign: "+",
    },
    {
      heading: "Total Revenue",
      icon: <AttachMoneyIcon />,
      num: "200",
      rateNumber: "3",
      rateSign: "+",
    },
  ];
  return (
    <>
      <div className="gridItem">
        {summaryData.map((data, index) => (
            <SummaryCard data={data} key={index} />
        ))}
      </div>
      <NetProfitView />
      <Activity />
      <DetailView />
      <ViewOrder />
      <CustomerFeedback />
    </>
  );
}
