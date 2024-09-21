import React, { useEffect, useRef, useState } from "react"

function ReactuseRefToFocusInput() {
  const [name, setName] = useState("")
  const inputRef = useRef(null)
  const nameRef = useRef("")
  const inputFocus = () => {
    inputRef.current.focus()
  }
  useEffect(() => {
    nameRef.current = name
  }, [name])
  return (
    <div>
      <h3>React useRef to focus input</h3>
      <input
        ref={inputRef}
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={inputFocus}>CLickFocus</button>
      <p>
        current name is {name} and preName is {nameRef.current}
      </p>
    </div>
  )
}

export default ReactuseRefToFocusInput
