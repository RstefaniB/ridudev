import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (name) => `${name}`
    const midudev = { username: 'midudev', isFollowing: true }
    const ridudev = { username: 'ridudev', isFollowing: false }

    return (
        <>
            <TwitterFollowCard {...midudev} >
                Recomendacion de seguir
            </TwitterFollowCard>
            <TwitterFollowCard {...ridudev}>
                Recomendacion de seguir
            </TwitterFollowCard>


        </>
    )
}

