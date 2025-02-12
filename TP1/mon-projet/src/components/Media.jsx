import Instagram from '../assets/instagram.png'
import GitHub from '../assets/github.svg'
import Meta from '../assets/meta.png'


function Media(){
    let media = [
        {link: "https://www.instagram.com/", icon: Instagram, alt: "instagram"},
        {link: "https://github.com", icon: GitHub,  alt: "github"},
        {link: "https://www.meta.com/", icon: Meta, alt: "meta"}
    ];

    let list = media.map(m => (<li><a href={m.link}><img className="icon w-10 h-10 mr-4" src={m.icon} alt={m.alt}></img></a></li>));

    return (
        <ul className = "media flex flex-row">
            {list}
        </ul>
    );
}

/*
function Media(){
  return (
    <div className="media flex flex-row">
      <a href="#" className="w-10 h-10"><img src={Instagram} alt="Instagram" /></a>
      <a href="#" className="w-10 h-10"><img src={GitHub} alt="GitHub" /></a>
      <a href="#" className="w-10 h-10"><img src={Meta} alt="Meta" /></a>
    </div>
  )
}*/

export default Media;