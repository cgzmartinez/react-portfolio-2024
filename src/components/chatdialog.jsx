import { Dialog, Carousel } from '@material-tailwind/react'

import Chat from '../assets/chat-app.png'
import ChatOne from '../assets/chat1.png'
import ChatTwo from '../assets/chat2.png'
import ChatThree from '../assets/chat3.png'

const ChatDialog = ({ onClose }) => {
  // Destructure relevant data from cardData prop
  const chatPics = [
    {
      image: [Chat],
    },
    {
      image: [ChatOne],
    },
    {
      image: [ChatTwo],
    },
    {
      image: [ChatThree],
    },
  ]

  return (
    <Dialog className="rounded-2xl" size="sm" open={true} handler={onClose}>
      <Carousel className="rounded-t-2xl">
        {chatPics.map(({ image }, index) => {
          return (
            <div className="relative">
              <div class="absolute inset-0 bg-gray-900/20"></div>
              <img
                key={index}
                src={image}
                alt="image"
                className="w-[550px] max-h-[20rem] object-cover overflow-"
              />
            </div>
          )
        })}
      </Carousel>
      <div className="flex items-center justify-between">
        <div className="group relative">
          <p className="cursor-pointer font-bold p-5">Summary</p>
          <p className="absolute top-[50px] scale-0 transition-all rounded bg-gray-200 p-2 text-xs font-bold text-gray-600 group-hover:scale-100">
            <span className="text-black font-bold">Chat App</span> lets you
            choose color themes and send messages, locations, and images.
          </p>
        </div>

        <a
          href="https://github.com/cgzmartinez/chat-app"
          rel="noreferrer"
          target="_blank"
        >
          <p className="p-5 hover:font-bold duration-100">Github Repo</p>
        </a>
        <button onClick={onClose} className="p-5 hover:font-bold duration-100">
          Close
        </button>
      </div>
    </Dialog>
  )
}

export default ChatDialog
