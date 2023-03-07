import { email } from "../utils/email"
import { normalizedText } from "../utils/toUpperCase"


export function TwitterFollowCard({ name, username, isFollowing, formatUserName }) {

    const imgSrc = `https://unavatar.io/${username}`
    const addHash = (username) => `#${username}`
    return (

        <article className='tw-followCard'>

            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={imgSrc}>
                </img>
                <div className='tw-followCard-info'>
                    <strong>{normalizedText(username)}</strong>
                    <span className='.tw-followCard-infoUserName'>{addHash(username)}</span>
                    <span className='.tw-followCard-infoUserName'>{email(username)}</span>
                    <span className='.tw-followCard-infoUserName'>{formatUserName(name)}</span>

                </div>
            </header>
            <aside>
                <button className='tw-followCard-button '>seguir</button>
            </aside>
        </article>


    )
}
