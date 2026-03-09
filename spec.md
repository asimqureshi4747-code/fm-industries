# FM Industries Website

## Current State
New project. No existing pages or backend logic.

## Requested Changes (Diff)

### Add
- Homepage with bold hero section (company name, tagline, CTA)
- About Us page with company history, mission, and values
- Products/Services section showcasing steel, flour, and other industrial product categories
- Contact page with contact form and business details
- Navigation bar with links to all pages
- Footer with company info and quick links

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan

### Backend
- Contact form submission: store name, email, phone, subject, and message with timestamp
- Retrieve all contact form submissions (admin use)

### Frontend
- Multi-page React app with React Router (Home, About, Products, Contact)
- Navigation: sticky top nav with FM Industries logo/wordmark, nav links, mobile hamburger menu
- Home page:
  - Full-width hero section with company name, tagline "Strength. Quality. Reliability.", and CTA button
  - Brief intro section with company highlights (founded, products, clients)
  - Product preview cards linking to Products page
  - Trust/stats bar (years in business, products, clients served)
- About page:
  - Company story section
  - Mission and values
  - Team or leadership placeholder
- Products page:
  - Category grid: Steel Products, Flour & Grain, Industrial Supplies, Commercial Goods
  - Each category has icon, name, description, and sample product list
- Contact page:
  - Contact form (name, email, phone, subject, message) with submit
  - Business details (address, phone, email, hours)
  - Success/error states for form submission
- Color palette: dark navy (#0A1628), steel gray (#4A5568), gold/amber accent (#C9A84C), white text on dark backgrounds
