import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { ThemeProvider } from "@mui/material";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "./muiTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <ToastContainer
        role="alert"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
    </ThemeProvider>
  )
}

export default App;
