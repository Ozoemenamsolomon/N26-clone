import React, { useState } from "react"
import styled from "styled-components"
import N26Logo from "../images/N26-logo"

const Login = () => {
  const [inputFocus, setInputfocus] = useState(false)

  const handleBlur = () => {
    setInputfocus(false)
    console.log("blured")
  }
  const handleFocus = () => {
    setInputfocus(true)
    console.log("focused")
  }

  return (
    <LoginBG>
      <LoginWrapper>
        <N26Logo
          style={{
            height: `3em`,
            marginBottom: "3em"
          }}
          fill="white"
        />
        <Greetings>Hallo John Doe</Greetings>
        <Email>
          johndoe@
          <ExternalLink href="solozo.page">solozo.page</ExternalLink>
        </Email>
        <InputWrapper>
          <InputLabel
            data-focused={inputFocus ? "true" : "false"}
            htmlFor="email"
          >
            Passwort
          </InputLabel>
          <PasswordInput
            id="email"
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="password"
          />
        </InputWrapper>
        <LoginButton>Anmelden</LoginButton>
      </LoginWrapper>
    </LoginBG>
  )
}

export default Login

const LoginBG = styled.div`
  height: 100vh;
  background-color: rgb(54 161 139);
  align-items: center;
  display: flex;
  justify-content: center;
`
const LoginWrapper = styled.div`
  width: 90%;
  max-height: 70%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: sans-serif;
  color: #fff;
`
const Greetings = styled.h1`
  font-size: 1.2em;
  margin-bottom: 0.6rem;
`
const Email = styled.p`
  margin-bottom: 0.6rem;
`
const ExternalLink = styled.a`
  color: inherit;
  /* text-decoration: inherit; */
`
const InputWrapper = styled.div`
  position: relative;
  /* background-color: red; */
`

const InputLabel = styled.label`
  position: absolute;
  color: gray;
  height: 100%;
  padding: 0.9em 0em 0em 1em;
  font-size: 1.2em;
  transition: all 0.3s ease-out;
  pointer-events: none;
  &[data-focused="true"] {
    padding: 0em 0em 0em 1em;
    font-size: 0.9em;
  }
  /* background-color: red; */
  /* width: 100%; */
`

const PasswordInput = styled.input`
  width: 100%;
  font-size: 1em;
  padding: 1em 1em;
  border-radius: 0.5em;
  margin-bottom: 1rem;
  border: none;
`
const LoginButton = styled.button`
  border-radius: 0.5em;
  border: none;
  padding: 0.3em 0em;
  font-size: 0.9em;
`
