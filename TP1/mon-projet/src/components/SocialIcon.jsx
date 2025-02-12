import Instagram from '../assets/instagram.png';
import GitHub from '../assets/github.svg';
import Meta from '../assets/meta.png';
import Default from '../assets/default.png';

export default function SocialIcon({name}){
    const icons = {
        Instagram: Instagram,
        GitHub: GitHub,
        Meta: Meta,
        Default: Default
    }
    if (icons[name] === undefined){
        return <img className="w-10 h-10 mr-4" src={icons.Default} alt={name.Default}/>
    }
    else {    
    return (
        <img className="w-10 h-10 mr-4" src={icons[name]} alt={name}/>
    )}
}