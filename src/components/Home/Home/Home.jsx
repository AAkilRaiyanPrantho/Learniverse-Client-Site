import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";


const Home = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;