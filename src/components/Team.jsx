import React from 'react'
import { Table, Button, TagInput, Heading, Theme } from 'evergreen-ui'

export default function Team(props) {
  return (
    <div className="team">
      <Table>
        <Table.Head>
          <Table.TextHeaderCell text="selected">
            {props.teamName}
          </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {props.players?.map((name, id) => (
            <Table.Row key={id} isSelectable onSelect={() => alert(name)} >
              <Table.TextCell>{name}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
