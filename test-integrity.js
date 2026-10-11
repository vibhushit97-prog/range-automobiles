// Automated Data & Integrity Verification Test
import { PRODUCTS } from "./src/data/products.js";
import { SPARE_PARTS } from "./src/data/parts.js";
import { COMPANY } from "./src/config/company.js";

console.log("--------------------------------------------------");
console.log("Range Automobiles Pvt. Ltd. - Integrity Test Suite");
console.log("--------------------------------------------------");

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. Company Information Checks
assert(COMPANY.name === "Range Automobiles Pvt. Ltd.", "Company name is exactly 'Range Automobiles Pvt. Ltd.'");
assert(COMPANY.factory.area.includes("Faridabad"), "Factory address specifies Faridabad, Haryana");
assert(COMPANY.office.street.includes("Kirari Suleman Nagar") && COMPANY.office.city.includes("New Delhi"), "Office address specifies Kirari Suleman Nagar, New Delhi");
assert(COMPANY.contact.phone.includes("8539833116"), "Official phone is verified (+91 8539833116)");
assert(COMPANY.contact.whatsappNumber === "918539833116", "Dedicated WhatsApp number is verified (+91 8539833116)");
assert(COMPANY.contact.email === "rangeautomobiles110086@gmail.com", "Support/sales email is verified (rangeautomobiles110086@gmail.com)");
assert(COMPANY.contact.isPlaceholder === false, "Contact status is verified (not placeholder)");

// 2. Product Catalog Checks
const expectedIds = ["sky-star", "sky-star-li", "sky-star-ldr"];
assert(PRODUCTS.length === 3, "Product catalog contains exactly 3 models");

expectedIds.forEach(id => {
  const prod = PRODUCTS.find(p => p.id === id);
  assert(prod !== undefined, `Product model '${id}' exists`);
  if (prod) {
    assert(prod.heroImage.length > 0, `${id} has verified hero image`);
    assert(prod.specifications.length > 0, `${id} has model-specific specifications table`);
    assert(prod.specifications.some(s => s.value.includes("CY Gold")), `${id} lists CY Gold motor/controller`);
  }
});

// Specific checks
const skyStar = PRODUCTS.find(p => p.id === "sky-star");
assert(skyStar.category === "Passenger E-Rickshaw", "Sky Star is Passenger E-Rickshaw");

const skyStarLdr = PRODUCTS.find(p => p.id === "sky-star-ldr");
assert(skyStarLdr.category === "Loader E-Rickshaw", "Sky Star Ldr is Loader E-Rickshaw");
const payloadSpec = skyStarLdr.specifications.find(s => s.label.includes("Payload"));
assert(payloadSpec && payloadSpec.value === "310 kg", "Sky Star Ldr has 310 kg payload specification");

// 3. Spare Parts Checks
assert(SPARE_PARTS.length >= 6, `Spare parts inventory contains ${SPARE_PARTS.length} OEM components`);
SPARE_PARTS.forEach(part => {
  assert(part.compatibility.length > 0, `Part '${part.name}' defines confirmed compatibility`);
  assert(part.badge.length > 0, `Part '${part.name}' has verified quality badge`);
});

// 4. UI/UX Refinement & Design Token Checks
import fs from "fs";
const cssContent = fs.readFileSync("./src/index.css", "utf-8");

const requiredTokens = [
  "--bg-primary: #171A18",
  "--bg-secondary: #1E2420",
  "--bg-surface: #252D28",
  "--bg-elevated: #2D3730",
  "--brand-green: #76C442",
  "--brand-green-bright: #91D957",
  "--brand-green-dark: #315B35",
  "--border-subtle: #3A463D",
  "--text-white: #F4F7F3",
  "--text-secondary: #B9C5BA",
  "--text-muted: #8F9D91",
  "--whatsapp-green: #25D366"
];

requiredTokens.forEach(token => {
  assert(cssContent.includes(token), `Design token defined: ${token}`);
});

// Check removal of purple gradients and old brand red in src/
assert(!cssContent.includes("#E11D48"), "Old brand red (#E11D48) removed from index.css");
assert(!cssContent.includes("purple"), "Purple gradient references removed from index.css");
assert(cssContent.includes("object-fit: contain"), "Image contain rule defined for vehicle presentation without clipping");
assert(cssContent.includes(".passenger-showcase-card"), "Passenger 2-column showcase card defined");
assert(cssContent.includes(".btn-primary"), "Primary button (Request Quote) class defined");
assert(cssContent.includes(".btn-secondary"), "Secondary button (Become a Dealer) class defined");

console.log("--------------------------------------------------");
console.log(`Test Execution Finished: ${passCount} Passed, ${failCount} Failed.`);
console.log("--------------------------------------------------");

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
