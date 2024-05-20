import SouthCity from '../assets/southcity.svg?react'
import { FaClipboardCheck } from 'react-icons/fa6'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { FaCalendarPlus } from 'react-icons/fa6'
import { FaVideo } from 'react-icons/fa6'
import { FaUserDoctor } from 'react-icons/fa6'
import { FaCreditCard } from 'react-icons/fa6'
import { FaRegComments } from 'react-icons/fa6'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const Southcity = () => {
  return (
    <div className="grid grid-cols-1 md:mx-[150px] my-5 mx-10">
      <h1 className="mb-5 font-thin font-serif text-2xl md:text-4xl  dark:text-[#a0c2a4]">
        <span className="font-bold text-[#5b6c5d] dark:text-[#a0c2a4]">
          South City Medical Center
        </span>{' '}
        - Case Study
      </h1>
      <p className="pb-5 font-light dark:text-white/80">
        This case study showcases the web design of a local Atlanta medical
        center. The focus was on creating a user-friendly and informative
        experience for both the general public in the Atlanta Metroplolitan
        Area. The design prioritized clear navigation, easy access to
        appointment booking, and engaging content for website vistors.
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
              Roboto
            </span>{' '}
            was chosen as the primary font due to its legibility in UI design.{' '}
          </p>
          <p className="font-light dark:text-white/80 mt-5">
            Legibility is important in healthcare in order for patients and
            potential visitors to quickly find what they need on the website.
          </p>
          <p className="font-light dark:text-white/80">
            <span className="font-bold text-[#5b6c5d] dark:text-[#a0c2a4]">
              Roboto Slab
            </span>{' '}
            was chosen as an alternate font in order to provide variety in the
            medical center’s visual language, while maintain legibility.{' '}
          </p>
        </div>
        <div>
          <h1 className="text-2xl mb-5 dark:text-[#a0c2a4]">Colors</h1>
          <div className="flex items-center justify-start gap-3">
            <div class="relative flex flex-col items-center group">
              <div className="w-[50px] h-[50px] rounded-lg bg-black dark:outline dark:outline-2 dark:outline-white/30 tooltip" />
              <div class="absolute top-[55px] flex-col items-center hidden mb-5 group-hover:flex">
                <p class="relative rounded-md z-20 p-2 text-xs leading-none text-white dark:text-black whitespace-no-wrap bg-black/70 dark:bg-white shadow-lg">
                  Black
                </p>
              </div>
            </div>
            <div class="relative flex flex-col items-center group">
              <div className="w-[50px] h-[50px] rounded-lg bg-[#DA627D]" />
              <div class="absolute top-[55px] flex-col items-center hidden mb-5 group-hover:flex">
                <p class="relative rounded-md z-20 p-2 text-xs leading-none text-white dark:text-black whitespace-no-wrap bg-black/70 dark:bg-white shadow-lg">
                  #DA627D
                </p>
              </div>
            </div>
            <div class="relative flex flex-col items-center group">
              <div className="w-[50px] h-[50px] rounded-lg bg-[#EEEEEE] outline outline-2 outline-[#000000]/20" />
              <div class="absolute top-[55px] flex-col items-center hidden mb-5 group-hover:flex">
                <p class="relative rounded-md z-20 p-2 text-xs leading-none text-white dark:text-black whitespace-no-wrap bg-black/70 dark:bg-white shadow-lg">
                  #EEEEEE
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
          <div className="flex items-center justify-start gap-3 md:grid md:grid-cols-4 md:gap-y-5">
            <FaClipboardCheck className="w-auto h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
            <FaMagnifyingGlass className="w-auto h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
            <FaCalendarPlus className="w-auto h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
            <FaVideo className="w-10 h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
            <FaUserDoctor className="w-10 h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
            <FaCreditCard className="w-10 h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
            <FaRegComments className="w-10 h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
            <FaArrowUpRightFromSquare className="w-10 h-10 fill-[#000000]/40 dark:fill-[#a0c2a4]" />
          </div>
        </div>
      </div>
      <SouthCity
        className="w-full h-auto drop-shadow-lg"
        alt="south city medical center"
      />
    </div>
  )
}

export default Southcity
