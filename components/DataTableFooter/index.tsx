import { TableFooterProps } from "@/types";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

import { Box, Button, Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react"

const DataTableFooter = ({ numberOfRows }: TableFooterProps) => {
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
            {5}
          </MenuButton>
          <MenuList width={12}>
            {numberOfRows.map((item, idx) => (
              <MenuItem key={idx}
                onClick={() => console.log(item)}
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