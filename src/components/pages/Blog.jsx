import React from 'react';
import { BlogHero, PageBanner } from '../layout/helper';

const Blog = () => {

   return (
      <React.Fragment>
         <PageBanner imgSrc={BlogHero} title="Blog" />
      </React.Fragment>
   );
};

export default Blog;