import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCards = () => {

  const cardItem = [
    {
      text: "Title",
      subtitle: "Subtitle",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      text: "Title",
      subtitle: "Subtitle",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      text: "Title",
      subtitle: "Subtitle",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      text: "Title",
      subtitle: "Subtitle",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      text: "Title",
      subtitle: "Subtitle",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      text: "Title",
      subtitle: "Subtitle",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="max-w-[1640px] mx-auto grid md:grid-cols-2 gap-7 md:px-20">

      {cardItem.map(({ text, subtitle, image }, index) => {
        return (
          <div key={index} className="bounce hover:drop-shadow-xl rounded-[30px] relative">

            <div className="absolute w-full h-full bg-black/50 rounded-[30px] text-white">
              <FaArrowUpRightFromSquare className="float-right mr-8 mt-8" />
              <p className="font-bold text-2xl pl-8 pt-7">{text} </p>
              <p className="pl-8">{subtitle}</p>
            </div>

            <img
              className="max-h-[300px] md:max-h-[250px] w-full object-cover rounded-[30px]"
              src={image}
              alt="/"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;