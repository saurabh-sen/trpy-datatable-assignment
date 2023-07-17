import React from 'react'
import {
  Table,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { TableProps } from '@/types'
import DataTableHeaders from '@/components/DataTableHeaders'
import DataTableBody from '../DataTableBody'
import DataTableFooter from '../DataTableFooter'

const DataTable = ({ caption, headers, rows, pagination }: TableProps) => {

  const numberOfRows : number[] = [5, 10, 15, 20];

  return (
    <TableContainer maxW='6xl' m="auto" fontSize="14px">
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>{caption ?? 'Results'}</TableCaption>
        <DataTableHeaders headers={headers} />
        <DataTableBody rows={rows} />
        {
          pagination && <DataTableFooter numberOfRows={numberOfRows} />
        }
      </Table>
    </TableContainer>
  )
}

export default DataTable