import React from "react"
import styled from "styled-components"

const NavBar = () => {
  return (
    <NavBarWrapper>
      <h1>hello Navbar!</h1>
    </NavBarWrapper>
  )
}

export default NavBar

const NavBarWrapper = styled.div`
  background-color: greenyellow;
  height: 3em;
  width: 100%;
`
