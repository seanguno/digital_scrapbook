# Love Memoir Project Setup

## Prerequisites
1. Install Node.js (version 16 or later)
   - Download from https://nodejs.org/
   - Verify installation with `node --version` and `npm --version`

## Step-by-Step Setup

1. Initialize Project Configuration
   ```bash
   npm init -y
   ```

2. Install Required Dependencies
   ```bash
   npm install react react-dom react-scripts lucide-react tailwindcss
   npm install -D @types/react @types/react-dom
   ```

3. Create React Configuration
   Create a `public/index.html` file:
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>Our Love Story</title>
     </head>
     <body>
       <div id="root"></div>
     </body>
   </html>
   ```

4. Tailwind CSS Configuration
   Create `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

5. Create Source Files
   - Move `scrapbook.js` to `src/index.js`
   - Rename `scrapbook.css` to `src/index.css`
   - Add Tailwind directives to `src/index.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

6. Running the Project
   ```bash
   npm start  # Starts development server
   npm run build  # Creates production build
   ```

## Troubleshooting
- Ensure all dependencies are installed
- Check Node.js and npm versions
- Verify file paths match the project structure

## Notes
- Replace placeholder images in the code
- Use your personal music files
- Customize text and styling as needed


## Outline
- year 1
- year 2
- year 3?