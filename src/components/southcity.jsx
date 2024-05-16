import SouthCity from '../assets/southcity.svg?react'

const Southcity = () => {
  return (
    <div className="grid grid-cols-1 md:mx-[150px] my-5 mx-10">
      <h1 className="font-thin font-serif text-2xl md:text-4xl mb-5 dark:text-[#a0c2a4]">
        <span className="font-bold text-[#5b6c5d] dark:text-[#a0c2a4]">
          South City Medical Center
        </span>{' '}
        - Case Study
      </h1>
      <p className="font-light mb-5 dark:text-white/80">
        Case study done for healthcare web design exploration.
      </p>
      <SouthCity
        className="w-full h-auto drop-shadow-lg"
        alt="south city medical center"
      />
    </div>
  )
}

export default Southcity
