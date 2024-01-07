import React from "react";

const Footer =() => {
    const productList =["Market","ERC 20 Token", "Donation"];
    const contactList =[
    "support@cryptoking.com",
    "info@example.com",
    "Contact Us",
];
const usefullLink =["Home" , "AboutUs","Company","bio"];
return (
    <footer className="text centre text-white backgroundMain lg:text-left">
        <div className="mx-6 py-10 text-centre md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="">
                    <h6 className="mb-4 flex items-centre justify-centre font-semibold uppercase md:justify-start">
                    Crypto King
                    </h6>
                    <p>
                        Here you can use the rows and columns to organize your footer content.
                        lorem ipsum dolor sit met, martkett,adipiising elet.
                        
                    </p>
                </div>
                <div className="">
                    <h6 className="mb-4 flex  justify-centre font-semibold uppercase md:justify-start">
                        Products
                    </h6>
                    {productList.map((el,i)=>(
                        <p className="mb-4" key={i+1}>
                            <a href="#!">{el}</a>
                        
                        </p>

                    ))}

                </div>
                <div className="">
                <h6 className="mb-4 flex  justify-centre font-semibold uppercase md:justify-start">
                    UsefulLink 
                    </h6>
                    {usefullLink.map((el,i) =>(
                        <p className="mb-4" key={i+1}>
                        <a href="#!">{el}</a>
                        </p>
                    ))}
            </div>
            <div>
                <h6 className="mb-4 flex justify-centre font-semibold uppercase md:justify-start">
                    Contact
                </h6>
                {contactList.map((el,i) =>(
                        <p className="mb-4" key={i+1}>
                        <a href="#!">{el}</a>
                        </p>
                    ))}
            </div>
        </div>
        </div>
        <div className="backgroundMain p-6 text-centre">
            <span> 2023 Copyright </span>
            <a className="font-semibold " href="https://tailwind-elements.com/">
            Crypto King
            </a>
        </div>
    </footer>
);

};
export default Footer;

