/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shridhar Shinde",
  title: "Hello, I'm Shridhar.",
  subTitle: emoji(
    "I am a versatile IT and Analytics Master's student at RIT, backed by a Computer Engineering degree from Pune University. With 2.5+ years of experience, I excel in cloud migration, infrastructure as code, and database administration. I'm AWS and Terraform certified, aiming for the tech forefront. Eager for challenging summer internships in Software Engineering and Cloud Computing, with awards and leadership experience." ),
  resumeLink:
    "https://drive.google.com/file/d/1lpi_xWIDDaA7PfEy-nEuEvva9ii3dknN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shri2606",
  linkedin: "https://www.linkedin.com/in/shridharv-shinde/",
  gmail: "shindeshridharv@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I love to explore different technologies and solve complex problems. These are some of the technologies I have been exploring",
  skills: [
    emoji(
      "⚡ Proficient in AWS and database management, I excel in creating secure and scalable cloud-based software solutions."
    ),
    emoji("⚡ Skilled in cross-functional collaboration, I lead teams to develop and ensure client satisfaction."),
    emoji(
      "⚡ With AWS and Terraform certifications, I automate data, machine learning, enhancing operational efficiency."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rochester Institute of Technology",
      logo: require("./assets/images/RITlogo.png"),
      subHeader: "Master of Science in Information Technology & Analytics",
      duration: "August 2023 - May 2025(Expected)",
      desc: "Courses:",
      descBullets: [
        "ISTE 608: Database Design Implementation",
        "DSCI 633: Fnd. Data Science and Analytics",
        "ISTE 605: ScholarshipinITA"
      ]
    },
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/PuneUni.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "September 2013 - April 2017",
      desc: "Courses:",
      descBullets: [
        "Fundamentals of Programming Langauge",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Web Development",
        "CLoud Computing",
        "Machine Learning",
        "Won the Firodiya Karandak 2020 as Part of the College Theater Club.",
        "Represented College at Various Dance Competitions for 2 years."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud/DevOps",
      progressPercentage: "60%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Application Development Analyst",
      company: "Accenture",
      companylogo: require("./assets/images/Accenture_logo.png"),
      date: "May 2021 – Aug 2023",
      desc: "Responsibilites:",
      descBullets: [
        "Efficiently migrated 150 on-premises servers to AWS, resulting in 20% cost savings and improved scalability.",
        "Deployed infrastructure for 10+ servers on AWS cloud environment using Terraform.",
        "Successfully executed efficient migration of 20 databases to the cloud, minimizing downtime, dataloss and optimizing post migration performance.",
        "Orchestrated client communications, strategic planning, migration bridge meetings, and issue resolution to achieve a seamless transition with 100% client satisfaction."
      ]
    },
    {
      role: "Application Support Engineer",
      company: "Tech Mahindra",
      companylogo: require("./assets/images/TechM_logo.png"),
      date: "Dec 2020 – May 2021",
      desc: "Responsibilites:",
      descBullets:[
        "Achieved consistent daily resolution of 70+ tickets within the ServiceNow platform by leveraging SQL queries, minimizing end-user downtime.",
        "Proficiently navigated Linux-based environments, executing basic commands to ensure system integrity and streamline tasks."
      ]
    },
    {
      role: "Co-Founder / CTO",
      company: "Vyominnova",
      companylogo: require("./assets/images/vyominnova_logo.png"),
      date: "Mar 2020 – Jul 2021",
      desc: "Responsibilites:",
      descBullets: [
        "Led the design vision of the startup by introducing 7 highly interactive digital cards.",
        "Designed and developed digital cards for 50+ underprivileged businesses, 20+ events, and 60+ other products, resulting in 95% client satisfaction.",
        "Built and led a team of 3 a designer, researcher, and developer to bring digital solutions to the market."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "Amazon Web Services(AWS)",
      image: require("./assets/images/aws_logo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/8899c02a-25dc-4f30-8ab7-4c7b0d17e132?source=linked_in_profile"
        },
      ]
    },
    {
      title: "Terraform",
      subtitle:
        "HashiCorp Certified: Terraform Associate (002)",
      image: require("./assets/images/terraform_logo.png"),
      imageAlt: "Terraform Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/4699cbab-cdbd-44d1-aa9b-2c2ab80f73f9/public_url"
        }
      ]
    }

 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "A SOFTWARE DEVELOPER OR CLOUD ENGINEER IS WHAT YOUR ORGANISATION NEEDS? PLEASE CONTACT ON BELOW EMAIL:",
  number: "+1(585)709-1057",
  email_address: "shindeshridharv@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
