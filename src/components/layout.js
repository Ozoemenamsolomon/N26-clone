/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"
import styled from "styled-components"
import NavBar from "./NavBar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
      <Header siteTitle="I´m coming for you Header!" />
      <MainWrapper
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
      </MainWrapper>
      <NavBar />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

const LayoutWrapper = styled.div`
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const MainWrapper = styled.div`
  flex: 1;
`
