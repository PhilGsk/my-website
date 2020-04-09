import React from "react"
import Layout from "../components/layout"
import error from "../content/assets/404.png"

export default () => (
<Layout>
    <h1>404 - Page not found.</h1>
    <img src={error}></img>
</Layout>
)
