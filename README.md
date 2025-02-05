# Online Shop Website Using HTML, CSS, and JavaScript (Session and Cookies)

## Project Overview

This project involves developing a basic online shop website where users can browse products, add them to a shopping cart, and proceed to checkout. The website uses HTML for structure, CSS for styling, and JavaScript for session management and cookies to store the cart data. The system includes user authentication (login/logout functionality) to ensure secure access to the shopping pages.

## Demo

You can check out the live demo of the project here:

[Online Game Shopping Website Demo](https://parthasarathy27.github.io/OnlineGameShopping-Website/index.html)

## Repository

The source code for the project is available at the following GitHub repository:

[Online Game Shopping Website Repository](https://github.com/parthasarathy27/OnlineGameShopping-Website)

## Features

### 1. Three Web Pages

- Page 1: Displays a list of products with their images and prices, allowing users to add products to their cart. After selecting products, users can navigate to the next page.
  
- Page 2: A second product selection page, similar to Page 1 but with different products. It maintains the session and adds the newly selected items' cost to the previous total.
  
- Page 3: The final page that displays the total amount of all selected products. It provides a "Checkout" button for users to complete their purchase.

### 2. Cart Management

- Products can be added to the cart, and the total amount is dynamically updated across the pages using session and cookies.
  
- Cart data persists across pages using session and cookies, enabling users to continue shopping and adding products.

### 3. User Authentication

- Login Page: Users can enter their credentials to access the shopping pages.
  
- Logout Functionality: Users can log out, which clears the session and cookies, ensuring secure navigation.

## File Structure

/OnlineShop/
│── index.html           (Login/Register Page)
│── page1.html           (Product Selection Page 1)
│── page2.html           (Product Selection Page 2)
│── page3.html           (Product Selection Page 3 - Checkout)
│── styles.css           (Global Stylesheet)
│── assets/              (Images, Icons, etc.)
│   ├── logo.jpg
│   ├── product1.jpg
│   ├── product2.jpg
│── js/
│   ├── auth.js          (User Authentication)
│   ├── cart.js          (Cart Management)
│   ├── session.js       (Session Handling)
│── README.md            (Project Overview & Setup Instructions)


## Technologies Used

- HTML: For structuring the web pages.
- CSS: For styling the website and making it responsive.
- JavaScript: For implementing session and cookies to manage cart data and user authentication.

## Setup Instructions

To run the project locally:

1. Clone the repository:
   bash
   git clone https://github.com/parthasarathy27/OnlineGameShopping-Website.git
   

2. Navigate to the project directory:
   bash
   cd OnlineGameShopping-Website
   

3. Open the index.html file in your preferred browser to start the application.

## How It Works

1. Login Page: 
   - Users sign in to access the shopping pages. Login credentials are validated to start a session.
  
2. Product Selection Pages (Page 1, Page 2, Page 3): 
   - Users can browse through products, add them to their cart, and proceed through the pages. The cart is managed with JavaScript using session and cookies to store the selected products and their prices.
  
3. Checkout:
   - On the third page, users can see the total amount for all selected products and click on the "Checkout" button to complete the shopping process.

4. Logout: 
   - When the user logs out, the session and cookies are cleared, and the user is redirected to the login page.
'''
