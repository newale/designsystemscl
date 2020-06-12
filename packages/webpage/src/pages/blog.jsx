import React, {lazy, Suspense} from 'react';
import {Layout} from '@dscl/components';
import {importMDX} from 'mdx.macro';

const Content = lazy(() => importMDX('./../../blog/post1.mdx'))

const Blog = (props) => (
  <Layout>
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  </Layout>
  
);

export default Blog;