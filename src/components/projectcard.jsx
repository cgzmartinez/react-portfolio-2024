import {
  Card,
  CardHeader,
  CardBody,
  //CardFooter,
  Typography,
  //Avatar,
  //Tooltip,
} from "@material-tailwind/react";

const ProjectCards = () => {

  const cardItem = [
    {
      title: "pawed",
      subtitle: "A booking application made with blank and blank. Think airbnb, but for pets.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Schma",
      subtitle: "A calendar planning solution made with blank and blank. Work out hours before you finalize on your calendar.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Keep",
      subtitle: "A google keep clone made with firebase.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "myFlix Angular App",
      subtitle: "A movie application made with Angular that uses CRUD.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Meet App",
      subtitle: "A PWA (Progressive Web Application) made with React that uses the Google Calendar API to fetch upcoming events.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Chat App",
      subtitle: "A chat application for mobile devices made using React Native.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="max-w-[1640px] mx-auto grid md:grid-cols-2 gap-10 pb-10 md:px-20">

      {cardItem.map(({ title, subtitle, image }, index) => {
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
                <Typography variant="h3" color="blue-gray">
                  {title}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                  {subtitle}
                </Typography>
              </CardBody>
              {/*} <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                  <Tooltip content="Natali Craig">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="natali craig"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                </div>
                <Typography className="font-normal">January 10</Typography>
        </CardFooter> */}
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;