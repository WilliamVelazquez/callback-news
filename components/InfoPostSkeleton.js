import React from 'react'
import styled from 'styled-components'

import Avatar from './CircleSkeleton'
import Heart from './HeartSkeleton'

import useWidth from '../hooks/useWidth'
import SkeletonParagraph from './SkeletonParagraph'

const CustomHeart = styled(Heart)`
  padding-top:${(props) => props.theme.space}px;
`

const Info = styled.div`
  display:grid;
  width:100%;
  grid-template-columns:40px 1fr 20px;
  grid-gap:${(props) => props.theme.space}px;
  padding:${(props) => props.theme.space * 0.5}px ${(props) => props.theme.space}px;
  ${(props) => props.width > 600 && `
    padding:${props.theme.space * 0.5}px ${props.theme.space}px;
    margin-bottom:${props.theme.space * 2}px;
    display:flex;
  `}
`
const Meta = styled(SkeletonParagraph)`
  grid-column-start:2;
  font-size:.7em;
  margin-right:${(props) => props.theme.space}px;
  & span {
    margin-right:${(props) => props.theme.space * 3}px;
  }
`

const LikeContainer = styled.div``
const Likes = styled.div`
  font-family:${(props) => props.theme.fontFamilyTitle};
  font-size:10px;
  text-align:center;
`

const InfoPost = ({ className }) => {
  const { containerRef, width } = useWidth()
  return (
    <Info className={className} ref={containerRef} width={width}>
      <Avatar />
      <Meta lines={1} />
      <LikeContainer>
        <CustomHeart />
        <Likes />
      </LikeContainer>
    </Info>
  )
}

export default InfoPost
