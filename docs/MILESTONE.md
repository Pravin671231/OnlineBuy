# PROJECT MILESTONE DOCUMENT

**Project Name:** OnlineBuy   
**Document Version:** 1.0  

**Related Documents:**
* `SRS_Version_1.0.md`
* `BRAND_KIT.md`

---

## 1. Project Overview

The objective is to develop a responsive OnlineBuy   where users can browse products, view products by category, view product details, and manage their shopping cart.

The project will be completed through two major milestones (**Milestone 0** and **Milestone 1**), using Semantic Versioning Git tags and GitHub Releases to track deployment checkpoints.

---

## 2. MILESTONE 0 – PROJECT SETUP & INITIAL DEPLOYMENT

**Objective:** Initialize the React application, configure the development environment, and complete the initial Render deployment.  
**Target Release Tag:** `v0.1.0` (Pre-release)

### Issue 0.1 – React Project Setup

**Tasks:**
* [ ] Initialize React application using Vite.
* [ ] Configure JavaScript.
* [ ] Install and configure Tailwind CSS.
* [ ] Install Redux Toolkit and React Redux.
* [ ] Install React Router DOM.
* [ ] Install React Icons.
* [ ] Create project folder structure.
* [ ] Configure application entry point.
* [ ] Configure basic application routing.
* [ ] Initialize Git repository.
* [ ] Create GitHub repository.
* [ ] Push initial project code to GitHub.

**Deliverables:**
* React + Vite project.
* Configured dependencies.
* GitHub repository.
* Basic application structure.

**Completion Criteria:**
* Application runs successfully.
* Required dependencies are installed.
* Initial source code is pushed to GitHub.

### Issue 0.2 – Initial Render Deployment Setup

**Objective:** Configure the initial deployment environment before starting feature development.

**Tasks:**
* [ ] Connect GitHub repository to Render.
* [ ] Create a Render Static Site.
* [ ] Configure build command.
* [ ] Configure publish directory.
* [ ] Configure SPA rewrite rules for React Router DOM.
* [ ] Deploy the initial React + Vite application.
* [ ] Verify the public deployment URL.
* [ ] Enable automatic deployment from GitHub if required.
* [ ] Create annotated Git tag `v0.1.0` and publish pre-release on GitHub.

**Deployment Configuration:**

| Configuration | Value |
| :--- | :--- |
| **Platform** | Render |
| **Service Type** | Static Site |
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |
| **Source** | GitHub Repository |

**Deliverables:**
* Initial Render deployment.
* Public application URL.
* GitHub deployment integration.
* GitHub Release `v0.1.0`.

**Completion Criteria:**
* Initial application deploys successfully.
* Public URL is accessible.
* React Router SPA fallback is configured.
* GitHub deployment integration works.
* Tag `v0.1.0` is pushed and published as a GitHub pre-release.

### Milestone 0 Completion Criteria
* React project setup is completed.
* Required dependencies are configured.
* GitHub repository is available.
* Initial Render deployment is successful.
* Public application URL is available.
* Release `v0.1.0` is published.

---

## 3. MILESTONE 1 – APPLICATION FEATURES & FINAL DEPLOYMENT

**Objective:** Develop all application features, integrate APIs, implement cart functionality, test the application, and verify production deployment.  
**Target Release Tag:** `v1.0.0` (Production Release)

### Issue 1.1 – Common Components Development

**Tasks:**
* [ ] Develop `Navbar` component.
* [ ] Develop `Footer` component.
* [ ] Develop `ProductCard` component.
* [ ] Develop `CategoryCard` component.
* [ ] Develop `ProductGrid` component.
* [ ] Develop `QuantitySelector` component.
* [ ] Develop reusable buttons.
* [ ] Develop loading components.
* [ ] Develop error components.
* [ ] Develop empty cart component.

**Deliverables:**
* Reusable React components.
* Common application layout.

**Completion Criteria:**
* Components are reusable.
* Components follow Brand Kit guidelines.
* Components are responsive.

### Issue 1.2 – DummyJSON API Integration

**Tasks:**
* [ ] Configure API service.
* [ ] Integrate Get All Products API.
* [ ] Integrate Get Product Details API.
* [ ] Integrate Get Categories API.
* [ ] Integrate Get Category Products API.
* [ ] Handle API loading states.
* [ ] Handle API errors.

**API Base URL:** `https://dummyjson.com`

**API Endpoints:**

| Purpose | Endpoint |
| :--- | :--- |
| **All Products** | `/products` |
| **Single Product** | `/products/:id` |
| **All Categories** | `/products/categories` |
| **Category Products** | `/products/category/:categoryName` |

**Deliverables:**
* API service.
* Working API integration.

**Completion Criteria:**
* Product information loads dynamically.
* Categories load correctly.
* API errors are handled properly.

### Issue 1.3 – Home Page Development

**Tasks:**
* [ ] Display all products.
* [ ] Display product categories.
* [ ] Develop responsive product grid.
* [ ] Display product images, names, and prices.
* [ ] Implement Add to Cart functionality.
* [ ] Implement navigation to product details.
* [ ] Implement navigation to category products.

**Deliverable:** Functional Home Page.

**Completion Criteria:**
* All products display correctly.
* Categories display correctly.
* Product navigation works.

### Issue 1.4 – Product Details Page Development

**Tasks:**
* [ ] Fetch individual product details.
* [ ] Display product image.
* [ ] Display product name and price.
* [ ] Display product description and rating.
* [ ] Display stock information when available.
* [ ] Implement quantity selector.
* [ ] Implement Add to Cart functionality.

**Deliverable:** Functional Product Details Page.

**Completion Criteria:**
* Product details load correctly.
* Quantity selection works.
* Add to Cart functionality works.

### Issue 1.5 – Category Products Page Development

**Tasks:**
* [ ] Fetch products based on category.
* [ ] Display selected category name.
* [ ] Display category-wise products.
* [ ] Implement product navigation.
* [ ] Implement Add to Cart functionality.

**Deliverable:** Functional Category Products Page.

**Completion Criteria:**
* Category products display correctly.
* Category navigation works.
* Products can be added to the cart.

### Issue 1.6 – Redux Toolkit & Local Storage Integration

**Tasks:**
* [ ] Configure Redux Store.
* [ ] Create Cart Slice.
* [ ] Implement Add to Cart.
* [ ] Implement Remove from Cart.
* [ ] Implement Increase Quantity.
* [ ] Implement Decrease Quantity.
* [ ] Calculate total cart amount.
* [ ] Calculate total cart item count.
* [ ] Save cart data to Local Storage.
* [ ] Retrieve cart data from Local Storage.

**Local Storage Configuration:**
* **Key:** `cartItems`
* **Format:** `JSON`

**Deliverable:** Redux Toolkit cart management with Local Storage persistence.

**Completion Criteria:**
* Cart operations work correctly.
* Cart total calculates correctly.
* Cart data persists after refreshing the browser.

### Issue 1.7 – Cart Page Development

**Tasks:**
* [ ] Display cart products.
* [ ] Display product images and prices.
* [ ] Implement quantity controls.
* [ ] Implement remove product functionality.
* [ ] Display product subtotal.
* [ ] Display total cart amount.
* [ ] Display empty cart state.
* [ ] Implement Continue Shopping navigation.

**Deliverable:** Functional Cart Page.

**Completion Criteria:**
* Cart products display correctly.
* Quantity updates work.
* Remove functionality works.
* Total amount calculates correctly.

### Issue 1.8 – Testing & Bug Fixing

**Tasks:**
* [ ] Test Home Page.
* [ ] Test Product Details Page.
* [ ] Test Category Products Page.
* [ ] Test Cart Page.
* [ ] Test API integration.
* [ ] Test product navigation.
* [ ] Test category navigation.
* [ ] Test Add to Cart functionality.
* [ ] Test quantity updates.
* [ ] Test Remove from Cart functionality.
* [ ] Test Local Storage persistence.
* [ ] Test responsive layouts.
* [ ] Fix identified bugs.

**Deliverable:** Tested and verified application.

**Completion Criteria:**
* All four pages work correctly.
* API integration works correctly.
* Cart functionality works correctly.
* Responsive layouts are verified.
* No critical bugs remain.

### Issue 1.9 – Final Deployment & Production Verification

**Tasks:**
* [ ] Generate the final production build.
* [ ] Verify production build locally.
* [ ] Push final changes to GitHub.
* [ ] Verify the latest Render deployment.
* [ ] Test all four pages in production.
* [ ] Verify React Router routes.
* [ ] Verify DummyJSON API integration.
* [ ] Verify cart functionality.
* [ ] Verify Local Storage persistence.
* [ ] Fix production deployment issues.
* [ ] Create annotated Git tag `v1.0.0` and publish official GitHub Release.

**Deliverable:** Fully deployed OnlineBuy  & GitHub Release `v1.0.0`.

**Completion Criteria:**
* Latest application version is deployed.
* All four routes work in production.
* API integration works in production.
* Cart functionality works in production.
* No critical production issues remain.
* Tag `v1.0.0` is pushed and published as the latest release on GitHub.

---

## 4. Git Releases & Tagging Strategy

This project follows **Semantic Versioning (`vMAJOR.MINOR.PATCH`)** with annotated Git tags (`git tag -a`) and GitHub Releases to mark verified deployment snapshots.

### Release Schedule

| Milestone | Tag | Release Type | GitHub Release Title | Scope |
| :--- | :--- | :--- | :--- | :--- |
| **M0** | `v0.1.0` | Pre-release | `v0.1.0 - Initial Project Setup & Render Deployment` | React + Vite scaffold, Tailwind CSS, dependencies, initial Render Static Site deployment. |
| **M1 (Optional Checkpoint)** | `v0.5.0` | Pre-release | `v0.5.0 - Core Pages & DummyJSON API Integration` | Common components, API service, Home, Product Details, and Category pages (Issues `1.1`–`1.5`). |
| **M1 (Final)** | `v1.0.0` | Latest Release | `v1.0.0 - Production E-Commerce Release` | Full Redux Toolkit cart, Local Storage persistence, QA testing, and production deployment (Issues `1.1`–`1.9`). |

### Tagging & Release Workflow

1. **Ensure `main` is clean and up to date:**
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Create an annotated tag:**
   ```bash
   git tag -a v1.0.0 -m "Milestone 1: Production OnlineBuy  v1.0.0"
   ```
3. **Push the tag to GitHub:**
   ```bash
   git push origin v1.0.0
   ```
4. **Publish GitHub Release:**
   * Navigate to **Releases → Draft a new release** on GitHub.
   * Select the pushed tag (`v0.1.0` or `v1.0.0`).
   * Click **Generate release notes** to auto-compile commit history and PRs.
   * Mark `v0.1.0` as **Pre-release** and `v1.0.0` as **Latest release**, then click **Publish release**.

---

## 5. Milestone Summary

| Milestone | Description | Target Tag | Issues | Status |
| :--- | :--- | :--- | :--- | :--- |
| **M0** | Project Setup & Initial Deployment | `v0.1.0` | 2 | Pending |
| **M1** | Application Features & Final Deployment | `v1.0.0` | 9 | Pending |

---

## 6. Final Project Deliverables

1. React + Vite application.
2. Configured Tailwind CSS.
3. Reusable React components.
4. DummyJSON API integration.
5. Four functional application pages.
6. Redux Toolkit cart management.
7. Local Storage integration.
8. Responsive application.
9. Tested application.
10. Initial (`v0.1.0`) and final (`v1.0.0`) Render deployments and GitHub Releases.

---

## 7. Project Completion Criteria

The project will be considered complete when:
* All four application pages are developed.
* Product information is retrieved from DummyJSON API.
* Category-wise product browsing works.
* Product details are displayed correctly.
* Shopping cart functionality works correctly.
* Cart information is saved in Local Storage.
* All pages follow the Brand Kit.
* The application is responsive.
* The application is successfully deployed on Render.
* GitHub Release `v1.0.0` is tagged and published.

---

## 8. Conclusion

The OnlineBuy  Version 1.0 will be developed through two major milestones:
* **Milestone 0 (`v0.1.0`):** Focuses on React project setup, dependency configuration, GitHub integration, and initial Render deployment.
* **Milestone 1 (`v1.0.0`):** Focuses on reusable components, API integration, four-page development, Redux Toolkit, Local Storage, testing, and final production verification.

All development activities must follow `SRS_Version_1.0.md` and `BRAND_KIT.md`.