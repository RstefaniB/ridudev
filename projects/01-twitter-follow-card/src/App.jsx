import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (name) => `${name}`

    return (
        <>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing username='rebecaferguson' name='Rebeca Ferguson' >
                Recomendacion de seguir
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing username='john' name='John Smith' >
                Recomendacion de seguir
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} username='samueljack1' name='Samuel Jackson' >
                Recomendacion de no seguir
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} username='cristinasj' name='Cristina Sanoja' >
                Recomendacion de no seguir
            </TwitterFollowCard>

        </>
    )
}

