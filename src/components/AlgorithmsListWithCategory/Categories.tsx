import React, { memo } from 'react'
import NextLink from 'next/link'
import { CompassCalibration, Layers } from '@mui/icons-material'

// List of Algorithms categories with their collection count.
const CATEGORIES = [
  {
    name: "All",
    slug: "/",
    icon: CompassCalibration,
    count: 0
  },
  {
    name: "Stack",
    slug: "/stack",
    icon: Layers,
    count: 24
  },
  {
    name: "Queue",
    slug: "/queue",
    icon: Layers,
    count: 2
  },
  {
    name: "Tree",
    slug: "/tree",
    icon: Layers,
    count: 0,
  },
  {
    name: "Linked List",
    slug: "/linked-list",
    icon: Layers,
    count: 0
  },
  {
    name: "Graph",
    slug: "/graph",
    icon: Layers,
    count: 0
  },
  {
    name: "Array",
    slug: "/array",
    icon: Layers,
    count: 0
  },
  {
    name: "Sorting",
    slug: "/sorting",
    icon: Layers,
    count: 0
  },
  {
    name: "Search",
    slug: "/search",
    icon: Layers,
    count: 0
  },
  {
    name: "Math",
    slug: "/math",
    icon: Layers,
    count: 0
  },
  {
    name: "Dynamic Programming",
    slug: "/dynamic-programming",
    icon: Layers,
    count: 0
  },
  {
    name: "ML",
    slug: "/ml",
    icon: Layers,
    count: 0
  },
  {
    name: "Miscellaneous",
    slug: "/miscellaneous",
    icon: Layers,
    count: 0
  },
]

const Categories = () => {
  return (
    <div className="col-start-2 col-end-5 row-start-2 row-end-3">
      {CATEGORIES.map((category) => (
        <NextLink
          key={category.slug}
          className="text-[oklab(0.321088_-0.000220731_-0.00934622)] no-underline"
          href={`/category${category.slug}`}
          passHref
        >
          <div className=" p-[11px_14px] flex items-center hover:bg-[#6a748029] active:bg-[#6a748029] rounded">
            {/* <div className={classes.catIcon}> */}
            {category.icon && <category.icon className="relative block w-5 h-5 me-[14px]" />}
            {/* </div> */}

            <div className="w-full flex justify-between items-center gap-3">
              <span className="text-sm">{category.name}</span>
              <span className="text-sm text-[#6a7480]">{category.count}</span>
            </div>
          </div>
        </NextLink>
      ))
      }
    </div >
  )
}

export default memo(Categories)
