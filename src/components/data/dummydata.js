import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import Darkmode from "./darkmode"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/contact",
    text: "Contact",
  },
  {
    url: "/resume",
    text: "Resume",
  },
]
export const home = [
  {
    text: "Hi I'm",
    name: "Princewill Okechukwu",
    post: "FULL-STACK DEVELOPER",
    design: "OpenSource Contributor",
    desc: "I’m a Software Developer proficient in Javascript....I specialize in building and creating fully fledged web apps from scratch....Currently into Blockchain, Opensource and building with community.",
  },
]
export const about = [
  {
    desc: "Hello, my name is Princewill..I'm a Full-stack developer with 2years Experience in learning,building and developing web apps..My tech stack is MERN..Currently pursuing my Bsc in Mathematics..",
    desc1: "Loves Football, gaming ,Cryptocurrency,Web3,communicating with great minds and sharing ideas ",
    cover: "./images/IMG_20200915_163913_815_3_3.jpg"
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Loves Implementing and creating new patterns with figma...",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Well documented codes for easy reading and understanding",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Not just apps for desktop...Also implementing Mobile Responsive apps",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Frontend Developement",
    desc: "Exceptional skills creating modern web ui with Reactjs,Mui,bootstrap,css,javascript,Redux and modern libraries",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Building Web apps",
    desc: "Connecting the backend api to the Frontend to create fully functional web apps",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Backend Developement",
    desc: "Nodejs,Express and Nestjs for Creating Api....Also Nosql and Sql for Database management.",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/download.png",
    name: "willchat",
    category: "Projects",
    title: "Chat App",
    link: 'https://willchat.netlify.com'
  },
  {
    id: 2,
    cover: "../images/jobs.png",
    name: "willjobs",
    category: "Favourite",
    title: "Job App",
    link: 'https://willjobs.netlify.com'
  },
  {
    id: 3,
    cover: "../images/crypto.png",
    name: "crypto-checker",
    category: "Projects",
    title: "Crypto App",
    link: 'https://crypto-checker.netlify.com'
  },
]
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.png",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Ojodu,ikeja lagos State",
    text2: "Nigeria",
  },
  {
    icon: <PhoneIphone />,
    text1: "2348081573422",
    text2: "+2349036580241",
  },
  {
    icon: <EmailOutlined />,
    text1: "princesolo919@gmail.com",
    text2: "",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
