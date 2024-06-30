import React, { memo } from 'react'
import NextLink from 'next/link'
import { CompassCalibration, Layers } from '@mui/icons-material'
import Image from 'next/image'


export type TCategories = {
  id: number | string
  name: string
  slug: string
  icon: string
  description?: string
  count?: number
}

const Categories = ({ categories }: { categories: TCategories[] }) => {
// console.log("CATEGORIES", categories)
  return (
    <div className="col-start-2 col-end-5 row-start-2 row-end-3">
      {categories.map((category) => (
        <NextLink
          key={category.id}
          className="text-[oklab(0.321088_-0.000220731_-0.00934622)] no-underline"
          href={`/category${category.slug}`}
          passHref
        >
          <div className=" p-[11px_14px] flex items-center hover:bg-[#6a748029] active:bg-[#6a748029] rounded">
            {/* <div className={classes.catIcon}> */}
            {category.icon && <Image
              className="relative block w-5 h-5 me-[14px]"
              src={category.icon}
              alt={category.name}
              width={20}
              height={20}
            />}
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
