import React from 'react';


import { useCustomProductList } from '../../hooks/untils';


const Home = (props) => {

  const [isLoading, productList, error] = useCustomProductList()


  return (
    <>
      <section className='home'>
        Home

      </section>
    </>
  )

}
export default Home;