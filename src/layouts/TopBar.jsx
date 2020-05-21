import React from 'react'
import { Table, Button, TagInput, Heading } from 'evergreen-ui'

export default function TopBar() {
  return (
    <div className="top__bar">
      <Heading className="header" color="white" size={800}>Random Team Mates Generator</Heading>
      <Heading className="header text__right" color="white" size={400}>LT. FUTURE</Heading>
    </div>
  )
}
