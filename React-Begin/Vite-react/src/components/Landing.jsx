import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Landing() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-12">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden ">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] h-[5vw] rounded-md relative bg-red-500"></div>
                )}
                <h1 className=" uppercase text-[6.8vw] leading-[5.8vw] tracking-tighter font-['FoundersGrotesk - 600'] font-medium ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-12">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-[1.2vw] font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-1">
          <div className="px-4 py-2 border-[1px] border-zine-600 rounded-full text-light text-[1vw] uppercase">
            Start the Project
          </div>
          <div className="w-[3vw] h-[3vw] flex justify-center text-[1vw] items-center border-[1px] border-zine-600 rounded-full">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
