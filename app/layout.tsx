import "./global.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Footer2 from "@/components/Footer2";




export const metadata = {
    title: "Skc-full",
    description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                {/* <Navbar /> */}
                <Navbar2/>


          
                
                

                <main>
                    {children}
                </main>
                <Footer2/>
                {/* <Footer /> */}
            </body>
        </html>
    );
}