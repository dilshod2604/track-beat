import Layout from "@/components/Layout/Layout";
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
const layout: React.FC<LayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default layout;
