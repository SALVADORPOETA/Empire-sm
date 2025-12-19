# Empire-sm

Empire-sm is a **fully original ReactJS project** that explores the culture, history, and society of the Roman Empire. The project was **built from scratch** using React, React Router, TailwindCSS, and integrates a **custom API backend** for dynamic content. It also includes user authentication and interactive features for a rich educational experience.

This project demonstrates advanced frontend design, API integration, authentication, and user interaction while maintaining a visually appealing layout.

![empire](https://github.com/SALVADORPOETA/Empire-sm/assets/71913145/e3c1f874-b7f8-4ef8-a9f5-1fb2896ed1b8)

---

## 📝 Overview

Empire-sm is not a template, clone, or tutorial follow-along project.

It is a **custom-designed educational platform** that combines:

- Structured historical and cultural content served via APIs
- A modern React architecture with routing
- Firebase authentication with protected routes
- A responsive, mobile-first UI
- Interactive components including sliders and product catalogs

The project emphasizes **clarity of presentation**, **scalability**, and **production-ready patterns**.

---

## 🚀 Features

- ✨ **Completely original content and design** about the Roman Empire
- 🔌 **Dynamic content fetched** from a custom Node.js API
- 📱 **Responsive design** using TailwindCSS
- 🔐 **User authentication** with email/password and Google Sign-In via Firebase
- 🏺 **Interactive sections** including Culture, Language, Religion, Morality, Arts, and more
- 🎨 **Image sliders and animations** for an immersive experience
- 🛒 **Products showcase** with filtering by type and price

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | ReactJS, React Router DOM, TailwindCSS |
| **Backend** | Node.js (Custom API) |
| **Authentication** | Firebase Authentication |
| **HTTP Client** | Axios |
| **UI Components** | React Icons, React Google Button |
| **Deployment** | Vercel / Netlify |

---

## 📂 Project Structure

```
empire-sm/
 ├─ components/
 │   ├─ Navbar.js
 │   ├─ Footer.js
 │   ├─ Subscribe.js
 │   ├─ ImageSlider.js
 │   └─ ...
 ├─ pages/
 │   ├─ Home.js
 │   ├─ CulturePage.js
 │   ├─ ProductsPage.js
 │   ├─ Account.js
 │   ├─ SignIn.js
 │   └─ SignUp.js
 ├─ assets/
 │   ├─ images/
 │   └─ icons/
 ├─ context/
 │   └─ AuthContext.js
 ├─ routes/
 └─ public/
```

The structure is intentionally simple and explicit to keep domain logic clear and maintainable.

---

## ⚡ Getting Started

### Prerequisites

- Node.js 18+
- yarn
- Firebase account (for authentication)

### Installation

```bash
# Clone the repository
git clone https://github.com/SALVADORPOETA/Empire-sm.git

# Navigate to project directory
cd Empire-sm

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### Development Server

```bash
yarn start
```

The application will be available at:

```
http://localhost:3000
```

### Build for Production

```bash
yarn build
```

---

## 🔐 Authentication

- Users can **sign in** using Google or email/password
- **Protected account page** shows user information and profile picture
- Users can **securely log out** from any page
- Session state is managed via **Firebase Auth Context**
- Unauthorized access is prevented with route guards

---

## 🛒 Products Page

The products section offers a curated marketplace of Roman-themed items:

- **Browse** Roman-themed products
- **Filter by category:** Costumes, Accessories, Toys, Books, Others
- **Filter by price:** $, $$, $$$, $$$$
- Product links open in a new tab
- Placeholder images for missing product photos
- Responsive grid layout for all devices

---

## 🏺 Cultural Sections

The application includes rich, interactive content covering:

- **Culture** — Daily life, social structure, traditions
- **Language** — Latin language, writing systems, evolution
- **Religion** — Gods, temples, rituals, beliefs
- **Morality** — Values, ethics, philosophical perspectives
- **Arts** — Architecture, sculpture, painting, literature
- **History** — Timeline of events, emperors, conquests

All content is served dynamically through the custom API.

---

## 🎨 UI & UX Design

- **Roman-themed color palette:** Red, gold, marble white, bronze
- **Interactive image sliders** for visual storytelling
- **Smooth animations and transitions**
- **Responsive grid layouts** optimized for mobile and desktop
- **Clean typography** with classical design influences
- **Accessible navigation** with intuitive menu structure

---

## 📌 Originality Statement

This project is **100% original**.

- No starter templates were used
- No UI kits were copied
- No tutorial projects were followed
- All components, API structure, content, and logic were independently designed and implemented

Empire-sm was built as a **serious portfolio project**, intended to demonstrate real-world full-stack development capabilities, architectural thinking, and design sensibility.

---

## 👨🏽‍💻 Author

**Salvador Martínez**  
*Full-Stack Developer*

- **GitHub:** [https://github.com/SALVADORPOETA](https://github.com/SALVADORPOETA)
- **LinkedIn:** [https://www.linkedin.com/in/salvador-martinez-sm/](https://www.linkedin.com/in/salvador-martinez-sm/)

---

## ⚖️ License

This is a portfolio project by **Salvador Martínez**.

No commercial use intended.  
All rights reserved to the author.

---

## 💡 Notes

- Designed for **educational, cultural, and portfolio purposes**
- The project demonstrates React best practices, Firebase integration, and custom API development

---

## 🤝 Contributing

This is a personal portfolio project and is not open for contributions at this time.

---

## 📧 Contact

For inquiries, feedback, or collaboration opportunities, please reach out via:

- **LinkedIn:** [Salvador Martínez](https://www.linkedin.com/in/salvador-martinez-sm/)
- **GitHub:** [@SALVADORPOETA](https://github.com/SALVADORPOETA)

---

## 🙏 Acknowledgments

Inspired by the enduring legacy and fascinating history of the Roman Empire.
