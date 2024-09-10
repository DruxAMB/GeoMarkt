export interface DataProp {
    id: string;
    name: string;
    nameTag: string;
    image: string;
    avatar: string;
    title: string;
    titleH: string;
    titleP: string;
    about: string;
    aboutP: string;
    goal: string;
    goalP: string;
    price: number;
    tmv: number;
    gdp: number;
    dept: number;
    listing: string;
    balance: string
}

const dummyData: DataProp[] = [
    {
        id: '1',
        name: "Lagos City",
        nameTag: "LGS",
        image: "/images/project-icon.png",
        avatar: "",
        title: "",
        titleH: "",
        titleP: "",
        about: "About Lagos City Index",
        aboutP: "Lagos City boasts a dynamic real estate market, offering opportunities for investors to capitalize on its growth. The market is characterized by high median house prices, promising rental yields, and a unique demographic makeup. Understanding these factors can be crucial for making informed investment decisions.",
        goal: "",
        goalP: "",
        price: 125.43,
        tmv: 2.5,
        gdp: 1.4,
        dept: 719,
        listing: "45,678",
        balance: "-"
    },
    {
        id: '2',
        name: "Nairobi City",
        nameTag: "NOI",
        image: "/images/project-icon2.png",
        avatar: "",
        title: "",
        titleH: "",
        titleP: "",
        about: "About Nairobi City Index",
        aboutP: "Nairobi City boasts a dynamic real estate market, offering opportunities for investors to capitalize on its growth. The market is characterized by high median house prices, promising rental yields, and a unique demographic makeup. Understanding these factors can be crucial for making informed investment decisions.",
        goal: "",
        goalP: "",
        price: 105.26,
        tmv: 1.2,
        gdp: 1.1,
        dept: 209,
        listing: "45,678",
        balance: "-"
    },
    {
        id: '3',
        name: "Safari City",
        nameTag: "SFI",
        image: "/images/project-icon3.png",
        avatar: "",
        title: "",
        titleH: "",
        titleP: "",
        about: "About Safari City Index",
        aboutP: "Safari City boasts a dynamic real estate market, offering opportunities for investors to capitalize on its growth. The market is characterized by high median house prices, promising rental yields, and a unique demographic makeup. Understanding these factors can be crucial for making informed investment decisions.",
        goal: "",
        goalP: "",
        price: 121.14,
        tmv: 2.2,
        gdp: 1.7,
        dept: 316,
        listing: "45,678",
        balance: "-"
    },
    {
        id: '4',
        name: "Epe",
        nameTag: "EPE City",
        image: "/images/project-icon4.png",
        avatar: "",
        title: "",
        titleH: "",
        titleP: "",
        about: "About Epe City Index",
        aboutP: "Epe City boasts a dynamic real estate market, offering opportunities for investors to capitalize on its growth. The market is characterized by high median house prices, promising rental yields, and a unique demographic makeup. Understanding these factors can be crucial for making informed investment decisions.",
        goal: "",
        goalP: "",
        price: 115.25,
        tmv: 2.1,
        gdp: 1.9,
        dept: 233,
        listing: "45,678",
        balance: "-"
    }
]

export default dummyData;