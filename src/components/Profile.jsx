import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Button,
    Link, Icon
} from '@chakra-ui/react'
import { RiUser3Line } from 'react-icons/ri'
import { Link as RouterLink } from "react-router-dom"

const Profile = () => {
    return (
        <Flex>
            <Menu>
                <MenuButton as={Button}
                    rounded="full"
                    variant="link"
                    cursor="pointer"
                    minW={0}
                >
                    {/* <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /> */}
                    <Icon boxSize="20px" mx={6} as={RiUser3Line} color="black" />
                </MenuButton>

                <MenuList color={"black"} fontWeight="700">
                    <Link as={RouterLink} to="/collections/all">
                        <MenuItem>Products</MenuItem>
                    </Link>

                    <Link to="/orders" as={RouterLink}>
                        <MenuItem>Your Orders</MenuItem>
                    </Link>

                    <Link to="/login" as={RouterLink}>
                        <MenuItem>Login</MenuItem>
                    </Link>

                    <Link to="/signup" as={RouterLink}>
                        <MenuItem>Signup</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default Profile