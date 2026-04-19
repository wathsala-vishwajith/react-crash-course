import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";

const Home = () => {
  return (
    <>

    {/* <!-- Hero --> */}
    <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />

    {/* <!-- Developers and Employers --> */}
   <HomeCards />

    {/* <!-- Browse Jobs --> */}
    <JobListings />

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  );
};

export default Home;