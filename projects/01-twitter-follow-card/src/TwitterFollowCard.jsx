export function TwitterFollowCard({ name, username, isFollowing }) {

    const imgSrc = `https://unavatar.io/${username}`

    return (

        <article className='tw-followCard'>

            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={imgSrc}>
                </img>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='.tw-followCard-infoUserName'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button '>seguir</button>
            </aside>
        </article>


    )
}