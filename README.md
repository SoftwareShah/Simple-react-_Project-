# 🃏 FreelanceCard — React Props Practice Project

A simple freelancer profile card UI built to practice **passing and consuming props in React**. Each card displays a user's name, designation, company, skills, location, and rate — all passed as props from a parent component.

---

## 🎯 Purpose

This project was built purely for **learning and practicing React props**. The goal was to understand:

- How to pass data from a parent component (`App.jsx`) to a child component (`Cards.jsx`)
- How to destructure props cleanly
- How to render dynamic lists using `.map()`
- How to build a reusable component driven entirely by props

---

## 🖥️ Preview

![FreelanceCard Preview](https://randomuser.me/api/portraits/men/32.jpg)

> Dark themed, responsive freelancer card grid — built with React + Tailwind CSS v4.

---

## 🚀 Tech Stack

| Technology | Usage |
|---|---|
| React 19 | UI & component structure |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Styling & responsiveness |
| Lucide React | Icons |

---

## 📁 Project Structure

```
src/
├── Components/
│   └── Cards.jsx       # Reusable card component (receives props)
├── App.jsx             # Parent component (passes props)
├── index.css           # Tailwind import
└── main.jsx            # Entry point
```

---

## 🧠 What I Practiced

```jsx
// Passing props from parent
<Cards
  Name={elem.username}
  designation={elem.designation}
  skills={elem.skills}
  Rate={elem.rate}
  ...
/>

// Consuming props in child
const Cards = ({ Name, designation, skills, Rate }) => {
  return (
    <div>
      <h2>{Name}</h2>
      <p>{designation}</p>
      {skills.map((skill) => <span key={skill}>{skill}</span>)}
    </div>
  )
}
```

---

## ⚙️ Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/freelancecard.git

# Navigate into the project
cd freelancecard

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## 📦 Dependencies

```json
{
  "react": "^19.2.5",
  "react-dom": "^19.2.5",
  "lucide-react": "^1.3.0",
  "tailwindcss": "latest",
  "@tailwindcss/vite": "latest"
}
```

---

## 📌 Key Concepts Covered

- ✅ Props passing (strings, arrays, numbers)
- ✅ Props destructuring
- ✅ Rendering lists with `.map()` and `key`
- ✅ Reusable components
- ✅ Responsive UI with Tailwind CSS

---

## 👨‍💻 Author

Built with ❤️ for React practice.  
Feel free to fork, star ⭐, or use this as a reference for your own props practice!
