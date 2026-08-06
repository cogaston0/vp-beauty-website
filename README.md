# VP Beauty Aesthetics Place - Website

A professional, responsive website for VP Beauty Aesthetics Place in the Bronx, featuring 23 service offerings across three categories: Facial Cleaning, Facial Rejuvenations, and Massage & Body Treatments.

## 📋 Features

✨ **Comprehensive Service Catalog**
- 6 Facial Cleaning treatments
- 8 Facial Rejuvenation treatments
- 9 Massage & Body Treatment services

🎨 **Professional Design**
- Modern, responsive layout
- Color scheme matching salon branding (purple, pink, brown, cream)
- Elegant typography and spacing
- Mobile-optimized for all devices

📱 **Full-Featured Pages**
- Home page with service overview
- Individual service pages with detailed descriptions
- Contact page with booking form
- Google Map integration
- Professional footer

## 📁 File Structure

```
├── index.html              # Home page
├── facial-cleaning.html    # Facial cleaning services (6 services)
├── facial-rejuvenations.html # Anti-aging treatments (8 services)
├── massages.html           # Massage & body treatments (9 services)
├── contact.html            # Contact & booking page
├── styles.css              # Main stylesheet
└── README.md              # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/beauty-cogaston-0.git
   cd beauty-cogaston-0
   ```

2. **Open in Browser**
   - Double-click `index.html` to open locally, OR
   - Use a local web server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then visit `http://localhost:8000`

## 📸 Adding Photos

Each service page has placeholder image areas. To add your photos:

1. **Save your photos** in the project folder (recommended: create an `images/` folder)

2. **Update the HTML** - Replace image placeholders in each service section:

   **Before:**
   ```html
   <div class="image-placeholder">
       <p>Service Name</p>
       <p class="placeholder-text">Add your photo here</p>
   </div>
   ```

   **After:**
   ```html
   <img src="images/service-name.jpg" alt="Service Name" class="service-photo">
   ```

3. **Add CSS** for the new image class in `styles.css`:
   ```css
   .service-photo {
       width: 100%;
       border-radius: 10px;
       object-fit: cover;
       box-shadow: 0 4px 15px rgba(0,0,0,0.1);
   }
   ```

## 🌐 Deploying to GitHub Pages

### Option 1: Using GitHub Web Interface

1. **Create a new repository**
   - Go to GitHub.com and create a new repo: `beauty-cogaston-0`
   - Description: "Professional website for VP Beauty Aesthetics Place"

2. **Upload files**
   - Click "Add file" → "Upload files"
   - Drag and drop all project files
   - Commit the files

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Select "main" branch
   - Save
   - Wait 2-3 minutes for deployment
   - Your site will be live at: `https://yourusername.github.io/beauty-cogaston-0`

### Option 2: Using Git Command Line

1. **Initialize repository**
   ```bash
   cd /path/to/project
   git init
   git add .
   git commit -m "Initial commit: VP Beauty Aesthetics website"
   ```

2. **Create repository on GitHub**
   - Go to GitHub.com
   - Create new repository named: `beauty-cogaston-0`
   - Copy the repository URL

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/beauty-cogaston-0.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select "main" branch
   - Save
   - Site will be available at: `https://yourusername.github.io/beauty-cogaston-0`

### Option 3: Using GitHub Desktop (Easiest for Beginners)

1. Open GitHub Desktop
2. File → Add Local Repository (select your project folder)
3. Publish repository to GitHub
4. Set repository to "beauty-cogaston-0"
5. Go to repository Settings → Pages
6. Enable GitHub Pages on main branch

## 📝 Customization

### Update Contact Information

Edit the contact details in all files:
- **Address:** 940 E 163rd Street, Bronx, NY 10459
- **Phone:** (646) 735-1099
- **Hours:** Mon-Fri 10AM-8PM, Sat-Sun 10AM-6PM

Search and replace these values throughout:
- `contact.html`
- `footer` sections in all pages

### Modify Color Scheme

Edit the color variables in `styles.css`:

```css
:root {
    --primary-color: #9b6b9e;      /* Main purple */
    --secondary-color: #d4998f;    /* Accent pink */
    --accent-color: #8b6f47;       /* Brown */
    --light-bg: #f5f1ec;           /* Cream background */
    --dark-text: #3a3a3a;          /* Dark text */
    --light-text: #666666;         /* Light gray text */
}
```

### Add New Services

1. Copy a service detail block from an existing page
2. Change the service number, title, and description
3. Add appropriate benefits and process details
4. Leave image placeholder or add actual photo

## 📊 SEO Optimization

Already included:
- Meta viewport for mobile responsiveness
- Descriptive page titles
- H1-H6 heading hierarchy
- Alt text for images (when you add them)
- Mobile-friendly design

To further improve SEO:
1. Add meta descriptions to each page's `<head>`
2. Add schema markup for local business
3. Submit sitemap to Google Search Console

## 🔒 Contact Form Note

The current contact form uses JavaScript to alert users. To actually send emails, you'll need:

**Option A: Formspree (Easy, Free)**
1. Sign up at formspree.io
2. Replace form in contact.html with Formspree code

**Option B: Backend Server (Advanced)**
1. Set up Node.js/PHP backend
2. Create email handler
3. Update form action URL

## 🎯 Next Steps

1. ✅ Customize business information
2. ✅ Add your service photos
3. ✅ Deploy to GitHub Pages
4. ✅ Test all links and forms
5. ✅ Set up email form handling
6. ✅ Share the live URL with clients

## 📱 Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support

For issues or questions:
1. Check the HTML/CSS file comments
2. Validate HTML at validator.w3.org
3. Test responsiveness at responsivedesignchecker.com

## 📄 License

This website is created for VP Beauty Aesthetics Place.

---

**Repository:** beauty-cogaston-0  
**Live Site:** https://yourusername.github.io/beauty-cogaston-0  
**Last Updated:** 2024
<!-- GitHub Pages rebuild trigger -->
