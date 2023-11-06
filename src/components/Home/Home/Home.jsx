import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";


const Home = () => {
    return (
        <div className="flex flex-col gap-y-4">
            
           <Banner></Banner>
           <FAQ></FAQ>
            
        </div>
    );
};

export default Home;