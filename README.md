# Range Automobiles Pvt. Ltd. — Official Corporate & Dealership Web Portal

A high-performance, production-ready automotive website and lead-generation platform for **Range Automobiles Pvt. Ltd.**, an Indian electric vehicle manufacturer producing passenger and cargo loader e-rickshaws.

---

## 🏢 Company Profile & Locations

- **Company Name**: Range Automobiles Pvt. Ltd.
- **Official Brand Logo & Colors**: Electric Leaf Green (`#7AC142`), Metallic White, and Automotive Charcoal
- **Customer Care Calling Number**: +91 85398 33116
- **Dedicated Business WhatsApp**: +91 85398 33116
- **Support & Sales Email**: rangeautomobiles110086@gmail.com
- **Business Operations**: Manufacturing and assembly of passenger and loader electric rickshaws.
- **Manufacturing & Assembly Plant**: Faridabad, Haryana, India.
- **Corporate & Sales Office**: 1st Floor, Shani Bajar, Kirari Suleman Nagar, Inder Enclave, New Delhi – 110086, India.
- **Powertrain Partner**: CY Gold Motors & Intelligent Controllers.

---

## ⚡ Core Vehicle Lineup & Technical Specifications

| Model | Category | Powertrain | Listed Speed | Listed Range | Charging Duration | Payload Rating |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Sky Star** | Passenger E-Rickshaw | CY Gold Motor & Controller | 25 km/h | 110 km / chg* | Lead: 7h / Lithium: 4h (25A Charger) | Passenger Cabin |
| **Sky Star Li** | Passenger (Lithium) | CY Gold Motor & Controller | 25 km/h | 110 km / chg* | Lithium: 4h (25A Charger) | Passenger Cabin |
| **Sky Star Ldr** | Commercial Cargo Loader | CY Gold Motor & Controller | 25 km/h | 110 km / chg* | Lead: 7h / Lithium: 4h (25A Charger) | **310 kg** |

*\*Note: Range and charging metrics are provisional manufacturer listings subject to operational road and payload conditions.*

---

## 📁 Architecture & Page Structure

1. **Home (`/#/`)**: Hero section featuring genuine assembly photographs, vehicle category cards, featured model comparisons, manufacturing highlights, and verified engineering benchmarks.
2. **Passenger E-Rickshaws (`/#/passenger`)**: Sky Star and Sky Star Li deep dive, battery chemistry comparison (Lead-Acid vs. Lithium-Ion), and quote triggers.
3. **Loader E-Rickshaws (`/#/loader`)**: Sky Star Ldr cargo vehicle showcase, commercial urban logistics applications, and 310 kg payload advantages.
4. **Individual Product Details (`/#/products/:id`)**: Photo gallery switcher, full model-specific specifications table with provisional badges, battery dynamics, and direct WhatsApp / quote buttons.
5. **Spare Parts & Accessories (`/#/spare-parts`)**: Filterable OEM components catalog (CY Gold motors, 25A chargers, suspensions, curved glass windshields) with inquiry-based ordering.
6. **About Range Automobiles (`/#/about`)**: Company background, manufacturing principles, and verified factory/office location verification.
7. **Manufacturing & Assembly (`/#/manufacturing`)**: 6-stage production workflow, authentic Faridabad plant photography gallery, and testing protocol.
8. **Dealer / Distributor Acquisition (`/#/dealership`)**: Comprehensive dealership registration form with client validation, territory selection, and CRM lead capture.
9. **Contact Us (`/#/contact`)**: Separate addresses for Faridabad plant and Delhi office, interactive map lookup links, and general enquiry desk.
10. **Privacy Policy (`/#/privacy-policy`) & Terms (`/#/terms`)**: Legally transparent statements regarding data collection and provisional technical specifications.
11. **Internal Lead Desk / Admin (`/#/admin`)**: PIN-protected (`range2026`) local CRM portal for reviewing dealer applications, quotation leads, parts inquiries, and exporting to CSV.

---

## 🚀 Quick Start (Local Run)

```bash
# 1. Navigate to the project directory
cd range-automobiles

# 2. Install dependencies
npm install

# 3. Run automated integrity test suite
node test-integrity.js

# 4. Start the local development server
npm run dev

# 5. Build for production
npm run build

# 6. Preview the production build locally
npm run preview
```

---

## 🌐 Deployment Instructions

### Option 1: Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Import the project in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Configure environment variables from `.env.example`.

### Option 2: Netlify
1. Drag and drop the `dist/` directory into Netlify Drop, or connect via Git.
2. Build command: `npm run build`.
3. Publish directory: `dist`.

### Option 3: Traditional Apache / Nginx / Shared Hosting (cPanel)
1. Run `npm run build`.
2. Upload the contents of the `dist/` directory directly into your web root (e.g., `public_html/`).

---

## 🔒 Environment Variables

Copy `.env.example` to `.env.local` for local overrides:

```env
VITE_SITE_URL=https://www.rangeautomobiles.com
VITE_COMPANY_NAME="Range Automobiles Pvt. Ltd."
VITE_CONTACT_PHONE="+91 98765 43210"
VITE_WHATSAPP_NUMBER="919876543210"
VITE_CONTACT_EMAIL="info@rangeautomobiles.com"
# Optional external CRM webhook
# VITE_ENQUIRY_WEBHOOK_URL="https://api.yourdomain.com/v1/enquiries"
```

---

## 📋 Outstanding Information for Final Production Signoff

1. **Official Vector Logo & Brand Mark**: Awaiting vector (.svg / .ai / .png) file.
2. **Official Business Phone & WhatsApp**: Currently showing clearly labeled provisional placeholders.
3. **Official Company Domain**: Ready to be linked in production DNS settings.
4. **Official Printed PDF Brochures & ARAI/ICAT Certificates**: Can be linked directly once officially issued.
