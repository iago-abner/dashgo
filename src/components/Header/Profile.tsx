import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean; 
}

export function Profile({showProfileData = true}: ProfileProps){
  return(
    <>
    <Flex align="center">
      { showProfileData && (
        <Box mr="4">
          <Text>Iago Abner</Text>
          <Text color="gray.300" fontSize="small">
            iagoabner.dev@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="iago abner" src="https://github.com/iago-abner.png"/>
    </Flex>
    </>
  )
}