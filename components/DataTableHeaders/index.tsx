import { TableHeaderProps } from '@/types'
import {
    Thead,
    Tr,
    Th,
} from '@chakra-ui/react'

const DataTableHeaders = ({ headers, sortable }: TableHeaderProps) => {
    return (
        <Thead>
            <Tr>
                {/* if th has sortable then give arrows */}
                {
                    headers.map((header, index) => (
                        <Th key={index}>{header}</Th>
                    ))
                }
            </Tr>
        </Thead>
    )
}

export default DataTableHeaders