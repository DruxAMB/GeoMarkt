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
        name: "New York City",
        nameTag: "NYC",
        image: "/images/project-icon.png",
        avatar: "",
        title: "",
        titleH: "",
        titleP: "",
        about: "About New York City Index",
        aboutP: "New York City boasts a dynamic real estate market, offering opportunities for investors to capitalize on its growth. The market is characterized by high median house prices, promising rental yields, and a unique demographic makeup. Understanding these factors can be crucial for making informed investment decisions.",
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
        name: "Los Angeles",
        nameTag: "LAX",
        image: "/images/project-icon2.png",
        avatar: "",
        title: "",
        titleH: "",
        titleP: "",
        about: "About New York City Index",
        aboutP: "New York City boasts a dynamic real estate market, offering opportunities for investors to capitalize on its growth. The market is characterized by high median house prices, promising rental yields, and a unique demographic makeup. Understanding these factors can be crucial for making informed investment decisions.",
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
        name: "San Francisco",
        nameTag: "SFO",
        image: "/images/project-icon3.png",
        avatar: "",
        title: "",
        titleH: "",
        titleP: "",
        about: "About New York City Index",
        aboutP: "New York City boasts a dynamic real estate market, offering opportunities for investors to capitalize on its growth. The market is characterized by high median house prices, promising rental yields, and a unique demographic makeup. Understanding these factors can be crucial for making informed investment decisions.",
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
        name: "London",
        nameTag: "LON",
        image: "/images/project-icon4.png",
        avatar: "",
        title: "",
        titleH: "",
        titleP: "",
        about: "About New York City Index",
        aboutP: "New York City boasts a dynamic real estate market, offering opportunities for investors to capitalize on its growth. The market is characterized by high median house prices, promising rental yields, and a unique demographic makeup. Understanding these factors can be crucial for making informed investment decisions.",
        goal: "",
        goalP: "",
        price: 115.25,
        tmv: 2.1,
        gdp: 1.9,
        dept: 233,
        listing: "45,678",
        balance: "-"
    },
    {
        id: '5',
        name: "Paris",
        nameTag: "PAR",
        image: "/images/project-icon5.png",
        avatar: "",
        title: "",
        titleH: "",
        titleP: "",
        about: "About New York City Index",
        aboutP: "New York City boasts a dynamic real estate market, offering opportunities for investors to capitalize on its growth. The market is characterized by high median house prices, promising rental yields, and a unique demographic makeup. Understanding these factors can be crucial for making informed investment decisions.",
        goal: "",
        goalP: "",
        price: 135.49,
        tmv: 9.2,
        gdp: 19.7,
        dept: 410,
        listing: "45,678",
        balance: "-"
    },
    {
        id: '6',
        name: "New York City",
        nameTag: "NYC",
        image: "/images/project-icon2.png",
        avatar: "",
        title: "",
        titleH: "",
        titleP: "",
        about: "About New York City Index",
        aboutP: "New York City boasts a dynamic real estate market, offering opportunities for investors to capitalize on its growth. The market is characterized by high median house prices, promising rental yields, and a unique demographic makeup. Understanding these factors can be crucial for making informed investment decisions.",
        goal: "",
        goalP: "",
        price: 124.53,
        tmv: 3.3,
        gdp: 1.6,
        dept: 912,
        listing: "45,678",
        balance: "-"
    }
]

export default dummyData;