export const HeaderCategories =() => {
    const categories = [
        // {
        //     id: 1,
        //     title:"Coins",
        //     icon:<PiCoinsLight className="w-[2rem] h-[2rem] text-[#BACBD1]" />

        // },
        {
            id: 2,
            title:"الصفحة الرئيسية",
            icon:<IoMdHome className="w-[2rem] h-[2rem] text-[#BACBD1]" />,
            components:ROUTES.home


        },
        {
            id: 3,
            title:"المفضلة",
            icon:<IoIosHeartEmpty className="w-[2rem] h-[2rem] text-[#BACBD1]" />,
            components:ROUTES.cart

        },
        {
            id: 4,
            title:"السلة",
            icon:<IoCartOutline className="w-[2rem] h-[2rem] text-[#BACBD1]" />,
            components:ROUTES.cart


        },
        {
            id: 5,
            title:"الحساب",
            icon:<RiUserLine className="w-[2rem] h-[2rem] text-[#BACBD1]" />,
            components:<User />


        },
    ]

}