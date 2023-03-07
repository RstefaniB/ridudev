import { email } from "../utils/email"
import { normalizedText } from "../utils/toUpperCase"


export function TwitterFollowCard({ name, username = 'unknown', isFollowing, formatUserName, children }) {
    const text = isFollowing ? 'siguiendo' : 'seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
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
                    <span className='.tw-followCard-infoUserName'>{children}</span>


                </div>
            </header>
            <aside>
                <button className={buttonClassName}>{text}</button>
            </aside>
        </article>


    )
}
