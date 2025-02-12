import SocialIcon from "./SocialIcon";

export default function Media({media}){

    let list = media.map((m, index) => (<li key={index}><a href={m.url}><SocialIcon name={m.name}/></a></li>));

    return (
        <ul className = "media flex flex-row">
            {list}
        </ul>
    );
}