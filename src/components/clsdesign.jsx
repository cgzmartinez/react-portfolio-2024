import grant from '../assets/professional_grantsa.png'
import banner from '../assets/webbanner.png'
const ClsDesign = () => {
  return (
    <div className="grid grid-cols-1s md:mx-[150px] my-5 mx-10">
      <h1 className="font-thin font-serif text-2xl md:text-4xl mb-5 dark:text-[#a0c2a4]">
        <span className="font-bold text-[#5b6c5d] dark:text-[#a0c2a4]">
          CLS
        </span>{' '}
        Web Design - Banners
      </h1>
      <p className="font-light mb-5 dark:text-white/80">
        Web design oriented banners for the Grinnell College's Career Center
        website.
      </p>
      <div className="gap-10 grid-cols-1 grid">
        <img src={grant} alt="professional grants" />
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default ClsDesign
