import React from 'react'
import {
    Tbody,
    Tr,
    Td,
    Button
  } from '@chakra-ui/react'
import { TableRowProps } from '@/types'
import StatusBadge from '../StatusBadge'

const DataTableBody = ({rows}: TableRowProps) => {
    return (
        <Tbody>
            {
                rows.map((row: any, index: number) => (
                    <Tr key={index}>
                        <Td>{row.Timestamp}</Td>
                        <Td>{row.PurchaseID}</Td>
                        <Td>{row.Mail}</Td>
                        <Td>{row.Name}</Td>
                        <Td>{row.Source}</Td>
                        <Td><StatusBadge status={row.Status} /></Td>
                        <Td><Button p="2" rounded="md" fontSize="12px">Select</Button></Td>
                    </Tr>
                ))
            }
        </Tbody>
    )
}

export default DataTableBody