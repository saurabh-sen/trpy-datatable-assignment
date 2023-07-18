"use client"
import {
  Input,
  InputGroup,
  InputLeftElement, Box
} from "@chakra-ui/react"
import { DataTable } from "@/components"
import { rows } from "@/mockdata"
import { Search2Icon } from "@chakra-ui/icons";
import React, { useState } from "react";

export default function Home() {

  const headers = ['Timestamp', 'Purchase Id', 'Mail', 'Name', 'Source', 'Status', 'Select'];

  const [filteredData, setFilteredData] = useState([...rows]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setFilteredData([...rows].filter((row) => {
        for (const key in row) {
          const value = row[key];
          if (typeof value === "string") {
            if (value.toLowerCase().includes(e.target.value.toLowerCase())) {
              return true;
            }
          } else if (typeof value === "boolean") {
            if (value === (e.target.value.toLowerCase() === "true")) {
              return true;
            }
          } else if (typeof value === "number") {
            if (value === parseFloat(e.target.value)) {
              return true;
            }
          }
        }
        return false;
      }))
    } else {
      setFilteredData([...rows]);
    }
  }

  // sorting as per the column name and order
  const handleSorting = (colName: string, order: string): void => {
    if (colName) {
      colName = colName === "Purchase Id" ? "PurchaseID" : colName;
      const sortedData = [...rows].sort((a, b) => {
        if (order === 'DESC') {
          return a[colName] > b[colName] ? 1 : -1;
        } else {
          return a[colName] < b[colName] ? 1 : -1;
        }
      })
      setFilteredData(sortedData);
    } else {
      setFilteredData([...rows]);
    }
  }

  return (
    <Box padding={8} flex="flex" flexDir="column" maxW='7xl' m="auto" fontSize="14px" >
      <InputGroup w="max-content">
        <InputLeftElement pointerEvents='none'>
          <Search2Icon color='gray.300' />
        </InputLeftElement>
        <Input type='search' placeholder='Search...' onChange={handleSearch} />
      </InputGroup>
      <DataTable sortable headers={headers} rows={filteredData} handleSorting={handleSorting} />
    </Box>
  )
}
