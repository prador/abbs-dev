// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import remark from 'remark'
// import html from 'remark-html'

// const DocsDirectory = path.join(process.cwd(), 'content/docs')

// export function getSortedDocsData() {
//   // Get file names under /Docs
//   const fileNames = fs.readdirSync(DocsDirectory)
//   const allDocData = fileNames.map(fileName => {
//     // Remove ".md" from file name to get id
//     const type= "documents"
//     const id = fileName.replace(/\.md$/, '')

//     // Read markdown file as string
//     const fullPath = path.join(DocsDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the Nog metadata section
//     const matterResult = matter(fileContents)

//     // Combine the data with the id
//     return {
//         type,
//       id,
//       ...matterResult.data
//     }
//   })
//   // Sort Docs by date
//   return allDocsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// }

// export function getAllNogIds() {
//   const fileNames = fs.readdirSync(DocsDirectory)
//   return fileNames.map(fileName => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, '')
//       }
//     }
//   })
// }

// export async function getNogData(id) {
//   const fullPath = path.join(DocsDirectory, `${id}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')

//   // Use gray-matter to parse the Nog metadata section
//   const matterResult = matter(fileContents)

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content)
//   const contentHtml = processedContent.toString()

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data
//   }
// }