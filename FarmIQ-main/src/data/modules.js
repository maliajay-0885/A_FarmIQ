/**
 * Master catalog of every FarmIQ module/tool.
 * Used by ModuleHub (browsing) and ModuleScreen (rendering).
 */
export const moduleCatalog = [
  { key: "farm-management",    title: "Farm Management",          short: "Farms, fields, crops and growth stages",        group: "Manage",         color: "bg-[#E6F3E8] text-[#216B45]",   icon: "farm"     },
  { key: "crop-recommendation",title: "Crop Recommendation",      short: "Find crops suited to your field",               group: "Plan",           color: "bg-[#E6F3E8] text-[#216B45]",   icon: "crop"     },
  { key: "fertilizer",         title: "Fertilizer Recommendation",short: "Nutrient guidance and precautions",             group: "Plan",           color: "bg-[#FFF2DA] text-[#986313]",   icon: "flask"    },
  { key: "irrigation",         title: "Smart Irrigation",         short: "Water at the right time and amount",            group: "Monitor",        color: "bg-[#E5F3F7] text-[#28778A]",   icon: "drop"     },
  { key: "soil",               title: "Soil Health",              short: "pH, EC, moisture and NPK readings",             group: "Monitor",        color: "bg-[#EFEBDD] text-[#76683A]",   icon: "soil"     },
  { key: "sensors",            title: "IoT Sensor Monitoring",    short: "Live and historical farm readings",             group: "Monitor",        color: "bg-[#E5F3F7] text-[#28778A]",   icon: "signal"   },
  { key: "yield",              title: "Yield Prediction",         short: "Estimate production with uncertainty",          group: "Plan",           color: "bg-[#EAF1DE] text-[#657638]",   icon: "chart"    },
  { key: "market",             title: "Market Intelligence",      short: "Prices, trends, forecasts and alerts",         group: "Plan",           color: "bg-[#F2EAF7] text-[#745088]",   icon: "market"   },
  { key: "image-analysis",     title: "Crop Image Analysis",      short: "Check crop photos for possible issues",        group: "Monitor",        color: "bg-[#FCEBDD] text-[#A7602A]",   icon: "camera"   },
  { key: "knowledge",          title: "Knowledge Center",         short: "Trusted agricultural guides and sources",      group: "Learn",          color: "bg-[#E9F1EA] text-[#3C6A4D]",   icon: "book"     },
  { key: "calendar",           title: "Farming Calendar",         short: "Activities, tasks and reminders",              group: "Manage",         color: "bg-[#E8EEF8] text-[#4F6590]",   icon: "calendar" },
  { key: "alerts",             title: "Alerts & Notifications",   short: "Weather, sensor and market updates",           group: "Manage",         color: "bg-[#FCE9E5] text-[#A55243]",   icon: "bell"     },
  { key: "reports",            title: "Reports & Analytics",      short: "Farm performance and saved advice",            group: "Manage",         color: "bg-[#E9EAF7] text-[#575E95]",   icon: "report"   },
  { key: "devices",            title: "Device Management",        short: "Pair, assign and configure devices",           group: "Manage",         color: "bg-[#E5F3F7] text-[#28778A]",   icon: "device"   },
  { key: "settings",           title: "Profile & Settings",       short: "Language, units and preferences",              group: "Manage",         color: "bg-[#EDF1EE] text-[#52665B]",   icon: "settings" },
  { key: "mlops",              title: "MLOps Dashboard",          short: "Models, data quality and API health",          group: "Administration", color: "bg-[#E9EAF7] text-[#575E95]",   icon: "model"    },
  { key: "admin",              title: "Administration & Roles",   short: "Users, permissions and audit activity",        group: "Administration", color: "bg-[#F2EAF7] text-[#745088]",   icon: "shield"   },
];

/**
 * Static data for each generic module screen (metrics, summary rows).
 * Modules with custom UIs (farm-management, image-analysis, calendar,
 * knowledge, settings, devices) are handled by their own components.
 */
export const moduleConfigs = {
  "crop-recommendation": {
    title: "Recommended for your field",
    detail: "Based on loamy soil, Nashik climate and October sowing.",
    metrics: [
      ["Top match",  "Chickpea", "92% suitability"],
      ["Water need", "Low",      "Compared with current crop"],
      ["Duration",   "105 days", "Expected harvest"],
    ],
    rows: [
      ["Chickpea", "High suitability",     "Low water • Good market"],
      ["Sorghum",  "Good suitability",     "Drought tolerant"],
      ["Wheat",    "Moderate suitability", "Needs more irrigation"],
    ],
  },
  fertilizer: {
    title: "Nutrient guidance",
    detail: "Guidance uses the latest available soil sample.",
    metrics: [
      ["Nitrogen",   "Low",    "184 kg/ha"],
      ["Phosphorus", "Medium", "22 kg/ha"],
      ["Potassium",  "Good",   "318 kg/ha"],
    ],
    rows: [
      ["Urea",       "18 kg / acre", "Split into two applications"],
      ["DAP",        "12 kg / acre", "Apply near root zone"],
      ["Precaution", "Wear gloves",  "Do not apply before heavy rain"],
    ],
  },
  irrigation: {
    title: "Irrigation recommendation",
    detail: "Wait today. Water lightly tomorrow before 8 AM.",
    metrics: [
      ["Soil moisture", "62%", "Live sensor reading"],
      ["Rain chance",   "20%", "Next 24 hours"],
      ["Water tank",    "78%", "About 2,340 litres"],
    ],
    rows: [
      ["Tomato field",     "Tomorrow, 6:30 AM", "25 minutes • Drip"],
      ["Last irrigation",  "2 days ago",         "420 litres"],
      ["Growth stage",     "Flowering",          "Avoid water stress"],
    ],
  },
  soil: {
    title: "Soil health summary",
    detail: "Most readings are healthy. Nitrogen needs attention.",
    metrics: [
      ["pH",          "6.7",    "Optimal"],
      ["EC",          "0.82",   "dS/m • Normal"],
      ["Temperature", "24.8°C", "Sensor reading"],
    ],
    rows: [
      ["Nitrogen (N)",   "184 kg/ha", "Low"],
      ["Phosphorus (P)", "22 kg/ha",  "Medium"],
      ["Potassium (K)",  "318 kg/ha", "Good"],
      ["Moisture",       "62%",       "Optimal"],
    ],
  },
  sensors: {
    title: "Sensor readings",
    detail: "ESP32 Field Hub • Last synced 2 minutes ago.",
    metrics: [
      ["Online",      "3 of 4", "One device offline"],
      ["Data points", "1,248",  "Received today"],
      ["Uptime",      "98.7%",  "Last 30 days"],
    ],
    rows: [
      ["Soil moisture S1", "62%",         "Live reading"],
      ["Air temperature",  "27°C",        "Live reading"],
      ["Humidity",         "71%",         "Live reading"],
      ["Tank level S4",    "Unavailable", "Device offline"],
    ],
  },
  yield: {
    title: "Tomato yield estimate",
    detail: "Prediction range reflects weather and crop uncertainty.",
    metrics: [
      ["Estimated yield",  "18.4 t",  "Per 2.5 acres"],
      ["Expected income",  "₹4.2 L",  "At current demo price"],
      ["Confidence",       "± 2.1 t", "Moderate uncertainty"],
    ],
    rows: [
      ["Plant health",      "Strong", "Positive factor"],
      ["Water consistency", "Good",   "Positive factor"],
      ["Heat risk",         "Medium", "May reduce fruit set"],
    ],
  },
  market: {
    title: "Nashik market outlook",
    detail: "Reported prices are delayed demonstration data.",
    metrics: [
      ["Tomato",    "₹2,450", "Per quintal"],
      ["7-day trend", "+8%",  "Upward"],
      ["Forecast",  "₹2,520", "Next week estimate"],
    ],
    rows: [
      ["Nashik APMC", "₹2,450", "Reported 10:00 AM"],
      ["Pune Market", "₹2,380", "Reported yesterday"],
      ["Mumbai APMC", "₹2,610", "Reported yesterday"],
    ],
  },
  alerts: {
    title: "Recent alerts",
    detail: "Choose which alerts should send a phone notification.",
    metrics: [
      ["New",      "3", "Needs review"],
      ["Weather",  "1", "This week"],
      ["Sensors",  "2", "This week"],
    ],
    rows: [
      ["Heavy rain watch",  "Tomorrow evening", "Weather alert"],
      ["Tank sensor offline", "18 minutes ago", "Sensor alert"],
      ["Tomato price +8%",  "Today",            "Market alert"],
    ],
  },
  reports: {
    title: "Farm performance",
    detail: "Preview for 1–31 October • Green Valley Farm.",
    metrics: [
      ["Water used",    "8,420 L", "12% lower"],
      ["Farm tasks",    "24 / 27", "89% complete"],
      ["Sensor uptime", "98.7%",   "4 connected"],
    ],
    rows: [
      ["Farm activity report", "October 2025",   "12 pages"],
      ["Irrigation history",   "Last 30 days",   "8 events"],
      ["Saved AI advice",      "All time",       "14 items"],
      ["Yield estimates",      "Current season", "3 crops"],
    ],
  },
  mlops: {
    title: "Production model health",
    detail: "Technical administrator view • Not shown to farmers.",
    metrics: [
      ["API health",  "99.96%", "Healthy"],
      ["P95 latency", "284 ms", "Within target"],
      ["Data drift",  "3.2%",   "Low"],
    ],
    rows: [
      ["crop-recommender",  "v2.4.1",     "Production • Healthy"],
      ["yield-forecaster",  "v1.8.0",     "Production • Monitor"],
      ["disease-vision",    "v3.1.2",     "Staged • Evaluating"],
      ["Sensor ingestion",  "18.2K/min",  "No backlog"],
      ["Training run #481", "F1 0.924",   "Completed 2h ago"],
      ["Error logs",        "4 warnings", "No critical errors"],
    ],
  },
  admin: {
    title: "People and access",
    detail: "Manage access without exposing technical tools to farmers.",
    metrics: [
      ["Users",   "248", "12 active now"],
      ["Farmers", "226", "Standard role"],
      ["Admins",  "4",   "Full access"],
    ],
    rows: [
      ["Anita Patil",          "Farm Manager",  "Green Valley Farm"],
      ["Ravi Kumar",           "Agronomist",    "Advisory access"],
      ["Meera Shah",           "Administrator", "All workspaces"],
      ["Pending invitations",  "3 users",       "Expires in 5 days"],
    ],
  },
};

/** Multilingual options for the Settings panel language picker. */
export const settingsLanguages = [
  ["English",             "English"],
  ["हिन्दी (Hindi)",      "Hindi"],
  ["मराठी (Marathi)",     "Marathi"],
  ["తెలుగు (Telugu)",     "Telugu"],
  ["தமிழ் (Tamil)",       "Tamil"],
  ["ಕನ್ನಡ (Kannada)",     "Kannada"],
  ["ગુજરાતી (Gujarati)",  "Gujarati"],
  ["বাংলা (Bengali)",     "Bengali"],
  ["ਪੰਜਾਬੀ (Punjabi)",    "Punjabi"],
  ["മലയാളം (Malayalam)", "Malayalam"],
  ["ଓଡ଼ିଆ (Odia)",       "Odia"],
];

/** Static conversation history entries. */
export const conversations = [
  { title: "Best time to water tomatoes",    preview: "Based on your soil moisture...",  date: "Today",     icon: "droplet",    tone: "bg-[#E5F3F7] text-[#28778A]" },
  { title: "Fertilizer for onion crop",      preview: "For your current crop stage...",  date: "Yesterday", icon: "fertilizer", tone: "bg-[#FFF2DA] text-[#9A6817]" },
  { title: "Tomato market price",            preview: "Nashik mandi prices have...",     date: "12 Oct",    icon: "market",     tone: "bg-[#F2EAF7] text-[#745088]" },
  { title: "Signs of leaf curl disease",     preview: "Look for upward curling and...",  date: "8 Oct",     icon: "leaf",       tone: "bg-[#E6F3E8] text-[#216B45]" },
  { title: "Preparing soil for wheat",       preview: "Start with a deep ploughing...", date: "2 Oct",     icon: "crop",       tone: "bg-[#EEF1DF] text-[#6E7934]" },
];

/** Quick action cards shown on the Home screen. */
export const quickActions = [
  { color: "bg-[#E8F3E9] text-[#287047]", icon: "crop",       title: "Crop Advice",       subtitle: "Best crops for your field"     },
  { color: "bg-[#E7F4F7] text-[#31768A]", icon: "droplet",    title: "Watering Advice",   subtitle: "Smart irrigation guidance"     },
  { color: "bg-[#FFF3D9] text-[#A16912]", icon: "fertilizer", title: "Fertilizer Advice", subtitle: "Feed crops at the right time"  },
  { color: "bg-[#F2EAF8] text-[#76518D]", icon: "market",     title: "Market Prices",     subtitle: "Check nearby crop prices"      },
];

/** Farming advice/recommendation cards shown on the Advice screen. */
export const recommendations = [
  {
    category: "Crop recommendation",
    title:    "Plant chickpea next",
    body:     "Your loamy soil and October window are a strong match for chickpea.",
    icon:     "crop",
    tone:     "bg-[#E6F3E8] text-[#216B45]",
    tag:      "92% match",
  },
  {
    category: "Irrigation",
    title:    "Water tomatoes tomorrow",
    body:     "Moisture is adequate today. Irrigate lightly before 8 AM tomorrow.",
    icon:     "droplet",
    tone:     "bg-[#E5F3F7] text-[#28778A]",
    tag:      "Save 120 L",
  },
  {
    category: "Fertilizer guidance",
    title:    "Nitrogen feed due soon",
    body:     "Apply 18 kg/acre in 3 days, after the next planned irrigation.",
    icon:     "fertilizer",
    tone:     "bg-[#FFF2DA] text-[#9A6817]",
    tag:      "In 3 days",
  },
  {
    category: "Market information",
    title:    "Tomato price is rising",
    body:     "Nashik mandi is at ₹2,450/quintal, up 8% from last week.",
    icon:     "market",
    tone:     "bg-[#F2EAF7] text-[#745088]",
    tag:      "+8% this week",
  },
];

/** Nav items for the bottom navigation bar. */
export const navItems = [
  { key: "home",    label: "Home",      icon: "home"    },
  { key: "chat",    label: "Assistant", icon: "bot"     },
  { key: "farm",    label: "My Farm",   icon: "farm"    },
  { key: "history", label: "History",   icon: "history" },
];

/** Crops displayed on the My Farm screen. */
export const farmCrops = [
  { name: "Tomato", stage: "Flowering", icon: "crop", tone: "bg-[#E9F4E9] text-[#2C7049]" },
  { name: "Onion",  stage: "Day 42",    icon: "leaf", tone: "bg-[#FFF2DB] text-[#A16912]" },
  { name: "Wheat",  stage: "Day 18",    icon: "crop", tone: "bg-[#EEF1DF] text-[#6E7934]" },
];

/** Initial farm list for the Farm Management module. */
export const defaultFarms = [
  { name: "Green Valley Farm", location: "Nashik, Maharashtra", area: "12.5 acres", crop: "Tomato • Flowering" },
  { name: "Riverbend Plot",    location: "Pune, Maharashtra",   area: "4 acres",    crop: "Wheat • Germination" },
];

/** Checklist items shown in the Farm Management add-farm form. */
export const farmChecklist = [
  "Crop management",
  "Growth stage",
  "Soil information",
  "Irrigation method",
  "Farm area & units",
  "GPS location",
];

/** Default IoT devices shown in the Device Management module. */
export const defaultDevices = [
  { name: "ESP32 Field Hub",   status: "Online • Green Valley Farm",  value: "98%" },
  { name: "ESP8266 Tank Node", status: "Offline • Last seen 18m ago", value: "—"   },
  { name: "Soil Probe S1",     status: "Online • Tomato field",       value: "62%" },
];

/** Default reminder entries for the Farming Calendar module. */
export const defaultReminders = [
  { id: 1, title: "Irrigate tomato field",      date: "Tomorrow • 6:30 AM", done: false },
  { id: 2, title: "Apply second nitrogen dose", date: "24 October",         done: false },
  { id: 3, title: "Inspect onion for thrips",   date: "Completed today",    done: true  },
];

/**
 * Knowledge Center articles.
 * Each entry: [title, category, source].
 */
export const knowledgeArticles = [
  ["Managing tomato leaf curl",  "Pests and diseases",     "ICAR Extension Guide • 12 Sep 2025"],
  ["Understanding soil pH",      "Soil health",            "Maharashtra Agriculture Dept • 2 Aug 2025"],
  ["Efficient drip irrigation",  "Irrigation",             "Krishi Vigyan Kendra • 18 Jul 2025"],
  ["PM-KISAN eligibility guide", "Agricultural schemes",   "Government of India • 1 Oct 2025"],
  ["Rabi season crop planning",  "Seasonal farming guides","ICAR • 28 Sep 2025"],
];

/** Topic filter tags for the Knowledge Center search. */
export const knowledgeTopicTags = [
  "Crop management",
  "Soil health",
  "Fertilizers",
  "Irrigation",
  "Pests",
  "Weather",
];

/**
 * Seed (demo) messages shown in the Chat screen on first load.
 * sender: "ai" | "farmer"
 */
export const seedChatMessages = [
  { id: 1, sender: "ai",     text: "Hello! I'm your FarmIQ assistant. Ask me anything about your crops, soil, weather, or market." },
  { id: 2, sender: "farmer", text: "When should I water my crops?" },
  { id: 3, sender: "ai",     text: "Let's check your soil moisture, crop stage, and recent rainfall before deciding." },
];
