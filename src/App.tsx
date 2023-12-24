import NAVBAR from "./pages/Nav-Bar";

function App() {
  return (
    <>
      <div className="py-[31px] px-[150px] bg-primary-bg">
        <NAVBAR></NAVBAR>
        <div className="flex pt-[73px] px-5">
          <div className="basis-1/2">
            <h1 className="text-secondery-bg text-[64px] uppercase tracking-[6.4px]">
              Meditation on Wheels
            </h1>
            <p className="w-[350px] text-[16px] tracking-wider leading-[26px] pl-3  pt-[20px] pb-[13px]">
              A customized meditation vehicle designed to traverse various
              locations, offering brief moments of relaxation and calm at your
              doorstep.
            </p>
            <div className="inline-flex bg-secondery-bg  py-[22px] px-[32px] justify-center items-center rounded-lg">
            <button className=" text-[white] uppercase">
              Book Now
            </button>
            </div>
          </div>
          <div className="">
            <h1>hello world</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
