import BlueStem from '../assets/bluestem.svg?react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { SlArrowUpCircle } from 'react-icons/sl'

const Bluestem = () => {
  return (
    <div className="grid grid-cols-1 md:mx-[150px] my-5 mx-10">
      <h1 className="mb-5 font-thin font-serif text-2xl md:text-4xl dark:text-[#a0c2a4]">
        <span className="font-bold text-[#5b6c5d] dark:text-[#a0c2a4]">
          Bluestem Healthcare
        </span>{' '}
        - Case Study
      </h1>
      <p className="pb-5 font-light dark:text-white/80">
        This case study showcases the web design of a Chicago hospital chain
        that focuses on personalized care, and an emphasis on longterm wellness.
        The focus was on creating a user-friendly and informative experience for
        patients and visitors. The design prioritized clear navigation,
        convenient access appointment and patient portals call to actions, and
        healthcare-related contents for website vistors.
      </p>

      <p className="font-light dark:text-white/80">
        Overall, this project demonstrates an understanding of the unique needs
        of healthcare web design, emphasizing accessibility, clarity, and a
        welcoming user experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5">
        <div>
          <h1 className="text-2xl md:text-3xl my-5 dark:text-[#a0c2a4]">
            Typography
          </h1>
          <p className="font-light dark:text-white/80">
            <span className="font-bold text-[#5b6c5d] dark:text-[#a0c2a4]">
              Helvetica Neue
            </span>{' '}
            was chosen as the primary font due to its clean lines and simple
            efficiency, while also having a modern appearance.{' '}
          </p>
          <p className="font-light dark:text-white/80 mt-5">
            Simple and efficient visual language is important in healthcare in
            order for patients and potential visitors to quickly find what they
            need on the website.
          </p>
        </div>
        <div>
          <h1 className="text-2xl mb-5 dark:text-[#a0c2a4]">Colors</h1>
          <div className="flex items-center justify-start gap-3">
            <div class="relative flex flex-col items-center group">
              <div className="w-[50px] h-[50px] rounded-lg bg-[#3B4F77]" />
              <div class="absolute top-[55px] flex-col items-center hidden mb-5 group-hover:flex">
                <p class="relative rounded-md z-20 p-2 text-xs leading-none text-white dark:text-black whitespace-no-wrap bg-black/70 dark:bg-white shadow-lg">
                  3B4F77
                </p>
              </div>
            </div>
            <div class="relative flex flex-col items-center group">
              <div className="w-[50px] h-[50px] rounded-lg bg-[#6DC0D5]" />
              <div class="absolute top-[55px] flex-col items-center hidden mb-5 group-hover:flex">
                <p class="relative rounded-md z-20 p-2 text-xs leading-none text-white dark:text-black whitespace-no-wrap bg-black/70 dark:bg-white shadow-lg">
                  #6DC0D5
                </p>
              </div>
            </div>
            <div class="relative flex flex-col items-center group">
              <div className="w-[50px] h-[50px] rounded-lg bg-[#D9D9D9]" />
              <div class="absolute top-[55px] flex-col items-center hidden mb-5 group-hover:flex">
                <p class="relative rounded-md z-20 p-2 text-xs leading-none text-white dark:text-black whitespace-no-wrap bg-black/70 dark:bg-white shadow-lg">
                  #D9D9D9
                </p>
              </div>
            </div>
            <div class="relative flex flex-col items-center group">
              <div className="w-[50px] h-[50px] rounded-lg bg-white outline outline-2 outline-[#000000]/20" />
              <div class="absolute top-[55px] flex-col items-center hidden mb-5 group-hover:flex">
                <p class="relative rounded-md z-20 p-2 text-xs leading-none text-white dark:text-black whitespace-no-wrap bg-black/70 dark:bg-white shadow-lg">
                  White
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-5 dark:text-[#a0c2a4]">Icons</h1>
          <div className="flex items-center justify-start gap-3">
            <FaMagnifyingGlass className="w-auto h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
            <FaArrowUpRightFromSquare className="w-auto h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
            <SlArrowUpCircle className="w-auto h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
          </div>
        </div>
      </div>
      <BlueStem
        className="w-full h-auto drop-shadow-lg"
        alt="bluestem healthcare"
      />
    </div>
  )
}

export default Bluestem
