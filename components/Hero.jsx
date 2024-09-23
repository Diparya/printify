const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 text-center px-4">
      <h1 className="text-2xl md:text-4xl font-bold text-[#4a0074] mb-4">Create and sell custom products</h1>
      <p className="text-white mb-8">100% Free to use • 900+ High-Quality Products • Largest global print network</p>

      <div className="w-full max-w-4xl mb-8 flex items-center justify-center shadow-md shadow-[#9d00ff]">
        <video
          className="w-full h-auto max-h-[400px] max-w-[400px] object-cover rounded-lg"
          loop
          muted
          autoPlay
          playsInline
        >
          <source src="videos/3D1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-12">
        <button className="bg-[#9d00ff] text-white px-6 py-3 rounded font-medium border border-[#9d00ff] hover:bg-black hover:text-[#9d00ff] hover:border-[#9d00ff] hover:border">Start for free</button>
        <button className="flex items-center space-x-2 text-[#9d00ff] border border-[#9d00ff] px-6 py-3 rounded font-medium mt-4 md:mt-0 hover:text-white hover:bg-[#9d00ff]">
          <span>How it works?</span>
        </button>
      </div>


    </div>
  );
};

export default Hero;
