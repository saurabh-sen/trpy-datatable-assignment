import { TableHeaderProps } from '@/types'
import {
    Thead,
    Tr,
    Th,
    Box,
    Text,
} from '@chakra-ui/react'

import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons"

const DataTableHeaders = ({ headers, sortable, setSort, sort }: TableHeaderProps) => {

    const handleSort = (header: string) => {
        if (sortable) {
            setSort((prev: any) => prev = {
                ...prev,
                columnName: header,
                sortOrder: prev.sortOrder === "DESC" ? 'ASC' : 'DESC'
            })
        }
    };

    return (
        <Thead>
            <Tr>
                {
                    headers.map((header, index) => (
                        <Th onClick={() => handleSort(header)} key={index} >
                            <Box style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "5px",
                                cursor: 'pointer'
                            }}>
                                <Text w="min-content">{header}</Text>
                                {sortable && header !== "Select" && <Sortable sort={sort} header={header} />}
                            </Box>
                        </Th>
                    ))
                }
            </Tr>
        </Thead>
    )
}

type SortableProps = {
    sort: {
        columnName: string;
        sortOrder: string;
    };
    header: string
}

const Sortable = ({ sort, header }: SortableProps) => {
    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            opacity: "0.5",
        }} w="min-content">
            {
                sort.columnName === header && (sort.sortOrder === "DESC" ? <ArrowUpIcon /> : <ArrowDownIcon />)
            }
        </Box>
    )
}

export default DataTableHeaders