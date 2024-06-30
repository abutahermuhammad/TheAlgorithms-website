// "use client"
import React, { memo } from 'react'
import Container from '../ui/container'
import Categories from './Categories'
import SearchBox from './SearchBox'
import AlgorithmList from './Algorithms'
import { getAlgorithm } from '@/lib/algorithms'
import { Algorithm } from '@/lib/models'
import ALGORITHM_CATEGORIES from './../../../public/data/new/categories.json'

const getData = async () => {
  const data = await getAlgorithm("binary-search", true)

  return data
}

const AlgorithmsListWithCategory = async ({ categories }: { categories: string[] }) => {
  const binarySearch = await getData() as Algorithm;

  return (
    <section className="w-full">
      <Container className="pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <SearchBox />

        <Categories categories={[...ALGORITHM_CATEGORIES.categories]} />

        <AlgorithmList algorithms={[binarySearch]} />
      </Container>
    </section>
  )
}

export default memo(AlgorithmsListWithCategory)
