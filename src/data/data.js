import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
export const navbarLinks = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "about",
  },
  {
    id: 3,
    name: "skills",
  },
  {
    id: 4,
    name: "portifolio",
  },
  {
    id: 5,
    name: "contact",
  },
];

export const socialIcons = [
  <FiFacebook />,
  <FiTwitter />,
  <FiInstagram />,
  <FiLinkedin />,
];

export const stats = [
  {
    id: 1,
    title: "years of experince",
    image: "./images/stats-card_icon-1.png",
    number: 12,
  },
  {
    id: 2,
    title: "customers served",
    image: "./images/stats-card_icon-2.png",
    number: 230,
  },
  {
    id: 3,
    title: "projects completed",
    image: "./images/stats-card_icon-3.png",
    number: 95,
  },
];

export const skillsTabButtons = ["skills", "tools"];

export const skills = [
  {
    id: 1,
    images: [
      "./images/html5.png",
      "./images/css3.png",
      "./images/javascript.png",
      "./images/typescript.png",
      "./images/jquery.png",
      "./images/bootstrap.png",
      "./images/angular.png",
      "./images/react.png",
      "./images/vue.png",
      "./images/firebase.png",
      "./images/pugjs.png",
      "./images/sass.png",
    ],
  },
  {
    id: 2,
    images: [
      "./images/ajax.png",
      "./images/gulp.png",
      "./images/webpack.png",
      "./images/git.png",
      "./images/npm.png",
      "./images/command.png",
      "./images/vs-code.png",
      "./images/trello.png",
      "./images/clickup.png",
      "./images/slack.png",
      "./images/photoshop.png",
      "./images/adobe-xd.png",
    ],
  },
];

export const portifolio = [
  "./images/project-1.png",
  "./images/project-2.png",
  "./images/project-3.png",
  "./images/project-4.png",
  "./images/project-5.png",
  "./images/project-6.png",
  "./images/project-7.png",
];

export const inputData = [
  {
    id: 1,
    label: "name",
    fields: {
      id: "name",
      type: "text",
      placeholder: "eg. wabweni brian",
    },
  },
  {
    id: 2,
    label: "email",
    fields: {
      id: "email",
      type: "text",
      placeholder: "eg. wabwenib66@gmail.com",
    },
  },
  {
    id: 3,
    label: "phone",
    fields: {
      id: "phone",
      type: "number",
      placeholder: "eg. +256 775 358738",
    },
  },
];

export const dummyData = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim aliquam blanditiis id explicabo natus at dolorum unde nihil earum. Omnis iste consectetur, quibusdam quaerat, labore laboriosam,totam rem numquam voluptatem quam dolorum! Ducimus sit sapiente quo voluptatibus quaerat dolorem, sequi dolor, enim assumenda culpa, dolorum voluptatem temporibus eaque minima",
};
