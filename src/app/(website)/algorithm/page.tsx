import AlgorithmsListWithCategory from '@/components/AlgorithmsListWithCategory';
import PageHeader from '@/components/PageHeader';
import { getCategories } from '@/lib/categories';
import React from 'react';

/**
 * URL pattern:
 * - /algorithm
 * - /algorithm/page=<number>
 * - /algorithm/category=<category>
 * - /algorithm/language=<language>  // Python, C, C++, etc
 * - /algorithm/q=<search_query>
 *
 */

const AlgorithmPage = async () => {
  const categories = await getCategories();
  return (
    <>
      <PageHeader />
      <AlgorithmsListWithCategory categories={categories} />
    </>
  )
}

export default AlgorithmPage
