import React from "react";

const Root = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ width: "100%", height: "100vh" }}>{children}</div>;
};

export default Root;
