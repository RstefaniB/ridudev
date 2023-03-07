import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <>
            <TwitterFollowCard isFollowing username='rebecaferguson' name='Rebeca Ferguson' />
            <TwitterFollowCard isFollowing username='john' name='John Smith' />
            <TwitterFollowCard username='samueljack1' name='Samuel Jackson' />
            <TwitterFollowCard username='cristinasj' name='Cristina Sanoja' />

        </>
    )
}

