import React from 'react';
import '../../wrapper.scss'
import { useCustomProductList } from '../../hooks/untils';


const Home = (props) => {

  const [isLoading, productList, error] = useCustomProductList()


  return (
    <>
      <main className='main'>
        Home

      </main>
    </>
  )

}
export default Home;