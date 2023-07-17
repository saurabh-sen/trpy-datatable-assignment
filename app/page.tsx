"use client"
import { Box } from "@chakra-ui/react"
import { DataTable } from "@/components"
import { rows } from "@/mockdata"

export default function Home() {

  const headers = ['Timestamp', 'Purchase Id', 'Mail', 'Name', 'Source', 'Status', 'Select'];

  return (
      <Box padding={8}>
        <DataTable headers={headers} rows={rows} pagination />
      </Box>
  )
}
