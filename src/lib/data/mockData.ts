// Updated Mock data for the medical dashboard

export const patientProfile = {
  id: "PT-2025-0042",
  name: "Zuri Okeke",
  avatar: "./../public/Zuri Okeke.jpg",
  age: "28 yrs 7 mos",
  dateOfBirth: "10-12-1996",
  gender: "Female",
  insuranceNumber: "0 99881234761"
};

export const problems = [
  {
    id: 1,
    name: "Type 2 Diabetes",
    date: "Jan 12, 2024",
    description: "Diagnosed recently, under medication",
    status: "active"
  },
  {
    id: 2,
    name: "PCOS",
    date: "Aug 23, 2022",
    description: "Monitored periodically with lab tests",
    status: "active"
  }
];

export const immunizations = [
  {
    id: 1,
    name: "Hepatitis B",
    date: "Dec 11, 2001",
    dose: "Dose 1"
  },
  {
    id: 2,
    name: "HPV (Cervical Cancer)",
    date: "Mar 09, 2014",
    dose: "Dose 3"
  }
];

export const allergies = [
  { id: 1, name: "Shellfish" },
  { id: 2, name: "Sulfa Drugs" },
  { id: 3, name: "Peanuts" }
];

export const upcomingAppointment = {
  type: "Diabetes Follow-up",
  doctor: "Dr. Kavitha Mehra",
  date: "30-07-2025"
};

export const doctors = [
  { id: 1, name: "Dr. Kavitha Mehra", role: "Endocrinologist", avatar: "/doctor_kavitha.jpg" },
  { id: 2, name: "Dr. Rohan Pillai", role: "Nutritionist", avatar: "/doctor_rohan.jpg" },
  { id: 3, name: "Dr. Riya Fernandes", role: "Gynecologist", avatar: "/doctor_riya.jpg" }
];

export const healthReadings = [
  {
    id: 1,
    type: "Body Temperature",
    value: "98.2",
    unit: "°F",
    icon: "thermometer",
    color: "temp"
  },
  {
    id: 2,
    type: "Blood Pressure",
    value: "115/78",
    unit: "mmHg",
    icon: "heart",
    color: "bp"
  },
  {
    id: 3,
    type: "Blood Sugar",
    value: "102",
    unit: "mg/dl",
    icon: "droplet",
    color: "sugar"
  },
  {
    id: 4,
    type: "Body Weight",
    value: "61",
    unit: "kg",
    icon: "scale",
    color: "weight"
  }
];

export const appointments = [
  {
    id: 1,
    type: "Diabetes Review",
    doctor: "Dr. Kavitha Mehra",
    doctorAvatar: "./../public/doctor_kavitha.jpg",
    date: "30 Jul, 10:00 am - 11:00 am",
    status: "upcoming"
  },
  {
    id: 2,
    type: "Nutrition Counseling",
    doctor: "Dr. Rohan Pillai",
    doctorAvatar: "./public/doctor_rohan.jpg",
    date: "01 Aug, 03:00 pm - 04:00 pm",
    status: "upcoming"
  },
  {
    id: 3,
    type: "Women's Health Checkup",
    doctor: "Dr. Riya Fernandes",
    doctorAvatar: "./../public/doctor_riya.jpg",
    date: "05 Aug, 09:30 am - 11:00 am",
    status: "upcoming"
  }
];

export const chatMessages = [
  {
    id: 1,
    type: "system",
    message: "Available slots on July 30th are:",
    timestamp: "09:00 AM - 10:00 AM",
    avatar: "/Doctor_kavitha.png"
  },
  {
    id: 2,
    type: "system",
    message: "10:00 AM - 11:00 AM",
    avatar: "/Doctor_kavitha.png"
  },
  {
    id: 3,
    type: "system",
    message: "02:00 PM - 03:00 PM",
    avatar: "/Doctor_kavitha.png"
  },
  {
    id: 4,
    type: "user",
    message: "10:00 AM - 11:00 AM works for me",
    hasAttachment: true,
    attachmentCount: 1,
    avatar: "/patient1.jpg"
  },
  {
    id: 5,
    type: "system",
    message: "Would you like to attach any lab results?",
    timestamp: "",
    avatar: "/Doctor_kavitha.png"
  },
  {
    id: 6,
    type: "user", 
    message: "Sure, uploading now",
    avatar: "/patient1.jpg"
  },
  {
    id: 7,
    type: "system",
    message: "You're good to go! Confirm your appointment:",
    details: {
      date: "📅 Date: 30 July 2025",
      time: "⏰ Time: 10:00 AM",
      hospital: "🏥 Hospital: Apollo Women's Clinic",
      doctor: "👩‍⚕️ Doctor: Dr. Kavitha Mehra"
    },
    avatar: "/Doctor_kavitha.png"
  },
  {
    id: 8,
    type: "user",
    message: "Confirmed!",
    avatar: "/patient1.jpg"
  },
  {
    id: 9,
    type: "system",
    message: "✅ Your appointment has been confirmed!",
    subMessage: "You'll find it in your dashboard & email. Take care! 💚",
    avatar: "/Doctor_kavitha.png"
  }
];

export const profileProgress = {
  percentage: 72,
  message: "Complete your profile setup to unlock appointment features"
};
