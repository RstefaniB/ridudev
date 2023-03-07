import './app.css'

export function App() {
    return (

        <article className='tw-followCard'>

            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src="https://unavatar.io/rebecaferguson">
                </img>
                <div className='tw-followCard-info'>
                    <strong>Rebeca Ferguson</strong>
                    <span className='.tw-followCard-infoUserName'>@rebecaferguson</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button '>seguir</button>
            </aside>
        </article>


    )
}

