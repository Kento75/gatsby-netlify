import React from 'react';
import {graphql} from 'gatsby';

// components
import PrimaryLayout from '../layouts/PrimaryLayout';
import Posts from '../components/Posts';

export default ({data}) => {
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allWordpressPost.nodes.map (node => (
        <React.Fragment key={node.slug}>
          <Posts
            alt={node.featured_media.slug}
            image={node.featured_media.source_url}
            title={node.title}
            excerpt={node.excerpt}
            readMore={node.slug}
          />
        </React.Fragment>
      ))}
    </PrimaryLayout>
  );
};

export const query = graphql`
{
  allWordpressPost {
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
        slug
      }
    }
  }
}
`;
