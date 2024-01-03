const Footer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10 m-10 md:p-20 md:pl-20">

        <div className="md:text-left pl-10 md:pt-6 md:pl-6">
          <h1 className="font-serif font-bold text-lg md:text-xl">Find me here</h1>
          <ul className="font-serif font-medium text-sm md:text-lg pt-10">
            <li><a href="https://github.com/cgzmartinez" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/carlos-g-martinez/" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li><a href="https://medium.com/@cgzmarti" target="_blank" rel="noreferrer">Medium</a></li>
            <li><a href="https://www.upwork.com/freelancers/~0181d2b492c6b37a9e" target="_blank" rel="noreferrer">Upwork</a></li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <p className="text-xs">Designed and built by <span>Carlos Martinez</span></p>
      </div>
    </div>
  )
}

export default Footer