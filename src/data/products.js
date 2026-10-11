// Range Automobiles Pvt. Ltd. - Verified Product Catalogue
// Updated with Genuine Factory Photographs for Passenger and Loader E-Rickshaws.

export const PRODUCTS = [
  {
    id: "sky-star",
    slug: "sky-star",
    name: "Sky Star",
    subtitle: "Heavy-Duty Passenger Electric Rickshaw",
    category: "Passenger E-Rickshaw",
    categoryType: "passenger",
    badge: "Flagship Passenger Model",
    isFeatured: true,
    heroImage: "/images/vehicles/sky-star-side-full.jpg",
    gallery: [
      {
        url: "/images/vehicles/sky-star-side-full.jpg",
        caption: "Side three-quarter view showing reinforced stainless steel frame and comfortable cabin"
      },
      {
        url: "/images/vehicles/sky-star-fleet-lineup.jpg",
        caption: "Range Automobiles production lineup at the factory with front windshield and LED bar"
      },
      {
        url: "/images/vehicles/sky-star-side-cabin.jpg",
        caption: "Passenger compartment side profile with cushioned seating and grab handles"
      },
      {
        url: "/images/vehicles/sky-star-rear-view.jpg",
        caption: "Rear exterior showing official Range emblem, Make in India badge, and spare wheel"
      },
      {
        url: "/images/vehicles/sky-star-front-duo.jpg",
        caption: "Front profile highlighting heavy-duty shock absorbers and protective bumper"
      }
    ],
    overview: "The Sky Star is Range Automobiles' premier passenger e-rickshaw, manufactured and assembled with a robust stainless steel body frame, reliable CY Gold powertrain, and high-efficiency electrical system designed for maximum everyday driver earnings and rider comfort.",
    keyPoints: [
      "Heavy-duty stainless steel passenger superstructure with luggage roof rack",
      "Proven CY Gold motor and matched intelligent CY Gold controller",
      "Dual battery compatibility (Lead-acid and Lithium options)",
      "High-output 25 Amp charger included",
      "Ergonomic driver cockpit with wide viewing curved safety windshield"
    ],
    specifications: [
      { label: "Vehicle Category", value: "Passenger E-Rickshaw", verified: true },
      { label: "Electric Motor", value: "CY Gold", verified: true },
      { label: "Motor Controller", value: "CY Gold", verified: true },
      { label: "Listed Speed", value: "25 km/h (Governed for commercial e-rickshaw safety)", verified: true, provisional: true },
      { label: "Listed Driving Range", value: "110 km per charge", verified: true, provisional: true },
      { label: "Battery Chemistry Options", value: "Lead-Acid & Lithium-Ion (Subject to variant configuration)", verified: true, provisional: true },
      { label: "Lead-Acid Charging Time", value: "Approx. 7 Hours", verified: true, provisional: true },
      { label: "Lithium Charging Time", value: "Approx. 4 Hours", verified: true, provisional: true },
      { label: "Battery Charger", value: "25 Amp Smart Charger", verified: true },
      { label: "Windshield Glass", value: "Curved toughened safety glass with electric wiper", verified: true },
      { label: "Spare Wheel", value: "Rear-mounted full-size spare tyre with cover", verified: true }
    ],
    batteryOptions: [
      {
        type: "Lead-Acid Variant",
        chargingTime: "7 Hours",
        charger: "25 Amp",
        range: "110 km (Listed provisional)",
        notes: "Economical initial investment, proven reliability for standard urban route operations."
      },
      {
        type: "Lithium Battery Variant",
        chargingTime: "4 Hours",
        charger: "25 Amp",
        range: "110 km (Listed provisional)",
        notes: "Fast turnaround charging, lighter weight, and high daily vehicle uptime."
      }
    ],
    brochureAvailable: false
  },
  {
    id: "sky-star-li",
    slug: "sky-star-li",
    name: "Sky Star Li",
    subtitle: "Advanced Fast-Charging Lithium Passenger E-Rickshaw",
    category: "Passenger E-Rickshaw",
    categoryType: "passenger",
    badge: "Fast-Charging Lithium",
    isFeatured: true,
    heroImage: "/images/vehicles/sky-star-fleet-lineup.jpg",
    gallery: [
      {
        url: "/images/vehicles/sky-star-fleet-lineup.jpg",
        caption: "Factory floor assembly line featuring Sky Star Li passenger units"
      },
      {
        url: "/images/vehicles/sky-star-side-full.jpg",
        caption: "Ergonomic full body design engineered for low maintenance and longevity"
      },
      {
        url: "/images/vehicles/sky-star-front-duo.jpg",
        caption: "Front suspension detail and heavy-duty shock absorption setup"
      },
      {
        url: "/images/vehicles/sky-star-rear-view.jpg",
        caption: "Rear tailgate with Range branding and regulatory safety reflectors"
      }
    ],
    overview: "Built specifically around advanced Lithium battery integration, the Sky Star Li offers rapid 4-hour charging cycles and optimal power delivery via the CY Gold electric powertrain, significantly minimizing downtime during busy shifts.",
    keyPoints: [
      "Dedicated Lithium battery architecture for fast turnaround",
      "Only 4 hours charging time with supplied 25 Amp charger",
      "CY Gold high-efficiency traction motor and matching controller",
      "Lightweight energy storage footprint for enhanced agility",
      "Stainless steel body construction with robust passenger safety rails"
    ],
    specifications: [
      { label: "Vehicle Category", value: "Passenger E-Rickshaw", verified: true },
      { label: "Battery System", value: "Lithium Battery Variant (Subject to confirmation)", verified: true, provisional: true },
      { label: "Electric Motor", value: "CY Gold", verified: true },
      { label: "Motor Controller", value: "CY Gold", verified: true },
      { label: "Listed Speed", value: "25 km/h", verified: true, provisional: true },
      { label: "Listed Driving Range", value: "110 km per charge", verified: true, provisional: true },
      { label: "Lithium Charging Time", value: "Approx. 4 Hours", verified: true, provisional: true },
      { label: "Battery Charger", value: "25 Amp Smart Charger", verified: true },
      { label: "Chassis & Frame", value: "Heavy-duty steel chassis with stainless steel superstructure", verified: true }
    ],
    batteryOptions: [
      {
        type: "Lithium-Ion Exclusive",
        chargingTime: "4 Hours",
        charger: "25 Amp",
        range: "110 km (Listed provisional)",
        notes: "Designed for intensive city routes requiring quick midday opportunity charging."
      }
    ],
    brochureAvailable: false
  },
  {
    id: "sky-star-ldr",
    slug: "sky-star-ldr",
    name: "Sky Star Ldr",
    subtitle: "Commercial Cargo & Last-Mile Loader E-Rickshaw",
    category: "Loader E-Rickshaw",
    categoryType: "loader",
    badge: "Heavy-Duty 310kg Cargo Carrier",
    isFeatured: true,
    heroImage: "/images/loader/sky-star-ldr-profile.jpg",
    gallery: [
      {
        url: "/images/loader/sky-star-ldr-profile.jpg",
        caption: "Full side profile of Range Sky Star Ldr with heavy-duty drop-gate cargo bed and driver cabin"
      },
      {
        url: "/images/loader/sky-star-ldr-side-angle.jpg",
        caption: "Rear three-quarter perspective showing diamond-plate floor, mounted spare wheel, and embossed Range badge"
      },
      {
        url: "/images/loader/sky-star-ldr-rear-bed.jpg",
        caption: "Rear exterior view showing wide cargo gate, heavy-duty latching, taillight clusters, and number plate bracket"
      },
      {
        url: "/images/vehicles/sky-star-front-duo.jpg",
        caption: "Reinforced front suspension and heavy-duty frame built for load-bearing stability"
      }
    ],
    overview: "The Sky Star Ldr is engineered for robust urban logistics, parcel distribution, wholesale market goods transit, and municipal applications with a listed 310 kg payload rating, high-strength steel cargo container, and heavy-duty CY Gold powertrain.",
    keyPoints: [
      "Listed 310 kg payload capacity with high-tensile steel cargo bed and diamond plate floor",
      "Rugged CY Gold motor and high-torque controller setup for uphill and load hauling",
      "Flexible battery configuration: Lead-acid (7 hrs) or Lithium (4 hrs)",
      "Mounted cabin spare tyre and heavy-duty drop gates for easy loading/unloading",
      "Substantially reduced per-kilometer operational cost compared to diesel cargo three-wheelers"
    ],
    specifications: [
      { label: "Vehicle Category", value: "Loader / Commercial Cargo E-Rickshaw", verified: true },
      { label: "Listed Payload Capacity", value: "310 kg", verified: true, provisional: true },
      { label: "Cargo Bed Construction", value: "Heavy-gauge reinforced steel with diamond-plate flooring", verified: true },
      { label: "Electric Motor", value: "CY Gold", verified: true },
      { label: "Motor Controller", value: "CY Gold", verified: true },
      { label: "Listed Speed", value: "25 km/h", verified: true, provisional: true },
      { label: "Listed Driving Range", value: "110 km per charge", verified: true, provisional: true },
      { label: "Battery Options", value: "Lead-Acid & Lithium Battery (Subject to confirmation)", verified: true, provisional: true },
      { label: "Lead-Acid Charging Time", value: "Approx. 7 Hours", verified: true, provisional: true },
      { label: "Lithium Charging Time", value: "Approx. 4 Hours", verified: true, provisional: true },
      { label: "Battery Charger", value: "25 Amp Smart Charger", verified: true },
      { label: "Spare Tyre", value: "Full-size spare wheel mounted securely behind driver seat", verified: true }
    ],
    batteryOptions: [
      {
        type: "Commercial Lead-Acid",
        chargingTime: "7 Hours",
        charger: "25 Amp",
        range: "110 km (Listed provisional)",
        notes: "Cost-effective fleet operational configuration for fixed daily delivery routes."
      },
      {
        type: "Commercial Lithium-Ion",
        chargingTime: "4 Hours",
        charger: "25 Amp",
        range: "110 km (Listed provisional)",
        notes: "Maximum daily rounds with fast recharge cycles between delivery shifts."
      }
    ],
    brochureAvailable: false
  }
];

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id || p.slug === id);
export const getPassengerProducts = () => PRODUCTS.filter((p) => p.categoryType === "passenger");
export const getLoaderProducts = () => PRODUCTS.filter((p) => p.categoryType === "loader");
