import React from "react"
import Scene from "../components/scene"
import Layout from "../components/layout"

export default () => (
<div className="curtain">
  <div className="curtain__wrapper">
    <input type="checkbox" defaultChecked />
    <div className="curtain__panel curtain__panel--left">
      <h1>Click&nbsp;</h1>
    </div> {/* curtain__panel */}
    <div className="curtain__content">
      <img src="https://cdn-icons.flaticon.com/png/512/3587/premium/3587361.png?token=exp=1643208348~hmac=296dea0324cd4bd176ecd2727fb29b46" />
    </div>
    <div className="curtain__panel curtain__panel--right">
      <h1>me...</h1>
    </div> {/* curtain__panel */}
  </div> {/* curtain__wrapper */}
</div>
)