import { email } from "../utils/email"
import { normalizedText } from "../utils/toUpperCase"
import { useState } from "react"


export function TwitterFollowCard({ name, username = 'unknown', formatUserName, children, initialIsFollowing, initialFollower }) {


    const [count, setCount] = useState(initialFollower - 1)
    const [count1, setCount1] = useState(initialFollower + 1)
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)


    const handleClick = () => {
        setIsFollowing(!isFollowing)
        isFollowing ? setCount(count + 1) : setCount(count - 1)
    }

    const countUp = () => {
        setCount(count + 10)
    }

    const countDown = () => {
        setCount1(count1 - 100)
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
                <button className='tw-followCard-button' onClick={countUp}>{count}</button>
                <button className='tw-followCard-button' onClick={countDown}>{count1}</button>
            </aside>

        </article>


    )
}
