import { email } from "../utils/email"
import { normalizedText } from "../utils/toUpperCase"
import { useState } from "react"


export function TwitterFollowCard({ name, username = 'unknown', isFollowing, formatUserName, children }) {

    const state = useState(false)
    isFollowing = state[0]
    const setIsFollowing = state[1]

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

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
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>


    )
}
