import { ConfigProvider } from "antd";
import HomePage from "./pages/home";
import { ParallaxProvider } from "react-scroll-parallax";
// import { useEffect, useState } from "react";
// import LoadingPage from "./pages/loading";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  //   return () => clearTimeout(timer);
  // }, []);
  // if (loading) {
  //   return <LoadingPage />;
  // }
  return (
    <ParallaxProvider>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Noto Sans",
          },
          components: {
            Button: {
              colorPrimaryBorderHover: "#FFC100",
              colorPrimaryHover: "#FFC100",
              colorPrimary: "#18181b",
              colorPrimaryBorder: "#18181b",
            },
          },
        }}
      >
        <HomePage />
      </ConfigProvider>
    </ParallaxProvider>
  );
}

export default App;
