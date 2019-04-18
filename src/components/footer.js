import React from "react"

import Logo from "../images/logo.svg"

import FooterStyles from "./footer.module.scss"

import { Link } from "gatsby"

function Footer(props) {
  return (
    <div className={FooterStyles.container}>
      <div className={FooterStyles.grid}>
        <div className={FooterStyles.logo}>
          <img src={Logo} alt="CSS Grid a Day" title="CSS Grid a Day"/>
        </div>
        <div className={FooterStyles.title}>
          <h3>This is the ‘CSS Grid a day’ entry for May {props.date}</h3>
        </div>
        <div className={FooterStyles.caption}>
          <p>An example of using CSS grid every day, running from May&nbsp;1–31st,&nbsp;2019.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
