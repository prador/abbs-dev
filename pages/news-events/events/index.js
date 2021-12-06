// import Link from 'next/link'
import Layout from '../../../components/layout'
// import PageHeader from '../../../components/PageHeader'
// import PageBanner from '../../../components/PageBanner'
// import PageContent from '../../../components/PageContent'
// import { attributes, html } from '../../../content/pages/news-events/events/index.md'

// const Events = () => (
//   <Layout>
//   <PageHeader attributes={attributes} />
//   <PageBanner att={attributes}/>
//   <PageContent att={attributes} html={html}/>
// </Layout>
// )

// export default Events
const Research = ({ programList }) => (
  <Layout>
    {/* <PageHeader attributes={attributes} />
    <h1 className="black-txt">{attributes.title}</h1>
    <div className="black-txt" dangerouslySetInnerHTML={{ __html: html }} />
    {programList.map((post) => (
      <div key={post.slug} className="post">
        <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
          <a>
            <img src={post.attributes.thumbnail} />
            <h2>{post.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))} */}
    <style jsx>{`
      .post {
        text-align: center;
      }
      img {
        max-width: 100%;
        max-height: 300px;
      }
    `}</style>
  </Layout>
)

// export async function getStaticProps() {
//   const programList = await importPrograms()

//   return {
//     props: {
//       programList,
//     }, // will be passed to the page component as props
//   }
// }

export default Research