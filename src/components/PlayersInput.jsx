import React, { useState, useEffect } from 'react'
import { Table, Select, Button, TagInput, Heading } from 'evergreen-ui'
export default function SideBar(props) {


  return (
    <div className="side__bar">
      <Heading size={600} is="h1">Players name</Heading>
      <TagInput
        className="tag__input"
        inputProps={{ placeholder: 'Add Player Name...' }}
        width="100%"
        values={props.players}
        onChange={props.onChange}
      />

      <Heading size={400} is="h1" marginButton="default">Total Teams</Heading>
      <Select width="100%" marginBottom={20} onChange={props.onChangeTotalTeam}>
        <option defaultValue="2" >2 Teams</option>
        <option value="3" >3 Teams</option>
        <option value="4">4 Teams</option>
        <option value="5">5 Teams</option>
        <option value="6">6 Teams</option>
      </Select>

      <Button onClick={props.onClick} appearance="primary" intent="success"
        marginRight={16} iconBefore="random">
        Randomize
        </Button>
    </div>
  )
}
