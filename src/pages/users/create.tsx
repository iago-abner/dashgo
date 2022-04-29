import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser(){
  return (
    <Box>
      <Header/>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar/>

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal"> Criar usuários</Heading>
          <Divider my="6" borderColor="gray.700"/>
          <Stack spacing="6">
            <SimpleGrid minChildWidth="240px" w="100%" spacing="8">
              <Input name="name" label="Nome completo"/>
              <Input name="email" type="email" label="E-mail"/>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" w="100%" spacing="8">
              <Input name="password" type="password" label="Senha"/>
              <Input name="password_confirmation" type="password" label="Confirmação da senha"/>
            </SimpleGrid>
            <Flex mt="8" justify="flex-end">
              <Stack direction="row" spacing="4">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
                <Button colorScheme="pink" w="90px">Salvar</Button>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}