import { useState, useEffect } from "react"
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com'

export function App() {

    const [fact, setFact] = useState()
    const [urlImage, setUrlImage] = useState()

    const getRandomFact = () => {
        return fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                console.log(fact)
                return fact
            })
    }

    const refreshFact = () => {
        getRandomFact().then(setFact)
    }

    useEffect(refreshFact, [])

    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response

                console.log(url)
                setUrlImage(url)

            })
    }, [fact])



    const handleClicks = () => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const threeFirstWords = fact.split(' ', 3).join(' ')

                fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const { url } = response
                        setUrlImage(url)
                    })
            })
    }


    return (
        <main>
            {fact && <h1>{fact}</h1>}
            {urlImage && <img src={`${CAT_ENDPOINT_IMAGE_URL}${urlImage}`} alt={`imamge extracted from API using first word ${fact}`} />}
            <button onClick={handleClicks}>New fact</button>
        </main >
    )
}



