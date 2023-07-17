import React from 'react'
import { Badge } from '@chakra-ui/react'
import { BadgeProps } from '@/types'

const StatusBadge = ({status} : BadgeProps) => {

    const bgColor : string | undefined = {
        "Waiting": "orange",
        "Paid": "green",
        "Failed": "red"
    }[status];

  return (
    <Badge borderRadius="full" px="3" variant='subtle' colorScheme='green' fontSize="12px" >
      {status}
    </Badge>
  )
}

export default StatusBadge