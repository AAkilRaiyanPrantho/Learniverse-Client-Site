import Discussions from "../../Discussions/Discussions";
import Features from "../../Features/Features";
import Notifications from "../../Notifications/Notifications";
import PopularTasks from "../../PopularTasks/PopularTasks";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";


const Home = () => {
    return (
        <div className="flex flex-col gap-y-4">
            
           <Banner></Banner>
           <Notifications></Notifications>
           <PopularTasks></PopularTasks>
           <Features></Features>
           <FAQ></FAQ>
           <Discussions></Discussions>
            
        </div>
    );
};

export default Home;