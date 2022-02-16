import Main from "./components/Main";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const reactQueryCliente = new QueryClient();
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={reactQueryCliente}>
        <CssBaseline />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Main />
        </Grid>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
