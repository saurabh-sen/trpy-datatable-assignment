import React from 'react'
import { Badge } from '@chakra-ui/react'
import { BadgeProps } from '@/types'

const StatusBadge = ({status} : BadgeProps) => {

    const bgColor : string | undefined = {
        "Waiting": "yellow",
        "Paid": "green",
        "Failed": "red"
    }[status];

  return (
    <Badge borderRadius="full" px="3" variant='subtle' colorScheme={bgColor} fontSize="12px" >
      {status}
    </Badge>
  )
}

export default StatusBadge