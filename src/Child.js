import React from "react"
import Grandchild from "./Grandchild"


// we dont have to use React.fragment, we can either import Fragment and justr use fragment or even btter just use a fragment like so <> </>
function Child() {
    return (
        <React.Fragment>
            <h1>I'm the Child component</h1>
            <Grandchild />
        </React.Fragment>
    )
}




export default Child