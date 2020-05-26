import React, { useState } from 'react'
import { parse, format } from 'date-fns'
import styled from 'styled-components'

import Heart from './Heart'
import Avatar from './Avatar'

import useWidth from '../hooks/useWidth'

const Info = styled.div`
  display:grid;
  width:100%;
  grid-template-columns:40px 1fr 20px;
  grid-gap:${(props) => props.theme.space}px;
  ${(props) => props.width > 600 && `
    padding:${props.theme.space * 0.5}px ${props.theme.space}px;
    margin-bottom:${props.theme.space * 2}px;
    display:flex;
  `}
`
const Meta = styled.div`
  grid-column-start:2;
  font-size:.7em;
  margin-right:${(props) => props.theme.space}px;
  & span {
    margin-right:${(props) => props.theme.space * 3}px;
  }
`
const Author = styled.p`
  font-size:1.3rem;
  margin:0;
  padding:0;
`
const LikeContainer = styled.div``
const Likes = styled.div`
  font-family:${(props) => props.theme.fontFamilyTitle};
  font-size:10px;
  text-align:center;
`

const InfoPost = ({ post }) => {
  const { date, author, likes, avatar } = post
  const { containerRef, width } = useWidth()
  const [isLiked, setIsLiked] = useState(false)
  const handleLike = (event) => {
    setIsLiked(!isLiked)
  }
  // Fri, 08 May 2020 10:05:49 GMT
  // const date = parse(post.pubDate, 'EEE, dd MMM yyyy HH:mm:ss', new Date())
  return (
    <Info ref={containerRef} width={width}>
      <Avatar src={avatar} withBorder />
      <Meta>
        <Author>{author}</Author>
        {/* <span>20 min read</span> */}
        <span>
          Posted:
          {' '}
          {date}
        </span>
      </Meta>
      <LikeContainer>
        <Heart onClick={handleLike} isLiked={isLiked} />
        <Likes>{likes + isLiked}</Likes>
      </LikeContainer>
    </Info>
  )
}

export default InfoPost
