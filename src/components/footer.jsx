import React from 'react';
import Image from 'next/image';
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="flex justify-between items-center w-full bg-primary-500 text-white lg:text-[24px] md:text-[18px]  small:text-[16px] mt-10 px-10">
            <div className="flex flex-col items-center ">
                <Image
                    alt=""
                    src="/star1.png"
                    width={36}
                    height={36}
                />
                <Image
                    alt=""
                    src="/star2.png"
                    width={36}
                    height={36}
                />
                <Image
                    alt=""
                    src="/star3.png"
                    width={36}
                    height={36}
                />
            </div>
            <div className="flex flex-col items-center gap-6">
                <p>عن المحل</p>
                <p>خدمة العملاء</p>
            </div>
            <div className="flex flex-col items-center gap-6">
                <p>قوموا بزيارتنا على</p>
                <div className="flex items-center gap-1">
                    <a href="https://www.instagram.com/dreams__toys?igsh=MTgxdDdvbm1lNWZpMw==">
                        <FaInstagramSquare style={{ fontSize: "36px" }}/>
                    </a>
                    <a href="https://www.facebook.com/share/qoHSdjwxE6yTwv7Z/?mibextid=hu50Ix">
                        <FaFacebookSquare style={{ fontSize: "36px" }}/>
                    </a>
                </div>
            </div>
            <Image alt="" src="/Rectangle.svg" width={300} height={300} />
        </div>
    );
};

export default Footer;

