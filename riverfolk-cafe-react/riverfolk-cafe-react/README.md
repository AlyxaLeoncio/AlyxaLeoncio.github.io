# Riverfolk Cafe - React Single Page Application

## 📋 What You Need Before Starting

1. **Node.js** installed on your computer (version 16 or higher)
   - Download from: https://nodejs.org/
   - This includes npm (Node Package Manager)

2. **VS Code** installed
   - Download from: https://code.visualstudio.com/

3. **A web browser** (Chrome, Firefox, Edge, etc.)

---

## 🚀 Step-by-Step Setup Guide

### Step 1: Extract the Project

1. Download and extract the `riverfolk-cafe-react` folder
2. Place it somewhere easy to find (like your Desktop or Documents folder)

### Step 2: Open in VS Code

1. Open **VS Code**
2. Click **File** → **Open Folder**
3. Navigate to and select the `riverfolk-cafe-react` folder
4. Click **Select Folder**

### Step 3: Open the Terminal in VS Code

1. In VS Code, click **Terminal** in the top menu
2. Click **New Terminal**
3. A terminal panel will open at the bottom of VS Code

### Step 4: Install Dependencies

In the terminal that just opened, type this command and press Enter:

```bash
npm install
```

**What this does:** Downloads all the necessary packages (React, React Router, Vite) that the app needs to run.

**Wait time:** This might take 1-3 minutes. You'll see a lot of text scrolling. That's normal!

### Step 5: Start the Development Server

Once the installation is complete, type this command and press Enter:

```bash
npm run dev
```

**What this does:** Starts a local web server and opens your app in the browser.

You should see something like:
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### Step 6: View Your App

1. The app should automatically open in your default browser
2. If it doesn't, manually open your browser and go to: **http://localhost:3000**

🎉 **Congratulations!** Your React app is now running!

---

## 🎯 How to Use the App

### Navigation
All the links in the sidebar work! You can click through:
- **Login** - User login page
- **Home** - Featured coffee beans
- **About** - Company information
- **Contact** - Contact form
- **Profile** - User profile page
- **Products** - Full menu of drinks
- **Cart** - Shopping cart
- **Checkout** - Complete order
- **Confirmation** - Order confirmation

### Features
- ✅ Fully functional navigation (no more page reloads!)
- ✅ Interactive cart with add/remove items
- ✅ Quantity adjustments
- ✅ Checkout process
- ✅ Contact form with validation
- ✅ Login/Signup forms

---

## 🛠️ Common Commands

### Start the App
```bash
npm run dev
```

### Stop the App
Press `Ctrl + C` in the terminal

### Build for Production
```bash
npm run build
```
This creates optimized files in a `dist` folder that you can deploy to a web server.

---

## 📁 Project Structure

```
riverfolk-cafe-react/
├── public/              # Static files (images, logo)
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Nav.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Profile.jsx
│   │   ├── Products.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── Confirmation.jsx
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── style.css       # All your styles
├── index.html          # HTML template
├── package.json        # Project configuration
├── vite.config.js      # Vite configuration
└── README.md          # This file
```

---

## 🔧 Adding Your Images

Your HTML files reference these images:
- logo.png
- silcafe.jpg
- Sagada.jpg
- Beans.jpg
- Latte.jpeg
- iced.jpeg
- matcha.jpeg
- strawberry.jpeg

**To add them:**
1. Place all your images in the `public/` folder
2. They'll automatically be available to the app
3. The image paths in the code already point to `/image.jpg` which means they'll look in the public folder

---

## 💡 Making Changes

### Editing Pages
1. Open any file in `src/pages/` in VS Code
2. Make your changes
3. Save the file (`Ctrl + S`)
4. The browser will automatically refresh! (Hot reload)

### Editing Styles
1. Open `src/style.css`
2. Make changes
3. Save
4. See changes instantly in the browser

---

## ❓ Troubleshooting

### "npm is not recognized"
- You need to install Node.js first
- Download from: https://nodejs.org/
- Restart VS Code after installing

### Port 3000 is already in use
- Another app is using port 3000
- Stop that app, or change the port in `vite.config.js`

### Images not showing
- Make sure images are in the `public/` folder
- Check that file names match exactly (case-sensitive)

### Changes not showing
- Make sure you saved the file (`Ctrl + S`)
- Try refreshing the browser (`Ctrl + R`)
- If still not working, stop the server (`Ctrl + C`) and restart (`npm run dev`)

---

## 🎓 What Changed from HTML to React?

### Before (HTML)
- Multiple separate `.html` files
- Page reloads on every link click
- Duplicated header/nav/footer in every file
- JavaScript in separate files

### After (React)
- Single Page Application (SPA)
- No page reloads - instant navigation
- Header/Nav/Footer components used once
- Everything in JavaScript/JSX components
- React Router handles navigation
- State management for interactive features

---

## 📚 Learn More

- **React Docs:** https://react.dev/
- **React Router:** https://reactrouter.com/
- **Vite:** https://vitejs.dev/

---

## 🎨 Customization Tips

Want to change colors? Look for these in `style.css`:
```css
:root {
    --primary: #1a1a1a;         /* Main brand color */
    --bg-main: #e8dcc8;          /* Background color */
    --card-bg: #f5ede0;          /* Card background */
}
```

---

## ✅ Checklist

- [ ] Node.js installed
- [ ] VS Code installed  
- [ ] Project folder extracted
- [ ] Folder opened in VS Code
- [ ] Terminal opened in VS Code
- [ ] `npm install` completed
- [ ] `npm run dev` running
- [ ] App opens in browser
- [ ] All navigation links work
- [ ] Images added to public folder

---

## 🎉 You're Done!

You now have a fully functional React single page application! All your pages have been converted from static HTML to dynamic React components with working navigation.

**Need help?** Check the troubleshooting section above or search for your error message online.

**Happy coding! ☕**
