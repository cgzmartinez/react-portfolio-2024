import mockup from '../assets/gf-podcast-mockup.png'
const GoingForth = () => {
  return (
    <div className="grid grid-cols-1s md:mx-[150px] my-5 mx-10">
      <h1 className="font-thin font-serif text-2xl md:text-4xl mb-5 dark:text-[#a0c2a4]">
        <span className="font-bold text-[#5b6c5d] dark:text-[#a0c2a4]">
          going forth
        </span>{' '}
        Podcast App - Case Study
      </h1>
      <p className="font-light mb-5 dark:text-white/80">
        A podcast app exploration for Grinnell College's Center for Careers,
        Life, and Service.
      </p>
      <img src={mockup} alt="going forth podcast" />
    </div>
  )
}

export default GoingForth
