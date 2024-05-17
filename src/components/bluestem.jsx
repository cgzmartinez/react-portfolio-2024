import BlueStem from '../assets/bluestem.svg?react'

const Bluestem = () => {
  return (
    <div className="grid grid-cols-1 md:mx-[150px] my-5 mx-10">
      <h1 className="font-thin font-serif text-2xl md:text-4xl mb-5 dark:text-[#a0c2a4]">
        <span className="font-bold text-[#5b6c5d] dark:text-[#a0c2a4]">
          Bluestem Healthcare
        </span>{' '}
        - Case Study
      </h1>
      <p className="font-light mb-5 dark:text-white/80">
        Case study done for healthcare web design exploration.
      </p>
      <BlueStem
        className="w-full h-auto drop-shadow-lg"
        alt="bluestem healthcare"
      />
    </div>
  )
}

export default Bluestem
