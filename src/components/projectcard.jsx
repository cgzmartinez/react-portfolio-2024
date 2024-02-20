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
  SiJest,
  SiSvelte,
  SiTypescript,
  SiValorant,
} from 'react-icons/si'

const ProjectCards = () => {
  const cardItem = [
    {
      title: 'pawed',
      subtitle:
        'A booking application made with blank and blank. Think airbnb, but for pets.',
      image:
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: (
        <div className="flex">
          <DiMongodb className="mr-2" size={25} />
          <SiExpress className="mr-2" size={25} />
          <FaReact className="mr-2" size={25} />
          <FaNodeJs size={25} />
        </div>
      ),
      date: 'Jan 16, 2024',
      tooltip: 'MERN Stack',
    },
    {
      title: 'Google Keep Clone',
      subtitle: 'Another Google Keep Clone. Made using Svelte and Firebase.',
      image:
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: (
        <div className="flex">
          <SiSvelte className="mr-2" size={25} />
          <SiTypescript className="mr-2" size={25} />
          <SiFirebase size={25} />
        </div>
      ),
      date: 'Jan 27, 2024',
      link: "https://gkeep-svelte.netlify.app/",
      tooltip: 'Svelte with TypeScript and Firebase',
    },
    {
      title: 'Valorant React App',
      subtitle:
        'A React app that fetches and displays agent and weapon information from the "Valorant-API"',
      image:
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: (
        <div className="flex">
        <FaReact className="mr-2" size={25} />
        <SiValorant size={25} />
      </div>
      ),
      date: 'Jan 14, 2024',
      tooltip: 'React with Valorant API',
    },
    {
      title: 'myFlix Angular App',
      subtitle: 'A movie application made with Angular that uses CRUD.',
      image:
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: (
        <div className="flex">
          <FaAngular className="mr-2" size={25} />
          <SiTypescript className="p-[2px]" size={25} />
        </div>
      ),
      date: 'Nov 14, 2022',
      link: 'https://cgzmartinez.github.io/myFlix-Angular-Client/welcome',
      tooltip: 'Angular with TypeScript',
    },
    {
      title: 'Meet App',
      subtitle:
        'A PWA (Progressive Web Application) made with React that uses a Calendar API to fetch upcoming events.',
      image:
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: (
        <div className="flex">
          <FaReact className="mr-2" size={25} />
          <SiJest className="p-[1px] mr-2" size={25} />
          <SiCucumber className="p-[1px]" size={25} />
        </div>
      ),
      date: 'Nov 12, 2022',
      link: 'https://cgzmartinez.github.io/meet',
      tooltip: 'React with Testing',
    },
    {
      title: 'Chat App',
      subtitle:
        'A chat application for mobile devices made using React Native.',
      image:
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: (
        <div className="flex">
          <FaReact className="mr-2" size={25} />
          <SiFirebase className="mr-2" size={25} />
          <SiExpo size={25} />
        </div>
      ),
      date: 'Nov 2, 2022',
      link: 'https://github.com/cgzmartinez/chat-app',
      tooltip: 'React Native with Firebase',
    },
  ]

  return (
    <div className="max-w-[1640px] mx-auto grid md:grid-cols-2 gap-10 pb-10 md:px-20">
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
                            {tooltip}{' '}
                          </Typography>
                        }
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                        className="border border-blue-gray-50 dark:border-[#505050] bg-white dark:bg-[#505050] px-3 py-2 shadow-xl shadow-black/10"
                      >
                        <i className='dark:text-white/50'>{icon}</i>
                      </Tooltip>
                    </div>
                    <Typography className="font-normal dark:text-white/60">
                      {date}{' '}
                    </Typography>
                  </CardFooter>
                </Card>
              </a>
            </div>
          )
        },
      )}
    </div>
  )
}

export default ProjectCards
