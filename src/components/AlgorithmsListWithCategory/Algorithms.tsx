import React from 'react'
import Image from 'next/image'
import { Algorithm } from '@/lib/models'
import Link from 'next/link'
import { normalize } from 'path'
import Implementations from '../implementations'


const AlgorithmCard = (props: Algorithm) => {
  return (
    <Link href={`/algorithm/${props.slug}`} className="relative block no-underline text-inherit w-full px-5 pt-4 pb-5 mb-5 bg-[#f5f5f5] hover:bg-[#6a748029] rounded-lg ease-linear duration-200">
      <div className="relative w-full flex flex-col">
        <div className="w-full mb-2">
          {props.categories.map((category) => (
            <Link
              className="text-[#1A1A1A] font-medium text-xs capitalize no-underline" href={`/category/${normalize(category)}`} key={category}>
              {category}
            </Link>
          ))}
        </div>
        <div className='w-full flex items-center mb-2'>
          <Image className='me-2' src={"/logo_t.svg"} alt="logo" width={24} height={24} />
          <h3 className=" font-medium">{props.name}</h3>
        </div>

        <p className="relative text-sm text-[#565d64] mb-3">The official server for Midjourney, a text-to-image AI where your imagination is the only limit.</p>


        {/* Metadata */}
        <div className="relative w-full flex items-center gap-4 mb-3">
          {/* <div className='relative h-5 w-5 flex items-center justify-center gap-1.5'>
            <Star className='relative text-[16px]' />
            <span className="text-xs">4.8</span>
          </div> */}
        </div>

        {/* Languages */}
        <div className="w-full flex items-center gap-3">
          <Implementations implementations={props.implementations} />
        </div>

      </div>
    </Link >
  )
}

const AlgorithmList = ({
  algorithms
}: {
  algorithms: Algorithm[]
}) => {
  console.log("ALGORITHMS", algorithms)

  return (
    <section className="col-start-5 col-end-12 row-start-2 row-end-3">
      <p className="font-medium mb-5">36665 Results Found</p>

      <div>
        <AlgorithmCard {...algorithms[0]} />
        <AlgorithmCard {...algorithms[0]} />
        <AlgorithmCard {...algorithms[0]} />
        <AlgorithmCard {...algorithms[0]} />
        <AlgorithmCard {...algorithms[0]} />
        <AlgorithmCard {...algorithms[0]} />
      </div >
    </section>
  )
}

export default AlgorithmList
