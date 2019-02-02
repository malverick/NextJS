import Layout from '../components/MyLayout.js'
import {withRouter} from 'next/router'
import Markdown from 'react-markdown'

export default withRouter((props) => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        <div className="markdown">
            <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is the title

And here's the content.
            `}/>
        </div>
        <style jsx global>{`
            .markdown {
                font-family: 'Arial';
            }

            .markdown a {
                text-decoration: none;
                color: red;
            }

            .markdown a:hover {
                opacity: 0.6;
            }

            .markdown h3 {
                margin: 0;
                padding: 0;
                text-transform: uppercase;
            }
        `}</style>
    </Layout>
))

// import fetch from 'isomorphic-unfetch'

// const Post = (props) => (
//     <Layout>
//         <h1>{props.show.name}</h1>
//         <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//         <img src={props.show.image.medium}/>
//     </Layout>
// )

// Post.getInitialProps = async function (context) {
//     const { id } = context.query
//     const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//     const show = await res.json()

//     console.log(`Fetched show: ${show.name}`)

//     return { show }
// }

// export default Post

// const Content = withRouter((props) => (
//     <div>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the blog post content.</p>
//     </div>
// ))

// const Page = (props) => (
//     <Layout>
//         <Content />
//     </Layout>
// )

// export default Page