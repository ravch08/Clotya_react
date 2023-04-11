import React from 'react';
import { LatestNews, Chanel, Collections, BannerCollection, Clients, Products, NewCollections, Newsletter, Banner } from "../layout/helper";

const Home = () => {
   return (
      <main>
         <Banner />
         <Products num1='0' num2='6' items="4" />
         <NewCollections />
         <Chanel />
         <Clients />
         <Collections />
         <Products num1='6' num2='12' items="3" />
         <BannerCollection />
         <LatestNews />
         <Newsletter />
      </main>
   );
};

export default Home;