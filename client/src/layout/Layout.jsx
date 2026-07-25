import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NavbarUst from "../components/Navbar/NavbarUst";
import NavbarProvider from "../context/NavbarProvider";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarProvider>
        <NavbarUst />
        <Navbar />
      </NavbarProvider>
      <main className="flex-1 mt-[104px] sm:mt-[70px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
