import React from 'react'
import styled from 'styled-components'
import Markdown from './Markdown'
import InfoPost from './InfoPost'

const Container = styled.div`
  padding-top: ${(props) => props.theme.space * 2}px;
`
const Title = styled.h1``
const Labels = styled.div``
const Label = styled.div`
  border-radius:5px;
  background:${(props) => props.theme.color.primary};
  color:white;
  display:inline-block;
  padding:${(p) => p.theme.space / 2}px ${(p) => p.theme.space * 2}px;
  min-width:140px;
  text-align:center;
  margin-bottom: ${(props) => props.theme.space}px;
  margin-right: ${(props) => props.theme.space * 2}px;
  font-size:.8em;
`

const PostContent = ({ post }) => {
  return (
    <Container>
      <Labels>
        {
          post.categories.map((category) => <Label key={category.id}>{category.name}</Label>)
        }
      </Labels>
      <Title>{post.title}</Title>
      <InfoPost post={{
        date: post.created_at,
        author: post.author_name,
        likes: post.likes_number,
        avatar: null,
      }}
      />
      <Markdown text={decodeURIComponent(post.content)} />
    </Container>
  )
}

export default PostContent
