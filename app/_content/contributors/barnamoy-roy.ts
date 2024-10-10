export const data = {
    name: "Barnamoy Roy",
    location: "Goa, India",
    phone: "+91 7420988490",
    email: "roybarnamoy13@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/barnamoy-roy-535080202/",
      github: "https://github.com/Barnamoyy",
      leetcode: "https://leetcode.com/u/Barnamoy-roy/",
    },
    education: [
      {
        institution: "BITS Pilani K.K Birla Goa Campus",
        location: "Goa, India",
        degree: "Master of Sciences Physics + Electrical & Communication Engineering",
        period: "2022 – 2027",
      },
    ],
    experience: [
      {
        company: "National Centre for Polar and Ocean Research",
        position: "Research Intern",
        location: "Goa, India",
        period: "May 2024 – July 2024",
        responsibilities: [
          "Sea-Ice Extent: Collected Sea-Ice Extent data and analyzed its correlation with factors like the Southern Annular Mode and 2m Air Temperature using numpy, pandas, matplotlib, scikit-learn for data manipulation & visualization.",
          "Predictive Modeling: Fed the individual correlations in a multi-feature linear regression model to determine each factor's percentage contribution to sea ice variability. Utilised Butterworth filter to create high and low pass datasets.",
          "Data Analytics & Visualization: Analyzed percentage contributions of all factors, creating heatmaps, pie charts, and time series graphs over months, years, and decades, matched results with previous studies.",
        ],
      },
      {
        company: "CA-Monk",
        position: "Web development Intern",
        location: "Remote",
        period: "Aug 2023 – Oct 2023",
        responsibilities: [
          "Website design: Designed a new user interface for CA-Monk, emphasizing user experience.",
          "Frontend Development: Developed a responsive client-side webpage using HTML, CSS, and JS",
          "Team Collaboration: Implemented design feedback from user testing and optimized site performance, increasing page load speed by 40% and reducing bounce rate by 25% within three months",
        ],
      },
    ],
    projects: [
      {
        name: "Leetcode-Clone",
        technologies: "React, Tailwind CSS, Django, python, Typescript",
        period: "1 Month",
        details: ["Developed a Python script for a remote code compiler & executer supporting 4 languages against test cases, containerized with Docker. Built secure routes and admin access for 100+ problems, delivered activity metrics, ensuring type safety with error handling. Reduced API response latency by 80% from 1400ms to 200ms. Added modern UI/UX and a dark theme."],
      },
      {
        name: "Sign-Language Interpreter",
        technologies: "Python, OpenCV, Tensorflow, Keras",
        period: "2 Days",
        details: ["Engineered a Sign Language Interpreter with OpenCV, TensorFlow. Users can use premade data or collect their own. Used mediapipe for keypoint mapping of hands. Computed 98% accuracy on an LSTM model over 2000 epochs."],
      },
      {
        name: "AI-SaaS",
        technologies: "React, tailwind CSS, Supabase, Stripe, Node.js",
        period: "1 Month",
        details: ["Launched a full-stack 5-in-1 tool for generating images, music, code, chats, and videos from user prompts, set up stripe for subscriptions with webhooks. Recorded 200 ms response times, scaled to handle concurrent usage peaks using Supabase for efficient sql database management. Handled security with limited generation requests, secure routes, and user authentication."],
      },
    ],
    skills: {
      languages: ["Python", "Typescript", "C/C++", "Java", "Javascript"],
      technologies: ["JQuery", "Node.js", "REST API", "Django", "React", "Tailwind CSS", "Supabase", "Stripe", "Docker", "Keras", "Tensorflow", "OpenCV"],
      tools: ["Adobe Premiere Pro", "Adobe Photoshop"],
    },
    achievements: ["Winner of the 2023 Hackathon at BITS Pilani K.K Birla Goa Campus"],
  };