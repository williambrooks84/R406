import Pricing from '../ui/pricing';
import { fetchPricingData } from '../lib/loaders';
import { useLoaderData } from 'react-router-dom';

export async function loader(){
    const pricingData = fetchPricingData();
    return pricingData;
}

export default function Store() {
    const data = useLoaderData();
    return (
        <>
         <Pricing {...data}/>  
        </>
    )
}