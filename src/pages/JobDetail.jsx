import { useParams } from "react-router";
import JobListing from "../components/JobListing";
import data from "../data.json";

const JobDetail = () => {
    const {id} = useParams();
    const jobs = data.jobs;
    const job = jobs.find((job) => job.id === parseInt(id));


    return ( 
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {job && <JobListing key={job.id} job={job} />}
                </div>
            </div>
        </section>
    );
}

export default JobDetail;