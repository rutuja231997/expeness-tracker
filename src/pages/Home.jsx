import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const words = "Track Your Daily Expenses Easily".split(" ");

  const navigate = useNavigate();

  return (
    // heading + sub-heading
    <div className="caret-transparent bg-gray-50 h-screen w-full flex justify-center items-center">
      <div className="rounded-xl px-2 py-10 md:px-6 gap-12 md:gap-16 flex flex-col items-center justify-between">
        <article className="text-wrap space-y-8">
          <h1 className="max-w-4xl mx-auto leading-tight font-bold text-5xl md:text-7xl text-center text-gray-900">
            {words.map((word, index) => (
              <span
                key={index}
                className={
                  index === words.length - 1 ? "block text-emerald-600" : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="max-w-2xl mx-auto text-center font-normal text-lg md:text-xl text-gray-800">
            Stay on top of your spending with a clean, fast tracker that
            organizes every transaction by category and converts your totals
            into the world's major currencies in real time.
          </p>
        </article>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate("/add-expense")}
            className="flex justify-center items-center gap-2 font-semibold cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white  py-2 px-2 text-base rounded-xl"
          >
            <span>Get Started</span>
            <FaArrowRight color="#ffffff" size={16} />
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="font-semibold cursor-pointer bg-white  text-gray-500 hover:text-gray-700 hover:bg-emerald-100  border border-gray-400 py-2 px-4 text-base rounded-xl"
          >
            View Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
