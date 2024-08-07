import { ThemeProvider } from "@mui/material/styles";

import "./App.css";
import PrimarySearchAppBar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import theme from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar />
      <div className="dashboard">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
