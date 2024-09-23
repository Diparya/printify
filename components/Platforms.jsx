const Platforms = () => {
    return (
      <div className="bg-black py-16">
        <div className="container mx-auto text-center px-4 lg:px-0">
          <h2 className="text-3xl font-bold text-[#4a0074] mb-6">Connect your store</h2>
          <p className="text-gray-400 mb-8">
            Printify easily integrates with major e-commerce platforms and marketplaces
          </p>
  
          {/* Store Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/api.svg" alt="API" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/shopify.svg" alt="Shopify" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/etsy.svg" alt="Etsy" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/wix.webp" alt="Wix" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/WooCommerce.png" alt="WooCommerce" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-110 p-4">
              <img src="/images/bigcommerce.png" alt="BigCommerce" className="w-24 h-24" />
            </div>
            <div className="flex items-center justify-center border bg-white shadow-lg rounded-lg p-4">
              <p className="text-gray-600">And more</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Platforms;
  