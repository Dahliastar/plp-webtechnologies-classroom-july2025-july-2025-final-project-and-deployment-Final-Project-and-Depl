
## Live Page on GitHub Pages: https://dahliastar.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/

---

# **Riverstone Law Firm Website**

A clean, fully responsive, multi-page website created for **Riverstone Law Firm**.
The project includes a professional homepage, About page, Services page, and Contact page with a custom JavaScript form validator.

---

## 📌 **Overview**

This website is designed to provide a strong professional presence for the Riverstone Law Firm.
It includes a polished design, responsive layout, and a functional contact form with JavaScript validation.

**Key features:**

* Responsive navigation bar across all pages
* Professional hero section on the homepage
* Overview of the firm's values
* Individual pages for:
  ✔ About the firm
  ✔ List of services
  ✔ Contact form
* JavaScript-powered form validation
* Clean and modern styling using CSS with media queries

---

## 📁 **File Structure**

```
project/
│
├── index.html          # Homepage
├── about.html          # Firm history + mission
├── services.html       # List of services offered
├── contact.html        # Contact form + JS validation
│
├── styles/
│   └── styles.css      # Visual styling + mobile responsiveness
│
└── scripts/
    └── main.js         # Contact form validation logic
```

---

## 🧱 **Technologies Used**

* **HTML5** — semantic page structure
* **CSS3** — design, styling, responsive media queries
* **JavaScript** — contact form validation

---

## 🏠 **Homepage Summary (`index.html`)**

The homepage includes:

### **Navigation Bar**

Links to all main pages:

* Home
* About
* Services
* Contact

### **Hero Section**

A large banner featuring:

* Main headline: *“Your Trusted Legal Partner”*
* Supporting paragraph introducing the firm's values

### **Main Content**

Includes:

* Welcome section
* Short overview of firm experience
* Card component with bullet points explaining why clients should choose the firm

### **Footer**

Uniform footer across all pages:

```
© 2025 Riverstone Law Firm — All Rights Reserved
```

---

## 💬 **Contact Form Validation (main.js)**

The **JavaScript file (`main.js`)** provides client-side validation for the contact form located on `contact.html`.

### **Validation Features**

✔ Shows error messages below each field
✔ Highlights invalid fields with a red border
✔ Checks for:

* Empty name field
* Proper email format
* Message length (minimum 10 characters)

✔ Clears errors when input is corrected
✔ Displays a success alert when the form is valid
✔ Prevents form submission for demo purposes (you can change this anytime)

### **Key Functions**

| Function                    | Purpose                                   |
| --------------------------- | ----------------------------------------- |
| `showError(input, message)` | Displays error text and highlights field  |
| `clearError(input)`         | Removes error text and highlight          |
| `isValidEmail(email)`       | Regex-based email validation              |
| `validateForm()`            | Main function controlling all form checks |

To enable validation, the **contact form** should include:

```html
<form id="contactForm" onsubmit="return validateForm()">
```

---

## 📱 **Responsive Design**

The stylesheet includes **tablet and mobile media queries**, ensuring that:

* Navigation stacks vertically on mobile
* Text and spacing adjust for small screens
* Buttons and forms are easier to tap
* Images scale properly across devices

This ensures an excellent user experience on phones, tablets, and desktops.

---

## ▶️ **How to Run the Website**

1. Download or clone the project.
2. Maintain the folder structure (especially `/styles` and `/scripts`).
3. Open **index.html** in a browser.
4. Navigate using the menu.
5. Test the contact form validation on `contact.html`.

---
