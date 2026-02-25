import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => (
  <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
    <Navbar />
    <main className="`flex-grow` p-6">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;