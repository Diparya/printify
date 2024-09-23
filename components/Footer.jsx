const Footer = () => {
    return (
        <footer className="bg-black py-12">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <FooterSection title="Integrations" items={['Shopify', 'Etsy', 'eBay', 'Amazon', 'TikTok Shop', 'PrestaShop', 'BigCommerce', 'Wix', 'WooCommerce', 'Squarespace', 'Printify API', 'Printify Pop-Up Store', 'Shutterstock']} />
                <FooterSection title="Discover" items={['Blog', 'Guides', 'Products', 'Etsy print-on-demand', 'Shopify print-on-demand', 'Woocommerce print-on-demand', 'Wix print-on-demand', 'Squarespace print-on-demand', 'Make Your Own Shirt', 'Brands', 'Pricing', 'Shipping Rates', 'Mockup Generator']} />
                <FooterSection title="Start selling" items={['Custom T-shirts', 'Custom Hoodies', 'Custom Mugs', 'Custom Socks', 'Custom Backpacks', 'Custom Branding', 'Sell on Etsy', 'Sell on Social Media', 'Free T-shirt Designs', 'Custom Products', 'Custom All-Over-Print Hoodies', 'Start a Clothing Line', 'Start POD Business', 'Bulk Orders', 'Transferring To Printify']} />
                <FooterSection title="Printify" items={['Print on Demand', 'Print Providers', 'Experts Program', 'Printify Express Delivery', 'Become a Partner', 'About', 'Printify Quality Promise', 'Jobs', 'Webinars', 'Printing Profits Podcast', 'Contact Us', 'Affiliate', 'Contact Sales', 'POD Glossary', 'Network Fulfillment Status', 'Merchant Protection', 'Security', 'Sitemap']} />
            </div>
            <div className="border-t border-gray-300 py-6 mt-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center md:space-x-6 text-sm text-gray-500 mb-4 md:mb-0">
                <a href="#" className="hover:text-gray-400">Intellectual Property Policy</a>
                <a href="#" className="hover:text-gray-400">Terms of Service</a>
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="hover:text-gray-400">Security</a>
              </div>
              <div className="text-sm text-gray-500">© 2024 Printify, Inc. All rights reserved.</div>
            </div>
          </div>
        </footer>
    );
};

const FooterSection = ({ title, items }) => (
    <div>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ul>
            {items.map((item, index) => (
                <li key={index} className="mb-2 text-gray-400 hover:text-gray-300 cursor-pointer">{item}</li>
            ))}
        </ul>
    </div>
);

export default Footer;
