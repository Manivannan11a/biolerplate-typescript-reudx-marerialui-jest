import { createTheme, ThemeProvider } from "@mui/material";
import { colors } from "../../constants/theme-color";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: colors["green"],
  });
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout;