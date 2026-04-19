import { Link } from "react-router";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";

const Home = () => {
  return (
    <>
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
      <HomeCards />
      <JobListings />
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/jobs"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </Link>
      </section>
    </>
  );
};

export default Home;