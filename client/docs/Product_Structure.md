# 📁 OnlineBuy Project Structure

```text
OnlineBuy/
│
├── public/
│   └── _redirects
│
├── src/
│   │
│   ├── app/
│   │   └── store.js
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── ErrorMessage.jsx
│   │   │   └── Button.jsx
│   │   │
│   │   └── product/
│   │       ├── ProductCard.jsx
│   │       ├── ProductList.jsx
│   │       └── CategoryList.jsx
│   │
│   ├── features/
│   │   └── cart/
│   │       └── cartSlice.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductDetailsPage.jsx
│   │   ├── CategoryPage.jsx
│   │   └── CartPage.jsx
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── services/
│   │   └── productService.js
│   │
│   ├── hooks/
│   │   └── useCart.js
│   │
│   ├── utils/
│   │   ├── localStorage.js
│   │   └── formatPrice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 📂 Folder Overview

* **`public/`**: Static assets and routing redirect rules (`_redirects` for single-page application hosting).
* **`src/app/`**: Redux store configuration (`store.js`).
* **`src/assets/`**: Static media files such as images and icons.
* **`src/components/`**: Reusable UI components divided into `common` (layout/UI elements) and `product` (domain-specific components).
* **`src/features/`**: Redux Toolkit slices and feature-specific logic (e.g., `cartSlice.js`).
* **`src/pages/`**: Top-level route components representing full application views.
* **`src/layouts/`**: Page wrappers (e.g., `MainLayout.jsx` containing Navbar and Footer).
* **`src/routes/`**: Application routing definitions (`AppRoutes.jsx`).
* **`src/services/`**: API calls and external data fetching logic.
* **`src/hooks/`**: Custom React hooks (`useCart.js`).
* **`src/utils/`**: Helper functions for formatting and browser storage.