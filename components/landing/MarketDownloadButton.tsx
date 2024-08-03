import React from 'react';
import Image from "next/image";
import myket from "@/public/images/myket.svg";
import bazaar from "@/public/images/bazaar.svg";

interface PropTypes {
    buttonType: "cafeBazaar" | "myket",
}

const MarketDownloadButton = ({buttonType}: PropTypes): React.JSX.Element => {
    return (
        <button
            className={`w-full md:w-80 py-4 flex items-center justify-center rounded-2xl gap-x-5 ${buttonType === "cafeBazaar" ? "bg-[#91DC18]" : "bg-sky-500"}`}>
            <Image src={buttonType === "cafeBazaar" ? bazaar : myket} alt="icon-button" width={36} height={36}/>
            <p className="font-IranYekanMedium text-lg">{buttonType === "cafeBazaar" ? "دانلود از کافه بازار" : "دانلود از مایکت"}</p>
        </button>
    );
};

export default MarketDownloadButton;