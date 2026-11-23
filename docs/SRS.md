# Software Requirements Specification (SRS)

**Project Name:** OnlineBuy  
**Document Version:** 1.0  
**Date:** 23 November 2026  

---

## 1. Introduction

### 1.1 Purpose
The purpose of this project is to develop a simple and responsive e-commerce website where users can browse products, view products by category, view product details, and manage their shopping cart.

### 1.2 Project Scope
The application will contain four main pages:
* Home Page
* Product Details Page
* Category Products Page
* Cart Page

Product information will be fetched dynamically using the DummyJSON API. Cart information will be managed using Redux Toolkit and stored in browser Local Storage.

---

## 2. Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React.js** | Frontend development |
| **Vite** | Development and build tool |
| **JavaScript** | Programming language |
| **Tailwind CSS** | UI styling |
| **Redux Toolkit** | State management |
| **React Router DOM** | Page navigation |
| **DummyJSON API** | Product data source |
| **Browser Local Storage** | Cart data persistence |
| **Render** | Application deployment |

---

## 3. Functional Requirements

### 3.1 Home Page
* Display all available products.
* Fetch product information from the DummyJSON API.
* Display all available product categories.
* Allow users to browse products by category.
* Display product images, names, and prices.
* Provide an option to add products to the cart.
* Provide navigation to other pages.
* Display the cart item count.

### 3.2 Product Details Page
* Display the selected product's details.
* Show product image, name, price, description, and rating.
* Fetch individual product information using the product ID.
* Provide an Add to Cart option.
* Allow users to select product quantity.

### 3.3 Category Products Page
* Display products based on the selected category.
* Fetch category-wise products from the DummyJSON API.
* Display product images, names, and prices.
* Allow users to add products to the cart.

### 3.4 Cart Page
* Display all products added to the cart.
* Display product image, name, and price.
* Allow users to increase or decrease product quantity.
* Allow users to remove products from the cart.
* Calculate and display the total cart amount.
* Display the total number of cart items.
* Display an appropriate message when the cart is empty.

---

## 4. API Integration Requirements

### 4.1 API Information
* **API Provider:** DummyJSON
* **Base API URL:** `https://dummyjson.com`

### 4.2 API Endpoints

| Purpose | HTTP Method | Endpoint |
| :--- | :--- | :--- |
| Get all products | `GET` | `/products` |
| Get single product | `GET` | `/products/:id` |
| Get all categories | `GET` | `/products/categories` |
| Get category products | `GET` | `/products/category/:categoryName` |

### 4.3 API Usage
* **Home Page:** Fetch all products and categories.
* **Product Details Page:** Fetch individual product details using product ID.
* **Category Products Page:** Fetch products based on the selected category.
* **Cart Page:** Display products managed by Redux Toolkit.

### 4.4 API Requirements
* Use JavaScript Fetch API or Axios for API communication.
* Handle API loading states.
* Handle API errors.
* Display product information dynamically.
* Use product IDs to identify products.
* Do not hardcode product information.

> **Note:** DummyJSON is a sample API. Product modifications are simulated and are not permanently stored on the server.

---

## 5. State Management and Local Storage

Redux Toolkit will be used to manage the application state.

### 5.1 Cart State
The cart should contain:
* Product ID
* Product name
* Product image
* Product price
* Product quantity
* Total cart amount

### 5.2 Cart Operations
* Add product to cart.
* Remove product from cart.
* Increase product quantity.
* Decrease product quantity.
* Calculate total price.
* Calculate total cart item count.

### 5.3 Local Storage Integration
* Cart data must be stored in browser Local Storage.
* Redux Toolkit will manage the cart state.
* Whenever a product is added, removed, or its quantity changes, the updated cart data must be saved to Local Storage.
* When the application loads, cart data must be retrieved from Local Storage.
* Cart data should remain available after refreshing or reopening the browser.
* If no cart data exists in Local Storage, initialize the cart with an empty array.

* **Local Storage Key:** `cartItems`
* **Storage Format:** JSON

**Example:**
```json
{
  "cartItems": [
    {
      "id": 1,
      "title": "Product Name",
      "price": 100,
      "thumbnail": "product-image-url",
      "quantity": 2
    }
  ]
}
```

### 5.4 Data Storage Requirements

| Data | Storage Location |
| :--- | :--- |
| **Product information** | DummyJSON API |
| **Cart information** | Browser Local Storage |
| **Cart state** | Redux Toolkit |
| **User information** | Not applicable in Version 1.0 |

---

## 6. Routing Requirements

React Router DOM will be used for navigation between the four pages.

| Page | Route |
| :--- | :--- |
| **Home Page** | `/` |
| **Product Details Page** | `/product/:id` |
| **Category Products Page** | `/category/:categoryName` |
| **Cart Page** | `/cart` |

---

## 7. Non-Functional Requirements
* The website should have a simple and user-friendly interface.
* The application should be responsive on desktop, tablet, and mobile devices.
* The application should provide smooth navigation.
* API data should load efficiently.
* The application should handle API errors properly.
* Redux Toolkit should manage cart state.
* Local Storage should maintain cart data between sessions.
* The application should follow a reusable component structure.

---

## 8. UI Requirements

### 8.1 Brand Kit Reference
The application's UI design must follow the provided Brand Kit file:
* Use brand colors defined in the Brand Kit.
* Follow the specified typography and font styles.
* Maintain consistent button and component styles.
* Follow the defined spacing and layout guidelines.
* Use consistent visual elements across all four pages.
* Maintain brand identity throughout the application.

### 8.2 General UI Requirements
* Use Tailwind CSS for styling.
* Maintain a consistent design across all pages.
* Display products using reusable product cards.
* Provide a navigation bar with a cart icon.
* Display the cart item count in the navigation bar.
* Show appropriate loading and error messages.
* Provide a user-friendly empty cart message.
* Ensure responsive layouts for different screen sizes.

---

## 9. Deployment Requirements
* Use Vite to build the production application.
* Deploy the application using Render.
* Configure the production build command.
* Configure the publish directory.
* Configure SPA rewrite rules so React Router routes work after deployment.
* Verify that all four pages work correctly in production.

* **Build Command:** `npm run build`
* **Publish Directory:** `dist`

---

## 10. Future Enhancements
The following features may be included in future versions:
* User registration and login.
* Product filtering and sorting.
* Wishlist functionality.
* Checkout functionality.
* Online payment integration.
* Order history.
* User profile management.

---

## 11. Conclusion
This project aims to develop a simple and responsive e-commerce website using React and modern frontend technologies.

Version 1.0 focuses on product browsing, category-based product listing, product details, API integration, and shopping cart management.

The application will use DummyJSON as the product data source, Redux Toolkit for state management, Local Storage for cart persistence, React Router DOM for navigation, Tailwind CSS for styling, and Render for deployment.