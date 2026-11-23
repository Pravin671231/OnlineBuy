# BRAND KIT – E-COMMERCE WEBSITE

**ref to google stitch ai lint (pravinai):** https://stitch.google.com/projects/4519913054107006714

**Project Name:** OnlineBuy
**Brand Kit Version:** 1.0  
**Related Document:** SRS Version 1.0  
**Status:** Initial Design Guidelines  

---

## 1. Brand Overview

### 1.1 Brand Identity
The e-commerce website should have a simple, modern, clean, and user-friendly design.

### 1.2 Design Goals
- Simple and clean interface.
- Easy product browsing.
- Consistent design across all pages.
- Responsive layout for desktop, tablet, and mobile.
- Easy-to-use shopping cart interface.

---

## 2. Color Palette

Use the following colors throughout the application:

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary** | `#2563EB` | Primary buttons, links |
| **Secondary** | `#1E293B` | Headings, navigation |
| **Accent** | `#F59E0B` | Highlights, badges |
| **Background** | `#F8FAFC` | Main page background |
| **Surface** | `#FFFFFF` | Cards and containers |
| **Text Primary** | `#0F172A` | Main text |
| **Text Secondary** | `#64748B` | Secondary text |
| **Border** | `#E2E8F0` | Card and input borders |
| **Success** | `#16A34A` | Success messages |
| **Error** | `#DC2626` | Error messages |

---

## 3. Typography

Use **Inter** as the primary font across the entire application.

| Element | Font Size | Font Weight |
| :--- | :--- | :--- |
| **Main Heading** | 32px | Bold (700) |
| **Section Heading** | 24px | Semi-bold (600) |
| **Card Title** | 18px | Semi-bold (600) |
| **Body Text** | 16px | Regular (400) |
| **Small Text** | 14px | Regular (400) |
| **Button Text** | 14px | Medium (500) |

---

## 4. Layout Guidelines

### 4.1 General Layout
- Use a centered content container.
- Maintain consistent spacing between sections.
- Use a responsive grid for product listings.
- Keep page layouts simple and organized.
- Maintain consistent margins and padding.

### 4.2 Product Grid

| Device | Columns |
| :--- | :--- |
| **Mobile** | 2 |
| **Tablet** | 3 |
| **Desktop** | 4 |
| **Large Desktop** | 5 |

---

## 5. UI Components

### 5.1 Navigation Bar
- White background (`#FFFFFF`).
- Brand logo on the left.
- Navigation links.
- Cart icon on the right.
- Display cart item count.
- Sticky navigation is optional.

### 5.2 Buttons
- **Primary Button**
  - **Background:** Primary color (`#2563EB`)
  - **Text:** White (`#FFFFFF`)
  - **Border radius:** `8px`
  - **Padding:** `12px 20px`
- **Secondary Button**
  - **Background:** White (`#FFFFFF`)
  - **Text:** Primary color (`#2563EB`)
  - **Border:** `1px solid #2563EB`
  - **Border radius:** `8px`
- **Danger Button**
  - **Background:** Error color (`#DC2626`)
  - **Text:** White (`#FFFFFF`)

### 5.3 Product Card
**Content:**
- Product image.
- Product name.
- Product price.
- Product rating (if available).
- Add to Cart button.

**Card Design:**
- White background (`#FFFFFF`).
- Light border (`#E2E8F0`).
- Border radius: `12px`.
- Consistent image dimensions.
- Subtle hover effect.
- Consistent spacing.

### 5.4 Category Navigation
- Display categories as buttons or category cards.
- Use consistent spacing.
- Highlight the selected category.
- Allow users to navigate to category products.

### 5.5 Shopping Cart
- Display product thumbnail.
- Display product name and price.
- Provide quantity controls.
- Provide remove button.
- Display subtotal and total amount.
- Highlight the total amount.

### 5.6 Form Elements
- Rounded input borders.
- Consistent padding.
- Clear labels.
- Visible focus state.
- Consistent error messages.

---

## 6. Page Design Guidelines

### 6.1 Home Page
- Navigation bar.
- Product categories section.
- All products section.
- Responsive product grid.
- Product cards with Add to Cart buttons.

### 6.2 Product Details Page
- Product image section.
- Product title.
- Product price.
- Product description.
- Product rating.
- Quantity selector.
- Add to Cart button.

### 6.3 Category Products Page
- Category title.
- Selected category indication.
- Category-wise product grid.
- Product cards.
- Add to Cart buttons.

### 6.4 Cart Page
- Cart page heading.
- List of cart products.
- Product quantity controls.
- Remove product option.
- Cart total summary.
- Empty cart message when no products exist.

---

## 7. Spacing and Border Guidelines

### 7.1 Spacing Scale

| Size | Value |
| :--- | :--- |
| **Extra Small** | 4px |
| **Small** | 8px |
| **Medium** | 16px |
| **Large** | 24px |
| **Extra Large** | 32px |
| **Section Spacing** | 48px |

### 7.2 Border Radius

| Component | Radius |
| :--- | :--- |
| **Buttons** | 8px |
| **Input Fields** | 8px |
| **Product Cards** | 12px |
| **Containers** | 12px |
| **Badges** | 999px |

---

## 8. Responsive Design

The application must support the following breakpoints using Tailwind CSS responsive utilities:
- **Mobile devices:** `320px` and above.
- **Tablets:** `768px` and above (`md`).
- **Desktop:** `1024px` and above (`lg`).
- **Large screens:** `1280px` and above (`xl`).

---

## 9. Tailwind CSS Guidelines

- Use Tailwind CSS utility classes.
- Maintain reusable UI components.
- Avoid unnecessary inline styles.
- Use consistent spacing and color classes.
- Follow mobile-first responsive design.
- Keep component styling consistent across all pages.

---

## 10. Icon Guidelines

Use **React Icons (`react-icons`)** as the standard icon library throughout the application.

### 10.1 Icon Library
- **Package:** `react-icons`
- **Installation:** `npm install react-icons`
- Use icons from Font Awesome (`react-icons/fa`) or Material Design (`react-icons/md`).
- Maintain consistent icon size, color, and style.
- Avoid mixing too many icon styles.

### 10.2 Recommended Icons

| Purpose | React Icon |
| :--- | :--- |
| **Shopping Cart** | `FaShoppingCart` |
| **Home** | `FaHome` |
| **Product** | `FaBox` |
| **Add Item** | `FaPlus` |
| **Remove Item** | `FaTrash` |
| **Increase Quantity** | `FaPlus` |
| **Decrease Quantity** | `FaMinus` |
| **Menu** | `FaBars` |
| **Close** | `FaTimes` |
| **User** | `FaUser` |
| **Star Rating** | `FaStar` |
| **Back Navigation** | `FaArrowLeft` |
| **Shopping Bag** | `FaShoppingBag` |

### 10.3 Icon Usage Rules
- Use icons from `react-icons`.
- Keep standard icon sizes between `16px` and `24px`.
- Use the primary brand color (`#2563EB`) for important icons.
- Use the error color (`#DC2626`) for delete actions.
- Maintain consistent alignment with text.
- Provide appropriate spacing between icons and labels.
- Use accessible labels (`aria-label`) for icon-only buttons.

### 10.4 Example Usage

```jsx
import {
  FaShoppingCart,
  FaHome,
  FaTrash,
  FaPlus,
  FaMinus
} from "react-icons/fa";

function CartIcon() {
  return <FaShoppingCart size={20} />;
}
```

---

## 11. UI States

All interactive components should support the following states:
- Default state
- Hover state
- Active state
- Focus state
- Disabled state
- Loading state
- Error state
- Empty state

---

## 12. Design Consistency Rules

- Follow the same color palette on all pages.
- Use consistent typography.
- Maintain consistent button styles.
- Use reusable product card components.
- Maintain consistent spacing.
- Ensure responsive layouts.
- Avoid unnecessary animations and visual effects.
- Maintain a clean and simple user experience.

---

## 13. Technology Alignment

| Technology | Responsibility |
| :--- | :--- |
| **React.js** | Reusable UI components |
| **Vite** | Frontend build tool |
| **JavaScript** | UI interactions |
| **Tailwind CSS** | Styling and responsive design |
| **Redux Toolkit** | Cart state management |
| **React Router DOM** | Page navigation |
| **React Icons** | UI icons |

---

## 14. Conclusion

This Brand Kit defines the basic visual design guidelines for the **E-Commerce Website Version 1.0**. All four application pages must follow these guidelines to maintain a consistent, clean, responsive, and user-friendly design. The color palette, typography, spacing, buttons, product cards, icons, and layouts should be implemented consistently using Tailwind CSS and React Icons.