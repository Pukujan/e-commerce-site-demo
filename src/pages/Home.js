import React from 'react'
import { useGetAllProductsQuery } from '../Features/storeApi'
import ViewProducts from '../components/ViewProducts'
import Search from '../components/Search'
import SearchResults from './SearchResults'

const Home = () => {
  const { isLoading, isError, error, data } = useGetAllProductsQuery()
  console.log(data)


  return (
    <div>
      <ViewProducts
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </div>
  )
}

export default Home