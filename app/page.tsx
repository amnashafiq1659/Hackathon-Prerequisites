import React from 'react';

import Header from '@/components/header';
import NavBar from '@/components/navBar';
import Home from '@/components/home';
import Sale from '@/components/sale';
import Category from '@/components/category';
import Products from '@/components/products';
import Explore from '@/components/explore';
import Arrival from '@/components/arrival';
import Footer from '@/components/footer';

const Page = () => {
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <Home></Home>
      <Sale></Sale>
      <Category></Category>
      <Products></Products>
      <Explore></Explore>
      <Arrival></Arrival>
      <Footer></Footer>
    </div>
  );
}

export default Page;
