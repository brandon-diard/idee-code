import React, { Component } from "react"
import SEO from "../components/seo"
import Layouti from "../components/layouti"
import HeroVid from "../components/hero-vid"
import { Link } from "gatsby"

import "../components/reset.css"
import "../components/style.scss"

class index extends Component {
  render() {
    return (
      <Layouti
        bgnav="accueil"
        btnnav="btn-grey"
        bgfooter1="accueil1"
        bgfooter2="accueil2"
      >
        <SEO title="Accueil" />
        <HeroVid />
        <Link to="/page-2/" className="link">
          Page 2
        </Link>
      </Layouti>
    )
  }
}

export default index
