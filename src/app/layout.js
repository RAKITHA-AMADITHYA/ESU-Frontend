import { Poppins } from "next/font/google";
import "./globals.css";
import MegaMenu from "@/components/header/MegaMenu";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "@/components/footer/Footer";
import AOSInit from "@/hooks/AosInit";
// import ScrollToTop from "@/components/scrollTop/ScrollTop.jsx";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

;



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* <Head> block removed */}
            <body className={`${poppins.className} antialiased`}>
            <MegaMenu />
            {/* <ScrollToTop /> */}
        <Suspense fallback={<Loading />}>
            <AOSInit />
            {children}
        </Suspense>
        <Footer />
        </body>
        </html>
    );
}
