import Cards from "./Components/Cards.jsx"

const userProfiles = [
  {
    username: "Aarav_Sharma",
    designation: "Frontend Developer",
    company: "Google Inc.",
    userImage: "https://randomuser.me/api/portraits/men/32.jpg",
    experience: "Aarav is a 27-year-old developer with 5+ years of experience building scalable web applications using React and Tailwind.",
    jobLocation: "Bangalore, India",
    post: "React Developer",
    rate: "$45/hr",
    skills: ["React", "JavaScript", "TailwindCSS", "UI/UX", "+3"],
  },
  {
    username: "Sophia_Williams",
    designation: "UX Designer",
    company: "Microsoft",
    userImage: "https://randomuser.me/api/portraits/women/45.jpg",
    experience: "Sophia has 8 years of experience designing user-friendly interfaces and improving product usability.",
    jobLocation: "Seattle, USA",
    post: "UX Specialist",
    rate: "$50/hr",
    skills: ["Figma", "Sketch", "Photoshop", "UI", "+2"],
  },
  {
    username: "Rohan_Verma",
    designation: "Backend Engineer",
    company: "Amazon",
    userImage: "https://randomuser.me/api/portraits/men/12.jpg",
    experience: "Rohan specializes in Node.js and cloud-based APIs with 6 years of backend development experience.",
    jobLocation: "Hyderabad, India",
    post: "Software Engineer",
    rate: "$55/hr",
    skills: ["Node.js", "Express", "MongoDB", "AWS", "+4"],
  },
  {
    username: "Emily_Jones",
    designation: "Data Scientist",
    company: "Netflix",
    userImage: "https://randomuser.me/api/portraits/women/68.jpg",
    experience: "Emily has 7 years of experience in machine learning, predictive analytics, and big data solutions.",
    jobLocation: "Los Angeles, USA",
    post: "ML Engineer",
    rate: "$70/hr",
    skills: ["Python", "TensorFlow", "SQL", "Data Visualization", "+3"],
  },
  {
    username: "Karan_Mehta",
    designation: "Mobile App Developer",
    company: "Spotify",
    userImage: "https://randomuser.me/api/portraits/men/21.jpg",
    experience: "Karan builds cross-platform mobile apps with React Native and has 4 years of experience.",
    jobLocation: "Delhi, India",
    post: "React Native Developer",
    rate: "$40/hr",
    skills: ["React Native", "JavaScript", "Redux", "UI/UX", "+2"],
  },
  {
    username: "Olivia_Brown",
    designation: "Product Manager",
    company: "Airbnb",
    userImage: "https://randomuser.me/api/portraits/women/19.jpg",
    experience: "Olivia has 9 years of experience managing product lifecycles and leading agile teams.",
    jobLocation: "San Francisco, USA",
    post: "Product Manager",
    rate: "$80/hr",
    skills: ["Agile", "Scrum", "Leadership", "UI/UX", "+3"],
  },
  {
    username: "Aditya_Singh",
    designation: "Cloud Architect",
    company: "IBM",
    userImage: "https://randomuser.me/api/portraits/men/55.jpg",
    experience: "Aditya designs scalable cloud solutions with 10 years of experience in enterprise systems.",
    jobLocation: "Pune, India",
    post: "Cloud Engineer",
    rate: "$75/hr",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "+4"],
  },
  {
    username: "Mia_Clark",
    designation: "Graphic Designer",
    company: "Adobe",
    userImage: "https://randomuser.me/api/portraits/women/77.jpg",
    experience: "Mia has 6 years of experience in digital design, branding, and creative direction.",
    jobLocation: "New York, USA",
    post: "Creative Designer",
    rate: "$60/hr",
    skills: ["Illustrator", "Photoshop", "InDesign", "UI/UX", "+2"],
  },
  {
    username: "Arjun_Patel",
    designation: "AI Engineer",
    company: "OpenAI",
    userImage: "https://randomuser.me/api/portraits/men/88.jpg",
    experience: "Arjun has 5 years of experience building AI models and deploying NLP solutions.",
    jobLocation: "Mumbai, India",
    post: "AI Developer",
    rate: "$85/hr",
    skills: ["Python", "PyTorch", "NLP", "Deep Learning", "+3"],
  },
  {
    username: "Isabella_Martin",
    designation: "Cybersecurity Analyst",
    company: "Cisco",
    userImage: "https://randomuser.me/api/portraits/women/23.jpg",
    experience: "Isabella has 7 years of experience securing enterprise networks and preventing cyber threats.",
    jobLocation: "London, UK",
    post: "Security Analyst",
    rate: "$65/hr",
    skills: ["Network Security", "Firewalls", "Ethical Hacking", "Risk Analysis", "+2"],
  },
]

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white font-sans">

      
      <header className="relative bg-[#12141e] border-b border-white/10 px-6 py-14 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-150 h-75 bg-violet-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-[11px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            ✦ Top Talent Network
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight bg-linear-to-br from-white via-white to-violet-400 bg-clip-text text-transparent mb-4">
            Find World-Class<br />Freelance Talent
          </h1>
          <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
            Connect with verified professionals from top companies. Hire the best, faster.
          </p>
          <div className="flex items-center gap-3 bg-[#1e2130] border border-white/10 rounded-full px-5 py-2.5 max-w-md mx-auto focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20 transition-all duration-200">
            <input
              type="text"
              placeholder="Search by skill, role, or company..."
              className="flex-1 bg-transparent outline-none text-[13px] text-white placeholder:text-slate-500"
            />
            <button className="bg-violet-600 hover:bg-violet-500 text-white text-[12px] font-semibold px-4 py-1.5 rounded-full transition-colors duration-200 whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-16 px-6 py-5 bg-[#1a1d27] border-b border-white/10">
        {[
          { value: "10+", label: "Professionals" },
          { value: "8", label: "Companies" },
          { value: "$40–$85", label: "Hourly Rate" },
          { value: "100%", label: "Verified" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <span className="block text-xl font-bold text-violet-300">{value}</span>
            <span className="block text-[11px] text-slate-500 uppercase tracking-widest mt-0.5">{label}</span>
          </div>
        ))}
      </div>

      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {userProfiles.map((elem, idx) => (
            <Cards
              key={idx}
              Image={elem.userImage}
              Name={elem.username}
              designation={elem.designation}
              Company={elem.company}
              Experience={elem.experience}
              Location={elem.jobLocation}
              Post={elem.post}
              Rate={elem.rate}
              skills={elem.skills}
            />
          ))}
        </div>
      </main>

    </div>
  )
}

export default App
