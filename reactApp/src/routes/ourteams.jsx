import Team from '../ui/Team';
import TeamSkeleton from '../ui/Team/TeamSkeleton';
import Testimonial from '../ui/Testimonial';
import { fetchOurTeams, fetchTestimonialData } from '../lib/loaders';
import { useLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';

export async function loader({params}){
    const teamData = fetchOurTeams(params.teamName);
    const testimonialData = await fetchTestimonialData(params.teamName);
    return defer({team: teamData, testimonial: testimonialData});
}

export default function OurTeams() {
    const data = useLoaderData();
    return (
        <>
            <Suspense fallback={<TeamSkeleton/>}>
                <Await resolve={data.team} errorElement={<div>Failed to load data</div>}>
                    {teamData => <Team {...teamData}/>}
                </Await>
            </Suspense>
            <Testimonial data={data.testimonial}/>
        </>
    )
}