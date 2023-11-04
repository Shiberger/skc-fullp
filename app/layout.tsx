import "./global.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Navbar3 from "@/components/Nav3";



export const metadata = {
    title: "Skc-full",
    description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {/* <Navbar3/> */}

          
                
                

                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}