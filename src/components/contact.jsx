const Contact = () => {
  return (
    <div>
      <section className="grid gap-8 mx-20 md:grid-cols-2 md:pl-16 md:items-center md:text-left">
        <div className="py-10">
          <h1 className="float-start text-4xl text-[#59C9A5] font-serif font-bold pb-6">Get In Touch</h1>
          <p className="text-base font-sans font-normal">Send me a message using the form or reach out on <a href="https://www.linkedin.com/in/carlos-g-martinez/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a> and I’ll get back to you as soon as possible.</p>
          <div className="hidden md:block bg-[#59C9A5] rounded-xl py-20 px-20 my-20" />

        </div>


        <div className="flex items-center justify-center md:p-20">
          <div className="mx-auto w-full max-w-[550px]">
            <form>
              <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#5B6C5D]">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Johnny Silverhand"
                  className="w-full rounded-xl border placeholder-gray-200 border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#959595] outline-none focus:border-[#59C9A5]"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#5B6C5D]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@gmail.com"
                  className="w-full rounded-xl border placeholder-gray-200 border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#959595] outline-none focus:border-[#59C9A5]"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-[#5B6C5D]"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="123-456-7890"
                  className="w-full rounded-xl border placeholder-gray-200 border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#959595] outline-none focus:border-[#59C9A5]"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#5B6C5D]"
                >
                  Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  id="message"
                  placeholder="Write your message here"
                  className="w-full resize-none rounded-xl border placeholder-gray-200 border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#959595] outline-none focus:border-[#59C9A5]"
                ></textarea>
              </div>
              <div className="pb-10">
                <button
                  className="hover:shadow-form rounded-xl bg-[#59C9A5] py-3 px-8 text-base font-semibold text-white outline-none"
                > Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact