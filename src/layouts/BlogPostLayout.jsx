import React from 'react';
import {graphql} from 'gatsby';
import innertext from 'innertext';

import Header from '../components/Header';
import Footer from '../components/Footer';

// SEO
import SEO from '../components/SEO';

const BlogPostLayout = ({data}) => {
  // 記事詳細取得
  const post = data.wordpressPost;

  return (
    <div>
      <SEO
        title={innertext (post.title)}
        description={innertext (post.excerpt)}
        image={post.featured_media.source_url}
        keywords={post.categories.map (res => res.name).join (', ')}
      />
      <Header title="Header of index page" />
      <div className="container">
        <div className="row justify-content-md-center">
          <h1 dangerouslySetInnerHTML={{__html: post.title}} />
          <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostLayout;

export const query = graphql`
query($slug: String!) {
  wordpressPost(slug:{eq: $slug}) {
    content
    title
    featured_media {
      source_url
    }
    categories {
      name
    }
    excerpt
  }
}
`;
