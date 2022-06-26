import React from 'react'
import { Flex, Spacer, Image, Text, Icon } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BsSearch, BsCart2 } from 'react-icons/bs'
import { RiUser3Line } from 'react-icons/ri'

export default function Navbar() {
    return (
        <Flex
            bg="white"
            border="0.5px solid white"
        > <Spacer />
            <Image src='https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_288x46.png?v=1647508945' alt='Dan Abramov'
                height="20px"
                margin="20px"
                fit="contain"
            />
            <Spacer />
            <Link to="/collections/all">
                <Text padding="5px" margin="10px" fontWeight="700" color="black">SHOP</Text>
            </Link>

            <Link to="/collections/all">
                <Text padding="5px" margin="10px" fontWeight="700" color="black"> WOMEN</Text>
            </Link>

            <Link to="/collections/all">
                <Text padding="5px" margin="10px" fontWeight="700" color="black">MEN</Text>
            </Link>
            <Link to="/collections/all">
                <Text padding="5px" margin="10px" fontWeight="700" color="black" >NEW ARRIVALS</Text>
            </Link>
            <Link to="/collections/all">
                <Text padding="5px" margin="10px" fontWeight="700" color="black" >ABOUT</Text>
            </Link>
            <Link to="/collections/all">
                <Text padding="5px" margin="10px" fontWeight="700" color="black" >HELP</Text>
            </Link>
            <Spacer />
            <Icon padding="5px" margin="10px" height="20px" as={BsSearch} />
            <Icon padding="5px" margin="10px" height="20px" as={RiUser3Line} />
            <Icon padding="5px" margin="10px" height="20px" as={BsCart2} />
            <Text>0</Text>
            <Spacer />
        </Flex >
    )
}
