import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    background-color: lightcoral;
`

const Link  = styled.a`
    color: red;
`

const  Button = styled.button`
    border-radius: 4px;
`


export const HeaderNav = () => (
    <Header>
        <Link>sss</Link>

        <Button>hello</Button>
    </Header>
)
