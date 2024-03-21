import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react'
import { DiMongodb } from 'react-icons/di'
import { FaAngular, FaReact, FaNodeJs } from 'react-icons/fa6'
import {
  SiCucumber,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiHeroku,
  SiJest,
  SiNetlify,
  SiSvelte,
  SiTypescript,
  SiValorant,
  SiVercel,
} from 'react-icons/si'
import pawed from '../assets/pawed-project.png'
import keep from '../assets/keep.png'
import val from '../assets/valorant.png'
import flix from '../assets/flix.png'
import meet from '../assets/meet.png'
import chat from '../assets/chat-app.png'

const ProjectCards = () => {
  const cardItem = [
    {
      title: 'pawed',
      subtitle:
        'A booking application made with MERN, and deployed on Vercel. Think airbnb, but for pets.',
      image: [pawed],
      icon: (
        <div className="flex gap-2 items-center">
          <DiMongodb size={25} />
          <SiExpress size={25} />
          <FaReact size={25} />
          <FaNodeJs size={25} />
          <SiVercel size={22} />
        </div>
      ),
      date: 'March 11, 2024',
      link: 'https://pawed-app.vercel.app',
      tooltip: 'MERN Stack',
    },

    {
      title: 'Valorant React App',
      subtitle:
        'A React app that fetches and displays agent and weapon information from the "Valorant-API".',
      image: [val],
      icon: (
        <div className="flex gap-2">
          <FaReact size={25} />
          <SiValorant size={25} />
          <SiVercel size={22} />
        </div>
      ),
      date: 'Feb 27, 2024',
      link: 'https://valorant-app-react.vercel.app/',
      tooltip: 'React with Valorant API',
    },
    {
      title: 'Google Keep Clone',
      subtitle:
        'Another Google Keep Clone. Made using Svelte and Firebase, hosted on Netlify.',
      image: [keep],
      icon: (
        <div className="flex gap-2">
          <SiSvelte size={25} />
          <SiTypescript size={25} />
          <SiFirebase size={25} />
          <SiNetlify size={25} />
        </div>
      ),
      date: 'Jan 27, 2024',
      link: 'https://gkeep-svelte.netlify.app/',
      tooltip: 'Svelte with TypeScript and Firebase',
    },
    {
      title: 'myFlix Angular App',
      subtitle:
        'A movie application that uses CRUD. Made with TypeScript and Angular. ',
      image: [flix],
      icon: (
        <div className="flex gap-2">
          <FaAngular size={25} />
          <SiTypescript size={25} />
          <SiHeroku size={25} />
        </div>
      ),
      date: 'Nov 14, 2022',
      link: 'https://my-flix-demo.vercel.app/',
      tooltip: 'Angular with TypeScript',
    },
    {
      title: 'Meet App',
      subtitle:
        'A PWA (Progressive Web Application) made with React that uses a Calendar API to fetch upcoming events.',
      image: [meet],
      icon: (
        <div className="flex gap-2">
          <FaReact size={25} />
          <SiJest size={25} />
          <SiCucumber size={25} />
        </div>
      ),
      date: 'Nov 12, 2022',
      link: 'https://meet-app-demo.vercel.app/',
      tooltip: 'React with Testing',
    },
    {
      title: 'Chat App',
      subtitle:
        'A chat application for mobile devices made using React Native.',
      image: [chat],
      icon: (
        <div className="flex gap-2">
          <FaReact size={25} />
          <SiFirebase size={25} />
          <SiExpo size={25} />
        </div>
      ),
      date: 'Nov 2, 2022',
      link: 'https://github.com/cgzmartinez/chat-app',
      tooltip: 'React Native with Firebase',
    },
  ]

  return (
    <div className="max-w-[1640px] mx-auto grid md:grid-cols-2 md:px-10 gap-10 pb-10">
      {cardItem.map(
        ({ tooltip, title, subtitle, link, image, icon, date }, index) => {
          return (
            <div key={index} className="bounce hover:drop-shadow-xl relative">
              <a href={link} target="_blank" rel="noreferrer">
                <Card className="max-w-[40rem] max-h-[30rem] rounded-[25px] overflow-hidden bg-transparent">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                  >
                    <img
                      src={image}
                      alt="Project Image"
                      aria-label="Project Image"
                    />
                  </CardHeader>
                  <CardBody className="dark:bg-[#353535]">
                    <Typography
                      className="font-serif dark:text-white/80"
                      variant="h3"
                      color="blue-gray"
                    >
                      {title}{' '}
                    </Typography>
                    <Typography
                      className="mt-3 font-normal dark:text-white/60"
                      variant="lead"
                      color="gray"
                    >
                      {subtitle}{' '}
                    </Typography>
                  </CardBody>
                  <CardFooter className="flex items-center justify-between dark:bg-[#353535]">
                    <div className="flex items-center">
                      <Tooltip
                        position="top"
                        content={
                          <Typography
                            className="font-medium dark:text-white"
                            color="blue-gray"
                          >
                            {tooltip}
                          </Typography>
                        }
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                        className="border border-blue-gray-50 dark:border-[#505050] bg-white dark:bg-[#505050] px-3 py-2 shadow-xl shadow-black/10"
                      >
                        <i className="dark:text-white/50">{icon}</i>
                      </Tooltip>
                    </div>
                    <Typography className="font-normal dark:text-white/60">
                      {date}
                    </Typography>
                  </CardFooter>
                </Card>
              </a>
            </div>
          )
        }
      )}
    </div>
  )
}

export default ProjectCards
