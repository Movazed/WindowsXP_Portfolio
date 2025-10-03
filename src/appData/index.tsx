import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import dsta from "../../assets/workaccordion/dsta.png";
import srm from "../../assets/workaccordion/srm.png";
import gdsc from "../../assets/workaccordion/gdsc.png";
import sih from "../../assets/workaccordion/sih.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import ee2026_1 from "../../assets/work/EE2026/ee2026_1.jpg";
import ee2026_2 from "../../assets/work/EE2026/ee2026_2.jpg";
import ee2026_3 from "../../assets/work/EE2026/ee2026_3.jpg";
import ee2026_4 from "../../assets/work/EE2026/ee2026_4.jpg";
import ee2026_5 from "../../assets/work/EE2026/ee2026_5.jpg";
import ee2026_6 from "../../assets/work/EE2026/ee2026_6.jpg";
import ee2026_7 from "../../assets/work/EE2026/ee2026_7.jpg";
import dsta_1 from "../../assets/work/dsta/1.png";
import dsta_2 from "../../assets/work/dsta/2.png";
import dsta_3 from "../../assets/work/dsta/3.png";
import dsta_4 from "../../assets/work/dsta/4.png";
import dsta_5 from "../../assets/work/dsta/5.png";
import dsta_6 from "../../assets/work/dsta/6.png";
import dsta_7 from "../../assets/work/dsta/7.png";
import dsta_8 from "../../assets/work/dsta/8.png";
import hfg_1 from "../../assets/work/hfg/1.png";
import hfg_2 from "../../assets/work/hfg/2.png";
import hfg_3 from "../../assets/work/hfg/3.png";
import hfg_5 from "../../assets/work/hfg/5.png";
import hfg_6 from "../../assets/work/hfg/6.png";
import hfg_7 from "../../assets/work/hfg/7.png";
import eg_1 from "../../assets/work/eg1311/1.jpg";
import eg_2 from "../../assets/work/eg1311/2.jpg";
import eg_3 from "../../assets/work/eg1311/3.jpg";
import eg_4 from "../../assets/work/eg1311/4.jpg";
import eg_5 from "../../assets/work/eg1311/5.jpg";
import eg_6 from "../../assets/work/eg1311/6.jpg";
import cg1 from "../../assets/work/cg1111/1.jpg";
import cg2 from "../../assets/work/cg1111/2.jpg";
import cg3 from "../../assets/work/cg1111/3.jpg";
import cg4 from "../../assets/work/cg1111/4.jpg";
import cg5 from "../../assets/work/cg1111/5.jpg";
import cg6 from "../../assets/work/cg1111/6.jpg";
import cg1_2 from "../../assets/work/cg2111/1.jpg";
import cg2_2 from "../../assets/work/cg2111/2.jpg";
import cg3_2 from "../../assets/work/cg2111/3.jpg";
import cg4_2 from "../../assets/work/cg2111/4.jpg";
import cg5_2 from "../../assets/work/cg2111/5.jpg";
import cg6_2 from "../../assets/work/cg2111/6.jpg";
import cs2113_1 from "../../assets/work/cs2113/1.png";
import cs2113_2 from "../../assets/work/cs2113/2.png";
import sc_1 from "../../assets/work/supercanvas/1.png";
import sc_2 from "../../assets/work/supercanvas/2.png";
import sc_3 from "../../assets/work/supercanvas/3.png";
import lul from "../../assets/work/lul.png";
import lul2 from "../../assets/work/lul2.png";
import butterfly from "../../assets/butterfly.png";
import mr1 from "../../assets/mr1.jpg";
import mr2 from "../../assets/mr2.jpg";
import mrIcon from "../../assets/mr_icon.png";
import MS from "../../assets/work/MS.png";
import MS2 from "../../assets/work/MS2.png";
import AB1 from "../../assets/work/AB.png";
import AB2 from "../../assets/work/AB2.png";
import AZ1 from "../../assets/work/AZ1.png";
import AZ2 from "../../assets/work/AZ2.png";
import col1 from "../../assets/gallery/0.webp";
import col2 from "../../assets/gallery/1.webp";
import col3 from "../../assets/gallery/2.webp";
import col4 from "../../assets/gallery/3.webp";
import col5 from "../../assets/gallery/4.webp";
import col6 from "../../assets/gallery/5.webp";
export const TechIcon = {
  // Languages
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  PYTHON:
    "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  CPP: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
// Add to your TechIcon object
GYM: "https://img.shields.io/badge/Gymnasium-000000?style=for-the-badge&logo=openai-gym&logoColor=white",
  // Frontend
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS:
    "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  MATERIALUI:
    "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
    // Add to your TechIcon object
JUPYTER: "https://img.shields.io/badge/Jupyter-F37626.svg?style=for-the-badge&logo=Jupyter&logoColor=white",
  TAILWINDCSS:
    "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  // Add to your TechIcon object
CUDA: "https://img.shields.io/badge/CUDA-76B900?style=for-the-badge&logo=nvidia&logoColor=white",
  // Backend
  NODEJS:
    "https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
  EXPRESS:
    "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",

  // Mobile
  FLUTTER:
    "https://img.shields.io/badge/flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white",
// Add to your TechIcon object
REDSHIFT: "https://img.shields.io/badge/Amazon%20Redshift-8C4FFF?style=for-the-badge&logo=amazon-redshift&logoColor=white",

  // AI & Machine Learning
  TENSORFLOW:
    "https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white",
  PYTORCH:
    "https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white",
  OPENAI:
    "https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white",
    
  // Databases
  MONGODB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  FIREBASE:
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  SUPABASE:
      "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
  POSTGRESQL:
      "https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",

  // Cloud & DevOps
  GIT: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
  DOCKER:
    "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
  AWS: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
  GOOGLECLOUD:
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  VERCEL:
    "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
  
  WEBPACK:
    "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white",
// Add to your TechIcon object
HUGGINGFACE: "https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black",
ALPACA: "https://img.shields.io/badge/Alpaca-F5932F?style=for-the-badge&logo=alpaca-markets&logoColor=white",
  C: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
  ASSEMBLY: "https://img.shields.io/badge/x86_Assembly-000000?style=for-the-badge&logo=intel&logoColor=white",
  MAKEFILE: "https://img.shields.io/badge/Makefile-FF6600?style=for-the-badge&logo=gnu-make&logoColor=white",
  QEMU: "https://img.shields.io/badge/QEMU-FF6600?style=for-the-badge&logo=qemu&logoColor=white",
  // Add to your TechIcon object
AZURE: "https://img.shields.io/badge/azure-%230078D4.svg?style=for-the-badge&logo=microsoft-azure&logoColor=white",
AZUREDATAFACTORY: "https://img.shields.io/badge/Data%20Factory-0078D4?style=for-the-badge&logo=azure-data-factory&logoColor=white",
DATABRICKS: "https://img.shields.io/badge/databricks-FF3621?style=for-the-badge&logo=databricks&logoColor=white",
APACHESPARK: "https://img.shields.io/badge/Apache%20Spark-E25A1C?style=for-the-badge&logo=apache-spark&logoColor=white",
SQL: "https://img.shields.io/badge/SQL-000000?style=for-the-badge&logo=sqlite&logoColor=white",
DISCORD: "https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white",
// Add to your TechIcon object
OPENCV: "https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.HACKATHON,
  WorkType.PERSONAL,
  WorkType.SCHOOL,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 1,
    title: "A Custom x86 Operating System",
    date: "Sep-2025 - Present",
    gitURL: "https://github.com/Movazed/Custom-OS",
  techstack: [
    TechIcon.C,
    TechIcon.ASSEMBLY, // Assuming you have an icon for Assembly
    TechIcon.MAKEFILE,  // Assuming you have an icon for Make
    TechIcon.QEMU       // Assuming you have an icon for QEMU
  ],
    gallery: [lul, lul2],
    overview: `A Custom x86 Operating System

Currently working on it 

A hobby operating system built from scratch to explore the core concepts of OS design and low-level systems programming. The OS boots on x86 hardware (or QEMU) and provides a basic set of kernel features.

Key Features Implemented:

⚙️ Bootloader: Wrote a custom bootloader in Assembly to transition the CPU into 32-bit protected mode and load the kernel.

🧠 Virtual Memory Management: Full implementation of paging, enabling isolated virtual address spaces for each process.

🔄 Preemptive Multitasking: A round-robin scheduler that manages process lifecycles and context switching.

📞 System Calls: A basic syscall interface for user-space programs to request kernel services like file I/O and process creation.

💾 Filesystem: A simple, read-only file system (e.g., initrd) managed through a VFS layer.

⌨️ Drivers: Basic drivers for keyboard input and VGA text-mode output.

Technologies Used: C, x86 Assembly, Make, GCC, GDB, QEMU

A Custom x86 Operating System Currently working on it A hobby operating system built from scratch to explore the core concepts of OS design and low-level systems programming. The OS boots on x86 hardware (or QEMU) and provides a basic set of kernel features. Key Features Implemented: ⚙️ Bootloader: Wrote a custom bootloader in Assembly to transition the CPU into 32-bit protected mode and load the kernel. 🧠 Virtual Memory Management: Full implementation of paging, enabling isolated virtual address spaces for each process. 🔄 Preemptive Multitasking: A round-robin scheduler that manages process lifecycles and context switching. 📞 System Calls: A basic syscall interface for user-space programs to request kernel services like file I/O and process creation. 💾 Filesystem: A simple, read-only file system (e.g., initrd) managed through a VFS layer. ⌨️ Drivers: Basic drivers for keyboard input and VGA text-mode output. Technologies Used: C, x86 Assembly, Make, GCC, GDB, QEMU`,
  },
{
  id: 2,
  title: "ArtBox - AI Tattoo Generator for Designers",
  date: "Feb 2024 - Mar 2024",
  gitURL: "https://github.com/Movazed/Art-Box/tree/master", // Add your GitHub link here
  techstack: [
    TechIcon.FLUTTER,
    TechIcon.EXPRESS,
    TechIcon.OPENAI // Represents Generative AI
  ],
  gallery: [AB1, AB2], // Add your project images here
  overview: `Built as an innovative tool for tattoo artists and designers, ArtBox is a mobile application that uses generative AI to create unique and creative tattoo designs. The app features a clean user interface and secure authentication to provide a seamless and safe user experience. This project was recognized for its innovation in app development, ranking in the Top 50 at the Hack-Innovate National Hackathon.`,
},
  {
  id: 3,
  title: "Reinforcement Learning Agent for Doom",
  date: "Oct 2023 - Nov 2023",
  gitURL: "https://github.com/Movazed/Reinforcement-Learning-using-Doom-3D-version",
  techstack: [
    TechIcon.PYTHON,      //
    TechIcon.PYTORCH,     //
    TechIcon.TENSORFLOW,  //
    TechIcon.GYM,         //
    TechIcon.CPP          //
  ],
    gallery: [MS, MS2],
  overview: `This project leverages ViZDoom, a research platform for developing AI bots that learn to play the classic game Doom using only visual information from the screen buffer. The goal was to implement and train a deep reinforcement learning agent capable of navigating 3D environments based on screen pixels. By utilizing ViZDoom's Python API and Gymnasium/Gym environment wrappers, the project explores the challenges of teaching an AI to master complex tasks through trial-and-error, a core concept in visual reinforcement learning.`,
},
{
  id: 4,
  title: "Pandemic Data Analysis Using AWS and Redshift",
  date: "Month 202X - Month 202X", // Please update the date
  gitURL: "https://github.com/Movazed/Pandemic-Data-Analysis-Using-AWS-and-Redshift",
  techstack: [
    TechIcon.AWS,
    TechIcon.REDSHIFT, // Represents AWS Redshift
    TechIcon.PYTHON,
    TechIcon.SQL
  ],
  gallery: [ee2026_1], // You can add screenshots of your dashboards or architecture diagrams here
  overview: `This project involved creating a scalable data warehouse using AWS Redshift to analyze global pandemic-related data. The goal was to build an end-to-end pipeline for ingesting, processing, and visualizing large datasets to uncover key trends and insights. The infrastructure was deployed entirely on AWS, resulting in interactive dashboards and optimized query performance for comprehensive data analysis.`,
},
  {
  id: 5,
  title: "Vision Transformer (ViT) for CIFAR-10 Classification",
  date: "Feb 2024",
  gitURL: "https://github.com/Movazed/Vision-Transformer-ViT-for-CIFAR-10-Classification",
  techstack: [
    TechIcon.PYTHON,
    TechIcon.PYTORCH,
    TechIcon.CUDA      // Represents CUDA for GPU acceleration
  ],
    gallery: [cs2113_1, cs2113_2],
  overview: `This project demonstrates the application of a Vision Transformer (ViT) model, an architecture originally from NLP, for image classification. The model was implemented in PyTorch and trained from scratch on the CIFAR-10 dataset, which consists of 60,000 32x32 color images across 10 classes. The goal was to adapt the transformer architecture to process image patches and achieve high classification accuracy.`,
},
{
  id: 6,
  title: "AlphaZero for 2D Games",
  date: "Month 202X - Month 202X", // Please update the date
  gitURL: "https://github.com/Movazed/Alpha-Zero-Artificial-Intelligence-and-Machine-Learning-Methods-for-2d-games",
  techstack: [
    TechIcon.PYTHON,    //
    TechIcon.PYTORCH,   //
    TechIcon.JUPYTER    //
  ],
  gallery: [cg1_2, cg2_2], // You can add GIFs of the agent playing here
  overview: `This project is an implementation of the AlphaZero algorithm, a program developed by DeepMind to master complex games like chess, shogi, and Go. The goal was to adapt this powerful reinforcement learning method for 2D games, training an AI agent solely through self-play. The agent learns with no access to opening books or expert strategies, developing a superhuman level of play by generating its own game data to train the neural networks. The implementation utilizes Python and PyTorch within a Jupyter Notebook environment for training and simulation.`,
},
{
  id: 7,
  title: "Smart Discord Bot with OpenAI",
  date: "Nov 2023 - Dec 2023",
  gitURL: "https://github.com/Movazed/Intelligent-Discord-Bot-using-OPEN-AI-Api",
  techstack: [
    TechIcon.PYTHON,
    TechIcon.OPENAI,
    TechIcon.DISCORD   // Represents Discord API
  ],
  gallery: [cg1,cg2], // You can add screenshots of the bot interacting in a server
  overview: `This project involved creating a smart Discord bot by integrating the OpenAI API to leverage its advanced natural language processing capabilities. The bot utilizes powerful language models like GPT-3 to generate human-like text and perform various language-related tasks. Key features include natural language understanding for complex commands, context-aware conversational responses, creative content generation, language translation, and text summarization to make information more accessible to users.`,
},
{
  id: 8,
  title: "Self-Driving Car Simulation in JavaScript",
  date: "Nov 2023 - Nov 2023",
  gitURL: "https://github.com/Movazed/Self_Driving_Cars_Using_JavaScript_and_Neural-_Netorking_and_Machine_Learning",
  techstack: [
    TechIcon.JAVASCRIPT, //
    TechIcon.HTML,
    TechIcon.CSS,
    TechIcon.OPENAI // Represents AI/ML
  ],
  gallery: [eg_1, eg_2], // You can add GIFs of the car simulation here
  overview: `This project is a self-driving car model developed to explore autonomous navigation in complex environments. Uniquely, the entire project is scripted in JavaScript to make the concepts of Neural Networks and Machine Learning more accessible. The model leverages these technologies to process sensor data and make driving decisions, which can be observed through real-time simulations.`,
},

  {
    id: 9,
    title: "Smart India Hackathon - Smarty Pants",
    date: "Sep 2024",
    gitURL: "https://github.com/Movazed/SmartyPants",
  techstack: [
    TechIcon.NEXTJS,
    TechIcon.NODEJS,
    TechIcon.EXPRESS, // Added as per resume [cite: 26]
    TechIcon.TYPESCRIPT,
    TechIcon.TAILWINDCSS, // Added as per resume [cite: 25]
    TechIcon.FIREBASE,
    TechIcon.OPENAI, // Represents Google Gemini from the resume [cite: 25]
    TechIcon.HTML,
    TechIcon.CSS,
  ],
    gallery: [hfg_7,hfg_2, hfg_3, hfg_5, hfg_6],
    overview: `Smarty Pants is a web-based learning platform that also incorporates financial services. 
    The platform enhances the learning experience by visualizing user statistics. 
    Security is a key feature, with user authentication handled through JWT and machine learning-powered face detection. 
    This project has achieved national-level recognition by qualifying for the Smart India Hackathon.`,
  },
  {
    id: 10,
    title: "Hack Innovate 2023 - FitFlex",
    date: "Jun 2024",
    gitURL: "https://github.com/Movazed/FitFlex-with-backend-web/tree/master",
    techstack: [TechIcon.FLUTTER, TechIcon.EXPRESS, TechIcon.AWS, TechIcon.PYTORCH],
    gallery: [dsta_7, dsta_1],
    overview: `FitFlex is more than just a fitness app; it's your ultimate companion on your journey to a healthier lifestyle. With its intuitive interface and powerful features, FitFlex empowers users to take control of their fitness goals like never before.Track Your ProgressWith FitFlex, monitoring your fitness progress has never been easier. Log your workouts, set personalized goals, and track your achievements over time. Whether you're aiming to lose weight, build muscle, or improve endurance, FitFlex provides the tools you need to stay on track and reach your milestones.

Customize Your Experience

FitFlex understands that everyone's fitness journey is unique. That's why it offers customizable features to suit your individual needs. Create personalized workout routines, tailor nutrition plans to your dietary preferences, and adjust settings to match your fitness level. FitFlex adapts to you, ensuring a personalized experience that maximizes results.

Connect and Motivate

Fitness is more fun when shared with others. FitFlex fosters a sense of community by allowing users to connect with friends, share progress updates, and support each other's goals. Whether you're cheering on a friend's achievements or participating in friendly competitions, FitFlex keeps you motivated and accountable every step of the way.

Built for Performance

Powered by Flutter for the frontend and Express.js for the backend API, FitFlex delivers a seamless user experience with lightning-fast performance. Say goodbye to laggy interfaces and slow load times – FitFlex is optimized for speed and reliability, ensuring a smooth experience every time you use the app.

Join the FitFlex Community

Ready to take your fitness journey to the next level? Join the FitFlex community today and embark on a path to a healthier, happier you. Download FitFlex now and start achieving your fitness goals with confidence.`,
  },
{
  id: 11,
  title: "Real-Time Pose Estimation with MoveNet",
  date: "Aug 2023 - Aug 2023",
  gitURL: "https://github.com/Movazed/Pose-Estimation-with-the-Fastest-Python-Deep-Learning-Model-MoveNet-Lightning", // Please verify this link
  techstack: [
    TechIcon.PYTHON,    //
    TechIcon.TENSORFLOW,  //
    TechIcon.OPENCV,      //
    TechIcon.JUPYTER      //
  ],
  gallery: [mr1,mr2], // You can add GIFs of the pose estimation in action here
  overview: `This project implements real-time human pose estimation using Google's MoveNet Lightning model, a fast and lightweight deep learning solution. The model is loaded using the TensorFlow Lite (TFLite) runtime for optimized performance. The implementation processes video input via OpenCV to perform real-time pose estimation from scratch, rendering keypoints on the human body to track movement and posture.`,
},
{
  id: 12,
  title: "AI-Powered Trading Bot",
  date: "Oct - 2022 Nov - 2022", // Please update the date
  gitURL: "https://github.com/Movazed/Trading-Bot-in-Alpaca-using-machine-learning-and-Hugging-face", // Please update the GitHub link
  techstack: [
    TechIcon.PYTHON,
    TechIcon.PYTORCH,
    TechIcon.HUGGINGFACE, // Represents Hugging Face
    TechIcon.ALPACA,      // Represents Alpaca API
  ],
    gallery: [sc_1, sc_2],
  overview: `This project is an automated trading bot that utilizes the Alpaca API for executing live trades. It integrates machine learning models from the Hugging Face ecosystem for advanced data analysis, aiming to make informed trading decisions based on market trends and news sentiment analysis. The system's performance is validated using backtesting methodologies.`,
},
{
  id: 13,
  title: "Tokyo-Olympics-Data-Engineering-using-Azure",
  date: "Aug 2023 - Sep 2023",
  gitURL: "https://github.com/Movazed/Tokyo-Olympics-Data-Engineering-using-Azure",
  techstack: [
    TechIcon.AZURE,
    TechIcon.AZUREDATAFACTORY,
    TechIcon.DATABRICKS,
    TechIcon.APACHESPARK,
    TechIcon.SQL,
    TechIcon.PYTHON
  ],
  gallery: [AZ1, AZ2],
  overview: `This is a comprehensive data engineering project focused on the Tokyo Olympics dataset. The primary goal was to build an end-to-end data pipeline on Microsoft Azure to ingest, store, process, and visualize the data. The architecture leverages a suite of Azure services including Azure Data Factory for orchestration, Azure Blob Storage and Data Lake for storage, and Azure Databricks with Apache Spark for large-scale data processing and analytics.`,
},
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: butterfly,
    title: "A Custom x86 Operating System",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "ArtBox - Tattoos For Designers",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Game Training On Doom64",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.SCHOOL,
    icon: file,
    title: "Pandemic Data Analysis Using AWS and Redshift",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.SCHOOL,
    icon: file,
    title: "Vision Transformer (ViT) for CIFAR-10 Classification",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 6,
    type: WorkType.SCHOOL,
    icon: file,
    title: "Alpha-Zero-Artificial-Intelligence-and-Machine-Learning-Methods-for-2d-games",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
  {
    id: 7,
    type: WorkType.SCHOOL,
    icon: file,
    title: "Smart Discord Bot with OpenAI",
    content: WorkData[WorkData.findIndex((x) => x.id === 7)],
  },
  {
    id: 8,
    type: WorkType.SCHOOL,
    icon: file,
    title: "Self-Driving Car Simulation in JavaScript",
    content: WorkData[WorkData.findIndex((x) => x.id === 8)],
  },
  {
    id: 9,
    type: WorkType.HACKATHON,
    icon: sih,
    title: "Smart India Hackathon 2024",
    content: WorkData[WorkData.findIndex((x) => x.id === 9)],
  },
  {
    id: 10,
    type: WorkType.HACKATHON,
    icon: srm,
    title: "HackInnvoate 2024",
    content: WorkData[WorkData.findIndex((x) => x.id === 10)],
  },
  {
    id: 11,
    type: WorkType.SCHOOL,
    icon: file,
    title: "Real-Time Pose Estimation with MoveNet",
    content: WorkData[WorkData.findIndex((x) => x.id === 11)],
  },
  {
    id: 12,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Trading Bot using Alpaca and ML",
    content: WorkData[WorkData.findIndex((x) => x.id === 12)],
  },
  {
    id: 13,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Tokyo-Olympics-Data-Engineering-using-Azure",
    content: WorkData[WorkData.findIndex((x) => x.id === 13)],
  },
] as WorkFile[];

// For My Photography Collection
export const PhotoCollection = [
  {
    id: 0,
    title: "CodeForces Profile",
    desc: "Rank 45",
    date: "31 July 2025",
    img: col1,
  },
  {
    id: 1,
    title: "LeetCode Profile",
    desc: "2101 rating 600+ solved",
    date: "1 October 2025",
    img: col2,
  },
  {
    id: 2,
    title: "CodeChef Profile",
    desc: "13 World Rank 6 Star",
    date: "25 September 2025",
    img: col3,
  },
  {
    id: 3,
    title: "LeetCode Contest",
    desc: "Rank 2",
    date: "1 October 2025",
    img: col4,
  },
  {
    id: 4,
    title: "CodeChef Ranks",
    desc: "Rank 7",
    date: "September 2025",
    img: col5,
  },
  {
    id: 5,
    title: "LeetCode Contest",
    desc: "Rank 48",
    date: "17 August 2025",
    img: col6,
  },
] as GalleryImage[];
