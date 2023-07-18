"use client"
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { TableProps } from '@/types'
import DataTableHeaders from '@/components/DataTableHeaders'
import DataTableBody from '../DataTableBody'
import DataTableFooter from '../DataTableFooter'

const DataTable = ({ sortable, headers, rows, caption, pagination, handleSorting }: TableProps) => {

  const numberOfRows: number[] = [5, 10, 15, 20];

  const [sort, setSort] = useState({
    columnName: "",
    sortOrder: 'DESC',
  })

  useEffect(() => {
    handleSorting(sort.columnName, sort.sortOrder);
  }, [sort.columnName, sort.sortOrder]);

  return (
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>{caption ?? 'Results'}</TableCaption>
        <DataTableHeaders sortable={sortable} headers={headers} setSort={setSort} sort={sort} />
        <DataTableBody rows={rows} />
        {
          pagination && <DataTableFooter numberOfRows={numberOfRows} />
        }
      </Table>
    </TableContainer>
  )
}

export default DataTable