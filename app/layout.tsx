import Link from "next/link";
import "../styles/globals.css";

const RootLayout = async (props) => {
  const children = props?.children;

  return (
    <html lang="ar">
      <body>
        <Link href={"/other"}>other</Link>
        <Link href={"/search"}>search</Link>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
