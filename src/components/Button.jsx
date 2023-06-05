import React from 'react'
import "./style.css"
export default function Button ({name, className}) {
  return (
    <>
        <button className={!className ? "red" : className}>
           {"click" && name}
        </button>
    </>
  )
}
