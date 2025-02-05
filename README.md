# **Online Shop Website Using HTML, CSS, and JavaScript (Session and Cookies)**  

## **Project Overview**  

This project is a basic online shop website where users can browse products, add them to a shopping cart, and proceed to checkout. The website utilizes:  

- **HTML** for structure  
- **CSS** for styling and responsiveness  
- **JavaScript** for session management and cookies to store cart data  

Additionally, it includes user authentication (login/logout functionality) to ensure secure access to the shopping pages.  

---

## **Demo**  

Check out the live demo here:  

[**Online Game Shopping Website Demo**](https://parthasarathy27.github.io/OnlineGameShopping-Website/index.html)  

---

## **Repository**  

Find the complete source code at:  

[**GitHub Repository**](https://github.com/parthasarathy27/OnlineGameShopping-Website)  

---

## **Features**  

### **1. User Authentication**  
- **Login Page:** Users enter credentials to access the shopping pages.  
- **Logout Functionality:** Clears session and cookies for security.  

### **2. Cart Management**  
- Products can be added to the cart, and the total amount updates dynamically.  
- Cart data persists across pages using **session and cookies**.  

### **3. Multi-Page Shopping Experience**  

The website consists of four main pages:  

- **Page 1:** Displays a list of products with images and prices. Users can add products to their cart and move to the next page.  
- **Page 2:** Another product selection page with different items. The session maintains cart data across pages.  
- **Page 3:** Displays the total amount of selected products and provides a "Checkout" button.  
- **Page 4 (Checkout):** Final page where users can complete their purchase.  

---

## **File Structure**  

```
/OnlineShop/
│── index.html           # Login/Register Page
│── page1.html           # Product Selection Page 1
│── page2.html           # Product Selection Page 2
│── page3.html           # Product Selection Page 3
│── page4.html           # Checkout Page
│── styles.css           # Global Stylesheet
│── assets/              # Images, Icons, etc.
│   ├── logo.jpg
│   ├── product1.jpg
│   ├── product2.jpg
│── js/
│   ├── auth.js          # User Authentication
│   ├── cart.js          # Cart Management
│   ├── session.js       # Session Handling
│── README.md            # Project Overview & Setup Instructions
```

---

## **Technologies Used**  

- **HTML** → Structuring the web pages  
- **CSS** → Styling and making the website responsive  
- **JavaScript** → Handling session, cookies, cart management, and authentication  

---

## **Setup Instructions**  

Follow these steps to run the project locally:  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/parthasarathy27/OnlineGameShopping-Website.git
   ```  

2. **Navigate to the project directory:**  
   ```bash
   cd OnlineGameShopping-Website
   ```  

3. **Open `index.html` in a web browser to start the application.**  

---

## **How It Works**  

1. **Login Page:**  
   - Users sign in to access shopping pages.  
   - Credentials are validated to start a session.  

2. **Product Selection Pages (Page 1, Page 2, Page 3):**  
   - Users browse products, add them to their cart, and proceed to the next pages.  
   - The cart is managed using JavaScript with session and cookies to store selected products and their prices.  

3. **Checkout Page (Page 4):**  
   - Displays the total amount for all selected products.  
   - A "Checkout" button allows users to complete their purchase.  

4. **Logout:**  
   - When the user logs out, the session and cookies are cleared.  
   - The user is redirected to the login page for security.  

---
