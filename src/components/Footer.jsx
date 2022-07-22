import { Flex, Text, HStack, Button, VStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    return (
        <Flex h={'160px'} bg={'#1a202c'} color={'white'} justify={'center'} mt={0.5}>
            <VStack>
                <Text my={'26px'}>Made with ❤️ by Chandrakant</Text>
                <HStack>
                    <Button variant={'solid'} bg={'#0863be'} size='sm' leftIcon={<FaLinkedin />}>
                        <Link _hover={{ 'textDecoration': 'none' }} target={"_blank"} href={"https://www.linkedin.com/in/chandrakant-joshi/"}>LinkedIn</Link>
                    </Button>
                    <Button _hover={{ 'bg': 'red.500' }} variant={'solid'} bg={'red'} size='sm' leftIcon={<FaGithub />}>
                        <Link _hover={{ 'textDecoration': 'none' }} target={"_blank"} href={"https://github.com/Chandrakant121"}>GitHub</Link>
                    </Button>
                </HStack>
            </VStack>
        </Flex>
    );
};
export default Footer

