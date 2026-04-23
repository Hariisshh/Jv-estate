# JV Estate — Real Estate Website

A fully functional, professional real estate website for **JV Estate**.

## 🗂 File Structure

```
jv-estate/
├── index.html          ← Homepage
├── listings.html       ← All property listings (with filter)
├── property.html       ← Individual property detail page
├── register.html       ← Client registration (sends email)
├── about.html          ← About the company
├── contact.html        ← Contact form
├── css/
│   └── style.css       ← All styling
├── js/
│   └── main.js         ← All interactivity + property data
└── README.md
```

---

## ✉️ Email Setup (REQUIRED to receive registration emails)

Registration emails are sent to **jvestates.ss@gmail.com** using **EmailJS** (free service).

### Step-by-step:

1. **Sign up** at [https://www.emailjs.com](https://www.emailjs.com) (free account, 200 emails/month)

2. **Add Email Service:**
   - Go to "Email Services" → "Add New Service"
   - Choose **Gmail**
   - Connect your **jvestates.ss@gmail.com** account
   - Copy the **Service ID**

3. **Create Email Template:**
   - Go to "Email Templates" → "Create New Template"
   - Set **To email**: `jvestates.ss@gmail.com`
   - Use these variables in your template:
     ```
     From: {{from_name}} ({{from_email}})
     Phone: {{phone}}
     City: {{city}}
     Interested In: {{interest}}
     Budget: {{budget}}
     Message: {{message}}
     ```
   - Copy the **Template ID**

4. **Get Public Key:**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Update the code** — replace these placeholders in 3 files:

   **In `register.html` and `contact.html` and `property.html`** (line with `emailjs.init`):
   ```js
   emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" });
   // Replace YOUR_PUBLIC_KEY with your actual key
   ```

   **In `js/main.js`** (in the `emailjs.send(...)` calls):
   ```js
   emailjs.send(
     'YOUR_SERVICE_ID',   // ← your Service ID
     'YOUR_TEMPLATE_ID',  // ← your Template ID
     { ... }
   )
   ```

---

## 🏠 Adding New Properties

Open `js/main.js` and add to the `properties` array:

```js
{
  id: 7,                           // unique number
  title: "My New Property",
  type: "Plot",                    // Plot | Building | Site | Commercial
  location: "Location, City",
  area: "2000 sqft",
  facing: "North",
  road: "30ft Road",
  price: "₹35 Lakhs",
  badge: "NEW",                    // HOT | NEW | PREMIUM | "" (none)
  badgeType: "new",                // "new" for green badge, omit for gold
  image: "https://your-image-url.com/photo.jpg",
  desc: "Full description of the property...",
  tags: ["Tag 1", "Tag 2", "Tag 3"]
}
```

> 💡 Use [Unsplash](https://unsplash.com) for free property photos, or upload your own images to the project folder and reference them as `images/your-photo.jpg`.

---

## 🚀 Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `jv-estate`
3. Upload all files (drag & drop in the GitHub web interface, or use Git)
4. Go to **Settings → Pages**
5. Under "Source", select **main branch** → root folder
6. Click **Save** — your site will be live at:
   `https://yourusername.github.io/jv-estate/`

### Option 2: VS Code + Live Server (Local Testing)

1. Open VS Code
2. Install the **Live Server** extension (by Ritwick Dey)
3. Open the `jv-estate` folder in VS Code
4. Right-click `index.html` → **"Open with Live Server"**
5. Site opens at `http://localhost:5500`

### Option 3: Netlify (Free, Custom Domain Ready)

1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `jv-estate` folder onto the Netlify dashboard
3. Site goes live instantly with a free URL
4. Connect a custom domain (e.g., `jvestate.com`) in settings

---

## 🎨 Customization

### Change Colors
Edit CSS variables at the top of `css/style.css`:
```css
:root {
  --green: #1B4332;      /* Main brand color */
  --gold:  #C9A84C;      /* Accent color */
  --cream: #F8F5EF;      /* Background */
}
```

### Change Phone Number / Address
Search for `+91 98765 43210` and `42, Richmond Road` in all HTML files and replace.

### Change Email Address
Search for `jvestates.ss@gmail.com` in all files.

---

## 📋 Features Checklist

- ✅ Homepage with hero, search, featured listings, categories, testimonials
- ✅ Full listings page with type filters (Plots, Buildings, Sites, Commercial)
- ✅ Individual property detail page with enquiry form
- ✅ Registration form that emails jvestates.ss@gmail.com
- ✅ Contact page with form + Google Maps embed
- ✅ About page with team section
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sticky navigation with scroll effects
- ✅ Property wishlist (save/unsave)
- ✅ Scroll animations
- ✅ Toast notifications
- ✅ Back-to-top button

---

## 📞 Support

For any questions, email: **jvestates.ss@gmail.com**
