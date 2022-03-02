import { getSortedPostsData } from '../../lib/posts'
// import { getSortedNogsData } from '../../lib/nogs'

const posts = process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getSortedPostsData()
// const nogs = process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getSortedNogsData()
// Array.prototype.push.apply(posts,nogs);

export default (req, res) => {
  const allPosts  = [...posts]
  const results = req.query.q ?
  allPosts.filter(post => post.title.toLowerCase().includes(req.query.q)) : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}