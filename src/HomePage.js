import { react } from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center mt-auto">
      <div>
        <h1 className="text-xl">SKYDLE</h1>
      </div>
      <div className="flex flex-col">
        <button>CGW</button>
        <button>Stats</button>
      </div>
    </div>
  );
};

export default HomePage;
