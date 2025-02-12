import Icon from '../assets/icon.webp'
import Media from './Media'

function Card(){
    return (
        <div className="card flex flex-col w-100 bg-gray-300 text-black">
            <img className="card-img w-90 h-auto rounded-2xl self-center" src={Icon} alt="Icon" />
            <div className="card-text text-left py-6">
                <h2 className="name text-3xl font-medium">Gary Do</h2>
                <p className="mail text-emerald-600 text-2xl font-normal">gary.do@but1.mmi</p>
                <p className="description text-2xl font-normal">Lorem ipsum dolor sit amien. Lorem Ipsum dolor sit amien.</p>
            </div>
            <Media />
        </div>
    )
}

export default Card;