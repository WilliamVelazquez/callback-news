import styled from 'styled-components'
import { useState } from 'react'
import fetch from 'node-fetch'
import PostItemList from '../components/PostItemList'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CategoryItemList from '../components/CategoryItemList'

const Title = styled.h1``

function HomePage({ categories, posts }) {
  const recentNews = posts ? [posts[0], posts[1], posts[2], posts[3], posts[4], posts[5]] : []
  const favoriteNews = posts ? [posts[6], posts[7], posts[8], posts[9], posts[10], posts[11]] : []
  const [title] = useState('Callback News - The daily technology newsletter')
  return (
    <Layout title={title}>
      <Hero />
      <Title>{title}</Title>
      <CategoryItemList data={categories} />
      <PostItemList title="Recent news" posts={recentNews} />
      <PostItemList title="Favorite news" posts={favoriteNews} />
    </Layout>
  )
}

export async function getServerSideProps({ query, res }) {

  try {
    const [resCategories, resPosts] = await Promise.all([
      fetch('https://storage.googleapis.com/cbn-public/mocks/data-json/categories.json'),
      fetch('https://storage.googleapis.com/cbn-public/mocks/data-json/news.json'),
    ])

    const categories = await resCategories.json()
    const posts = await resPosts.json()
    res.statusCode = 200
    return { props: { categories, posts, statusCode: res.statusCode } }

  } catch (error) {
    res.statusCode = 503
    return { props: { statusCode: res.statusCode } }
  }

}

export default HomePage
