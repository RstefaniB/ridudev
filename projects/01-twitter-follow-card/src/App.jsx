import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (name) => `${name}`
    const midudev = { username: 'midudev', initialIsFollowing: true, initialFollower: 4 }
    const ridudev = { username: 'ridudev', initialIsFollowing: false, initialFollower: 2500 }
    const tina = { username: 'tina', initialIsFollowing: true, initialFollower: 750 }


    return (
        <>
            <TwitterFollowCard {...midudev} >
                Recomendacion de seguir
            </TwitterFollowCard>
            <TwitterFollowCard {...ridudev}>
                Recomendacion de seguir
            </TwitterFollowCard>
            <TwitterFollowCard {...tina}>
                Recomendacion de seguir
            </TwitterFollowCard>



        </>
    )
}

