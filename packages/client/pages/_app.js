import React from 'react'
import '../styles/globals.css'


function MyApp({ Components, pageProps}) {
    return (
        <Components{...pageProps} />
    )
}

export default MyApp
