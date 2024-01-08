import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,

} from "@material-tailwind/react";
import { DiMongodb } from "react-icons/di";
import { FaAngular, FaReact, FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiTypescript } from "react-icons/si";


const ProjectCards = () => {


  const cardItem = [
    {
      title: "pawed",
      subtitle: "A booking application made with blank and blank. Think airbnb, but for pets.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon:
        <div className="flex">
          <DiMongodb size={25} />
          <SiExpress className="mx-1" size={25} />
          <FaReact size={25} />
          <FaNodeJs className="mx-1" size={25} />
        </div>,
      date: "January 12, 2024"

    },
    {
      title: "Schma",
      subtitle: "A calendar planning solution made with blank and blank. Work out hours before you finalize on your calendar.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon:
        <div>

        </div>,
      date: ""
    },
    {
      title: "Keep",
      subtitle: "A google keep clone made with firebase.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon:
        <div>

        </div>,
      date: ""
    },
    {
      title: "myFlix Angular App",
      subtitle: "A movie application made with Angular that uses CRUD.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon:
        <div className="flex">
          <FaAngular size={25} />
          <SiTypescript className="p-[2px] ml-2" size={25} />
        </div>,
      date: ""

    },
    {
      title: "Meet App",
      subtitle: "A PWA (Progressive Web Application) made with React that uses a Calendar API to fetch upcoming events.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon:
        <div>

        </div>,
      date: ""
    },
    {
      title: "Chat App",
      subtitle: "A chat application for mobile devices made using React Native.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon:
        <div>

        </div>,
      date: ""
    },
  ];

  return (
    <div className="max-w-[1640px] mx-auto grid md:grid-cols-2 gap-10 pb-10 md:px-20">

      {cardItem.map(({ title, subtitle, date, image, icon }, index) => {
        return (
          <div key={index} className="bounce hover:drop-shadow-xl relative">

            <Card className="max-w-[40rem] max-h-[40rem] rounded-[25px] overflow-hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src={image}
                  alt="ui/ux review check"
                />
              </CardHeader>
              <CardBody>
                <Typography classname="font-serif" variant="h3" color="blue-gray">
                  {title}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                  {subtitle}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">

                  <icon className="">{icon}</icon>

                </div>
                <Typography className="font-normal">{date}</Typography>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;