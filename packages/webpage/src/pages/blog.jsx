import React, {lazy, Suspense} from 'react';
import {importMDX} from 'mdx.macro';

const Content = lazy(() => importMDX('./../../blog/post1.mdx'))

const Blog = (props) => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  </div>
);

export default Blog;