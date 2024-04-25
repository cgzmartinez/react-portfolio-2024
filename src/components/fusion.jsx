import newsletter from '../assets/news.png'
import newsletter2 from '../assets/news2.png'

const Fusion = () => {
  return (
    <div className="grid grid-cols-1 md:mx-[150px] my-5 mx-10">
      <h1 className="font-thin font-serif text-2xl md:text-4xl mb-5 dark:text-[#a0c2a4]">
        <span className="font-bold text-[#5b6c5d] dark:text-[#a0c2a4]">
          Fusion Academy
        </span>{' '}
        Digital Newsletters
      </h1>
      <p className="font-light mb-5 dark:text-white/80">
        Web design oriented newsletter for Fusion Academy - Alpharetta Campus.
      </p>
      <div className="gap-10 grid-cols-2 grid">
        <img src={newsletter} alt="Fusion Newsletter" />
        <img src={newsletter2} alt="Meet the Teachers" />
      </div>
    </div>
  )
}

export default Fusion
