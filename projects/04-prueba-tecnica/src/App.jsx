import { useState, useEffect } from "react"
import { useCatFact } from "./hooks/useCarFact"
import { useCatImage } from "./hooks/useCatImage"





export function App() {

    const { fact, refreshFact } = useCatFact()
    const { urlImage } = useCatImage({ fact })

    const handleClicks = async () => {
        refreshFact()
    }


    return (
        <main>
            {fact && <h1>{fact}</h1>}
            {urlImage && <img src={urlImage} alt={`imamge extracted from API using first word ${fact}`} />}
            <button onClick={handleClicks}>New fact</button>
        </main >
    )
}



