import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

export const ReviewCard = ({name,email,rating,_id,DeleteReviewsData}) => {
  return (
    <div>
        <Box padding={"20px"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}>
            <Text> <span style={{fontWeight:"bold"}}> Name :- </span> {name} </Text>
            <Text> <span style={{fontWeight:"bold"}}>Email :- </span> {email} </Text>
            <Text> <span style={{fontWeight:"bold"}}>Review :- </span> {rating} </Text>
            
            <Button mt="15px" colorScheme="red" onClick={()=>{DeleteReviewsData(_id); console.log(_id)}}>Delete</Button>
        </Box>
    </div>
  )
}

