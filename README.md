# vue ass-1

This project is a CV landing page built using Vue 3 with Vue Router for navigation. It features a responsive layout with various sections, including a Home page, About page, Portfolio page, and Contact page. Each section is accessible via a fixed navbar and is complemented with a contact form, social links, and a footer.


## Features

### 1. **Home Page**
- Displays a profile picture (PP) and an `h3` job description below it.
- A welcoming introduction to the person or professional behind the CV.

### 2. **About Page**
- Includes two `p` tags that provide a short summary about the person, highlighting key aspects of their background and skills.

### 3. **Portfolio Page**
- Displays images of various projects.
- Each image has a hover effect that reveals a layer with a zoom icon.
- Clicking the zoom icon opens the project image in a separate modal for a closer view.

### 4. **Contact Page**
- Features a simple form that allows users to send messages to the author.

### 5. **App Component**
- The App component includes:
  - **Fixed Navbar Component**: Contains navigation links to the Home, About, Portfolio, and Contact pages.
  - **Fixed Footer Component**: A footer that contains the copyright notice.

### 6. **Contact Component**
- A **Fixed Contact Component** displayed throughout the app, which includes:
  - Social media links (div of social icons).
  - Location information (div showing the author's location).
  - Contact details such as phone number and email.

## Technologies Used

- **Vue 3** - The main framework for building the app.
- **Vue Router** - For navigating between different views/pages (Home, About, Portfolio, Contact).
- **CSS** - For styling the layout and design of the page.
- **Bootstrap** (optional) - For some basic components like the modal and responsive layout.

## Installation

To run this project locally, follow the steps below:

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vue-cv-project.git

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
