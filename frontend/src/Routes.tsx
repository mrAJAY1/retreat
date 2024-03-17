import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import App from "./App";

// GOOGLE POPUP
const handleClick = () => {
  // const popup = window.open(
  //   "/api/auth/google",
  //   "_blank",
  //   "width=300,height=400,resizable=no"
  // );

  window.addEventListener(
    "message",
    (event) => {
      // Validate origin
      if (event.origin !== "http://localhost:5100") return;

      // Handle message
      const data = event.data;
      // Perform your logic here with data received from the popup
      console.log(data);
    },
    false
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Layout>
            <button onClick={handleClick}>Continue with google</button>
          </Layout>
        ),
      },
      {
        path: "/search",
        element: (
          <Layout>
            <p>Search</p>
          </Layout>
        ),
      },
      {
        path: "/social_signup",
        element: <div>social signup</div>,
      },
    ],
  },
]);

export default router;
