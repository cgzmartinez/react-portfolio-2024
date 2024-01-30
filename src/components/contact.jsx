import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="grid gap-4 mx-10 md:p-10 md:px-[150px] md:grid-cols-1 md:items-center md:text-left">
        <div className="p-7 my-10 md:my-5 md:p-10 dark:bg-[#353535] dark:rounded-[25px]">
          <h1 className="float-start md:text-[60px] text-4xl font-serif font-bold pb-6 dark:text-[#a0c2a4]">
            Get In Touch
          </h1>
          <p className="text-base font-sans font-normal dark:text-white/60">
            Send me a message using the form or reach out on{' '}
            <a
              href="https://www.linkedin.com/in/carlos-g-martinez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
            </a>{' '}
            and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="dark:bg-[#353535] rounded-[25px] md:p-10 p-5 mb-10 mx-auto w-full">
            <form>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#5B6C5D] dark:text-[#a0c2a4]"
                >
                  Name
                </label>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Johnny"
                    className="w-full rounded-xl border placeholder-gray-300 dark:placeholder-gray-500 border-[#e0e0e0] py-3 px-6 text-base font-medium text-[#959595] dark:text-gray-300 outline-none focus:border-[#59C9A5] dark:bg-[#353535]"
                  />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Silverhand"
                    className="w-full rounded-xl border placeholder-gray-300 dark:placeholder-gray-500 border-gray-300 py-3 px-6 text-base font-medium text-[#959595] dark:text-gray-300 outline-none focus:border-[#59C9A5] dark:bg-[#353535]"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#5B6C5D] dark:text-[#a0c2a4]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@gmail.com"
                  className="w-full rounded-xl border placeholder-gray-300 dark:placeholder-gray-500 border-gray-300 py-3 px-6 text-base font-medium text-[#959595] dark:text-gray-300 outline-none focus:border-[#59C9A5] dark:bg-[#353535]"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-[#5B6C5D] dark:text-[#a0c2a4]"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="123-456-7890"
                  className="w-full rounded-xl border placeholder-gray-200 dark:placeholder-gray-500 border-gray-300 py-3 px-6 text-base font-medium text-[#959595] dark:text-gray-300 outline-none focus:border-[#59C9A5] dark:bg-[#353535]"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#5B6C5D] dark:text-[#a0c2a4]"
                >
                  Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  id="message"
                  placeholder="Write your message here"
                  className="w-full resize-none rounded-xl border placeholder-gray-300 dark:placeholder-gray-500 border-gray-300 py-3 px-6 text-base font-medium text-[#959595] dark:text-gray-300 outline-none focus:border-[#59C9A5] dark:bg-[#353535]"
                ></textarea>
              </div>
              <div className="">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="rounded-[5px] bg-[#59C9A5] font-serif font-bold p-1 px-2 text-lg text-white dark:text-[#353535] outline-none"
                >
                  {' '}
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
