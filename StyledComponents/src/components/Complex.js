import styled from 'styled-components'
import React from 'react'

const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: papayawhip;
    color: palevioletred;
    text-decoration: none;
`

const Icon = styled.svg`
    transition: fill 0.25s;
    width: 48px;
    height: 48px;
    ${Link}:hover & {
    fill: rebeccapurple;
  }
`
const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }
`
function Complex(){
    return(
        <Link href="#">
            <Icon viewBox="0 0 20 20">
            <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"/>
            </Icon>
            <Label>Hovering my parent changes my style!</Label>
        </Link>
    )
}

export default Complex;