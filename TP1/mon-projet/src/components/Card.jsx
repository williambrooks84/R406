import Media from './Media'

function Card({user}){

    return (
        <div className="card flex flex-col w-100 bg-gray-300 text-black">
            <img className="card-img w-90 h-auto rounded-2xl self-center" src={user.icon}/>
            <div className="card-text text-left py-6">
                <h2 className="name text-3xl font-medium">{user.name}</h2>
                <p className="mail text-emerald-600 text-2xl font-normal">{user.mail}</p>
                <p className="description text-2xl font-normal">{user.description}</p>
            </div>
            <Media media={user.medias}/>
        </div>
    )
}

export default Card;