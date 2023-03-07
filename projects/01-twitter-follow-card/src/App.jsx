import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (name) => `${name}`

    return (
        <>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing username='rebecaferguson' name='Rebeca Ferguson' />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing username='john' name='John Smith' />
            <TwitterFollowCard formatUserName={formatUserName} username='samueljack1' name='Samuel Jackson' />
            <TwitterFollowCard formatUserName={formatUserName} username='cristinasj' name='Cristina Sanoja' />

        </>
    )
}

