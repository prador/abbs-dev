const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function postData() {
    const content = [{contentType:'blog',loc:'content/blogPosts'}]

    // Object.entries(content).forEach(entry => {
    //     const [contentType, loc] = entry;
    //     const postsDirectory = path.join(process.cwd(), entry.loc)
    //     const fileNames = fs.readdirSync(postsDirectory)
    //     const posts = fileNames.map(fileName => {
    //         const type = entry.contentType
    //         const id = fileName.replace(/\.md$/, '')
    //         const fullPath = path.join(postsDirectory, fileName)
    //         const fileContents = fs.readFileSync(fullPath, 'utf8')
    //         const matterResult = matter(fileContents)
    //         return {
    //             type,
    //         id,
    //         title: matterResult.data.title
    //         }
    //     })
    //   });
  const postsDirectory = path.join(process.cwd(), 'content/blogPosts')
  const fileNames = [...fs.readdirSync(postsDirectory)]
  const posts = fileNames.map(fileName => {
    const type = "blog"
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
        type:matterResult.data.type,
      id,
      title: matterResult.data.title
    }
  })
  return `export const posts = ${JSON.stringify(posts)}`
}

try {
  fs.readdirSync('cache')
} catch (e) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/data.js', postData(), function (err) {
  if (err) return // console.log(err);
  // console.log('Posts cached.');
})