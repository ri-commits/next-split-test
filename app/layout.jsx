import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    default: "NextJS App",
    template: "%s ",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-28`}>
        <nav>
          <h1>logo</h1>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
