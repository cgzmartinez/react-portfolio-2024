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
    <div className="max-w-[1640px] mx-auto grid md:grid-cols-3 gap-10 md:px-20">

      {cardItem.map(({ text, subtitle, image }, index) => {
        return (
          <div key={index} className="rounded-xl relative">

            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <FaArrowUpRightFromSquare className="float-right mr-4 mt-4" />
              <p className="font-bold text-2xl pl-4 pt-4">{text} </p>
              <p className="pl-4">{subtitle}</p>
            </div>

            <img
              className="max-h-[200px] md:max-h-[250px] w-full object-cover rounded-xl"
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