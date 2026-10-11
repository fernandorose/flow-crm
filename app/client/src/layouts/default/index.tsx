import { useEffect, type ReactNode } from "react";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <>{children}</>;
};

export default Layout;
