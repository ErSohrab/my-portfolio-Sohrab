# My Portfolio Web Page

This project is a fully responsive, interactive personal portfolio website for **Sohrab Ali**. It is built using only HTML, CSS, and JavaScript, with no frameworks or build tools required. The site is designed to be visually appealing, easy to navigate, and accessible on all devices.

---

## 📁 Project Structure

```
My Protfolio Web Page/
├── index.html         # Main HTML file (site structure)
├── style.css          # Custom CSS (site styling, layout, dark mode)
├── script.js          # JavaScript (interactivity, theme, navigation)
├── Images/            # Folder for profile and project images
│   └── profileImage.jpg
├── Sohrab Resume.pdf  # Downloadable resume
└── ... (other assets)
```

---

## 📄 File-by-File Explanation

### 1. `index.html`

**Role:**  
Defines the structure and content of the website.

**Key Sections:**
- **Navigation Bar (`<nav>`)**
  - Contains the site brand, navigation links, dark mode toggle, and mobile menu button.
  - Links to all main sections: Home, Profile, Skills, Projects, Social, Contact Us.
  - Responsive: switches to a hamburger menu on small screens.

- **Hero Section (`#home`)**
  - Displays a profile image, name, and a short introduction.
  - Includes a button to download the resume.

- **Profile Section (`#profile`)**
  - Intended for a detailed personal/professional summary.
  - Can include education, experience, interests, etc.

- **Skills Section (`#skills`)**
  - Lists technical and soft skills, possibly grouped by category.

- **Projects Section (`#projects`)**
  - Showcases selected projects with descriptions and links.

- **Social Section (`#social`)**
  - Provides links to social media profiles (LinkedIn, GitHub, Email, etc.).

- **Contact Us Section (`#contact`)**
  - Contains a contact form for visitors to send messages.

- **Footer**
  - Displays copyright.
  - Shows the current year (updated automatically by JS).

**How it works:**  
The HTML is organized with semantic tags and classes for styling and scripting. All navigation is handled via anchor links (`#section`) for smooth scrolling.

---

### 2. `style.css`

**Role:**  
Handles all visual styling, layout, and responsive design.

**Key Features:**
- **CSS Reset & Base Styles**
  - Ensures consistent appearance across browsers.
  - Uses a modern, clean font (Inter).

- **Utility Classes**
  - Inspired by Tailwind CSS for rapid styling (e.g., `.text-center`, `.rounded-lg`, `.shadow-md`).

- **Dark Mode Support**
  - Uses the `.dark` class on the `<html>` element to switch between light and dark themes.
  - CSS variables (`:root`) define color schemes for easy switching.
  - All major elements have dark mode variants.

- **Responsive Design**
  - Uses media queries to adjust layout for mobile, tablet, and desktop.
  - Navigation bar collapses into a hamburger menu on small screens.
  - Grid layouts for skills and projects adapt to screen size.

- **Animations**
  - Fade-in effect for sections as they enter the viewport.
  - Typing effect for the hero title.
  - Button hover and scale effects.

- **Custom Scrollbar**
  - Styles the browser scrollbar for a modern look.

**How it works:**  
Classes are applied in `index.html` to control appearance. The `.dark` class is toggled by JavaScript for theme switching.

---

### 3. `script.js`

**Role:**  
Adds interactivity and dynamic behavior to the site.

**Key Features:**

- **Dark Mode Toggle**
  - Two toggle buttons: one for desktop, one for mobile.
  - Clicking the toggle switches between light and dark themes.
  - The user's preference is saved in `localStorage` and restored on page load.
  - The toggle icon updates (moon for light, sun for dark).

- **Mobile Menu**
  - Hamburger button toggles the mobile navigation menu.
  - Menu links close the menu when clicked.

- **Smooth Scrolling**
  - Clicking a navigation link smoothly scrolls to the target section.
  - Scroll position is adjusted to account for the fixed navbar height.

- **Section Fade-In Animation**
  - Uses the Intersection Observer API to detect when sections enter the viewport.
  - Adds a class to trigger CSS fade-in animations.

- **Dynamic Year**
  - Automatically updates the copyright year.

**How it works:**  
All event listeners and DOM manipulations are set up after the DOM loads. No external libraries are needed.

---

## 🛠️ How to Use & Customize

1. **Download or Clone** the repository.
2. **Open `index.html`** in your browser to view the site.
3. **Customize Content:**
   - Update your name, introduction, and sections in `index.html`.
   - Replace the profile image in the `Images/` folder.
   - Add your resume as `Sohrab Resume.pdf`.
   - Fill in your skills, projects, and social links.
4. **Adjust Styles:**
   - Edit `style.css` to change colors, fonts, or layout.
   - Add or modify utility classes as needed.
5. **Extend Functionality:**
   - Edit `script.js` to add more interactivity or features.

---

## 🌟 Features in Detail

- **Dark/Light Mode:**  
  Users can toggle between dark and light themes. The site remembers their choice for future visits.

- **Responsive Navigation:**  
  The navigation bar adapts to all screen sizes, with a hamburger menu for mobile.

- **Animated Sections:**  
  Sections fade in as you scroll, creating a modern, engaging experience.

- **Smooth Scrolling:**  
  Navigation links smoothly scroll to the correct section, accounting for the navbar.

- **Contact Form:**  
  A simple form for visitors to reach out (can be connected to services like Formspree).

- **Downloadable Resume:**  
  Visitors can download your resume directly from the site.

- **Social Links:**  
  Quick access to your LinkedIn, GitHub, and email.

---

## 📝 Credits

- **Design & Development:** Sohrab Ali
- **Icons:** [Font Awesome](https://fontawesome.com/)
- **Fonts:** [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

---

## 📬 Contact

For questions or feedback, use the contact form on the site or email:  
[ersohrab8273@gmail.com](mailto:ersohrab8273@gmail.com)

---

**Feel free to use this template for your own portfolio!**