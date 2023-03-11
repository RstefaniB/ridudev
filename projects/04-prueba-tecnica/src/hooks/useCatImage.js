import { useEffect, useState } from 'react'
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {

    const [urlImage, setUrlImage] = useState()

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
    return { urlImage: `${CAT_PREFIX_IMAGE_URL}${urlImage} ` }
}



