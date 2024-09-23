
const DesignTools = () => {
    return (
        <div className="bg-black py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-4 lg:px-0">
                <div className="w-full max-w-4xl mb-8 flex items-center justify-center">
                    <video
                        className="w-full h-auto max-h-[500px] max-w-[400px] object-cover rounded-lg"
                        loop
                        muted
                        autoPlay
                        playsInline
                    >
                        <source src="videos/3D2.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Right: Text Section */}
                <div className="md:w-1/2 mt-10 md:mt-0 md:ml-12 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#4a0074]">
                        Easily add your design to a wide range of products
                    </h2>
                    <p className="text-white mt-4">
                        With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
                    </p>
                    <a
                        href="/all-products"
                        className="text-[#9d00ff] hover:text-[#9d00ffe2] font-medium mt-6 inline-block"
                    >
                        All products &rarr;
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DesignTools