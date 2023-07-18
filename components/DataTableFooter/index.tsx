"use client"
import { TableFooterProps } from "@/types";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

import { Box, Button, Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react"
import { useState } from "react";

const DataTableFooter = ({ numberOfRows }: TableFooterProps) => {

  const [numberOfRowsPerPage, setNumberOfRowsPerPage] = useState<number>(5);

  return (
    <Box
      paddingY={3}
      paddingX={6}
      display="flex"
      gap={2}
      alignItems="center"
    >
      <Button>
        <ArrowLeftIcon boxSize={3} />
      </Button>
      {1}
      <Button>
        <ArrowRightIcon boxSize={3} />
      </Button>
      <Menu>
        <>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {numberOfRowsPerPage}
          </MenuButton>
          <MenuList width={10}>
            {numberOfRows.map((item, idx) => (
              <MenuItem key={idx}
                onClick={() => 
                  setNumberOfRowsPerPage(item)
                }
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </>
      </Menu>
    </Box>
  )
}

export default DataTableFooter