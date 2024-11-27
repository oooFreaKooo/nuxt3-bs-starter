# Nuxt 3 Bootstrap Starter 🚀

A modern Nuxt 3 starter template configured with Bootstrap 5, featuring light/dark theme support and essential development tools.

## Features 🌟

- ⚡️ [Nuxt 3](https://nuxt.com/) - The Intuitive Vue Framework  
- 🎨 [Bootstrap 5](https://getbootstrap.com/) with SCSS support  
- 🌓 Light/Dark theme switcher  
- 🔍 ESLint flat config setup  
- 📦 Yarn v4+ as the package manager  
- 🎯 TypeScript
- 🖼️ Nuxt Image module  
- 🎉 Bootstrap Icons  
- 🔌 Built-in API implementation with CORS support

---
## The Index page 🖼️

![template-page](https://github.com/user-attachments/assets/2b7e71bb-273e-42b2-a636-fbe174ee73cf)

---
## Prerequisites 📋

- **Node.js** (v18+)  
- **Corepack enabled**  

---

## Setup 🛠️

1. Enable Corepack (if not already enabled):  

   ```bash
   sudo corepack enable  # Linux/macOS
   corepack enable       # Windows
   ```

2. Clone the repository:  

   ```bash
   git clone https://github.com/oooFreaKooo/nuxt3bs-starter.git
   cd nuxt3bs-starter
   ```

3. Install dependencies:  

   ```bash
   yarn install
   ```

4. Start the development server:  

   ```bash
   yarn dev
   ```

   Your app should now be running at **http://localhost:3000**

---

## Build for Production 🏗️

1. Build the application:  

   ```bash
   yarn build
   ```

2. Start the production server:  

   ```bash
   yarn start
   ```

---

## Development Tools 🔧

1. **Lint your code**:  

   Run the linter:  

   ```bash
   yarn lint
   ```

   Fix linting issues:  

   ```bash
   yarn lint:fix
   ```

   For the best development experience, install the [ESLint VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and configure it to format on save by adding this to your VSCode settings:

   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```

---

## Project Structure 📁

```plaintext
📦src
 ┣ 📂assets
 ┃ ┗ 📂scss
 ┃ ┃ ┗ 📜main.scss
 ┣ 📂components
 ┃ ┣ 📂Footer
 ┃ ┃ ┗ 📜AppFooter.vue
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜AppHeader.vue
 ┃ ┃ ┗ 📜ThemeButton.vue
 ┃ ┗ 📜MainPage.vue
 ┣ 📂composables
 ┃ ┗ 📜usePage.ts
 ┣ 📂layouts
 ┃ ┗ 📜default.vue
 ┣ 📂pages
 ┃ ┗ 📜index.vue
 ┣ 📂plugins
 ┃ ┗ 📜useBootstrap.client.ts
 ┣ 📂public
 ┣ 📂server
 ┃ ┗ 📂api
 ┃ ┃ ┗ 📜page-data.get.ts
 ┣ 📂utils
 ┃ ┗ 📜theme.ts
 ┣ 📜app.vue
 ┗ 📜error.vue
```

## License 📄

**MIT**

---

Feel free to contribute! 🤝
