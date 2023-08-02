import React from "react";
import { useOutletContext } from "react-router-dom";

function HomePage() {
  const [setPageName] = useOutletContext<any>();
  React.useEffect(() => {
    setPageName("Home");
  }, [setPageName]);
  return <div>HomePage</div>;
}

export default HomePage;
