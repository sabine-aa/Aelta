import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    StudentFullName: "",
    StudentSchoolName: "",
    ContactNumber: "",
    DateofBirth: "",
    EmailAddress: "",
    ParentName: "",
    GradeLevel: "",
    FieldofStudy: "",
    Referral: "",
    Interests: {
      IELTS: false,
      TOEFL: false,
      SAT: false,
      EEE: false,
      GRE: false,
      MCAT: false,
      UniversityExamPreparation: false,
      AgendaStudyPlanningSupport: false,
      CVInterviewSupport: false,
      OneOnOneTutoring: false,
      BusinessEnglish: false,
      BasicEnglish: false,
      ResearchAssistance: false,
      TranslationServices: false,
      EnglishLanguageArt: false,
    },
    DaysAvailable: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
    },
    Times: {
      AM: false,
      PM: false,
      FullDay: false,
    },
    HealthInfo: {
      LearningDifficulties: false,
      Allergies: false,
      MedicalConditions: false,
      NoneOfTheAbove: false,
    },
    HealthDetails: "",
    Remarks: "",
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    if (name in formData.Interests) {
      setFormData((prevData) => ({
        ...prevData,
        Interests: {
          ...prevData.Interests,
          [name]: checked,
        },
      }));
    } else if (name in formData.DaysAvailable) {
      setFormData((prevData) => ({
        ...prevData,
        DaysAvailable: {
          ...prevData.DaysAvailable,
          [name]: checked,
        },
      }));
    } else if (name in formData.Times) {
      setFormData((prevData) => ({
        ...prevData,
        Times: {
          ...prevData.Times,
          [name]: checked,
        },
      }));
    } else if (name in formData.HealthInfo) {
      setFormData((prevData) => ({
        ...prevData,
        HealthInfo: {
          ...prevData.HealthInfo,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      StudentFullName,
      StudentSchoolName,
      ContactNumber,
      DateofBirth,
      EmailAddress,
      ParentName,
      GradeLevel,
      FieldofStudy,
      Referral,
      Interests,
      DaysAvailable,
      Times,
      HealthInfo,
      HealthDetails,
      Remarks,
    } = formData;

    // Convert the selected interests to URL parameters
    const interestsParams = Object.entries(Interests)
      .filter(([, selected]) => selected) // Only include selected (true) interests
      .map(([interest]) => `&${encodeURIComponent(interest)}=true`)
      .join("");

    const daysParams = Object.entries(DaysAvailable)
      .filter(([, available]) => available)
      .map(([day]) => `&${encodeURIComponent(day)}=true`)
      .join("");

    const timesParams = Object.entries(Times)
      .filter(([, available]) => available)
      .map(([day]) => `&${encodeURIComponent(day)}=true`)
      .join("");

    const healthParams = Object.entries(HealthInfo)
      .filter(([, available]) => available)
      .map(([day]) => `&${encodeURIComponent(day)}=true`)
      .join("");

    const url = `https://script.google.com/macros/s/AKfycbz4j5Ub8VIgNokI51Vvm80j_kt6_3EVpxj-7KaKzKz8BdQQTxnAlJr5245SA00kJEUjpg/exec?StudentFullName=${encodeURIComponent(
      StudentFullName
    )}&StudentSchoolName=${encodeURIComponent(
      StudentSchoolName
    )}&ContactNumber=${encodeURIComponent(
      ContactNumber
    )}&DateofBirth=${encodeURIComponent(
      DateofBirth
    )}&EmailAddress=${encodeURIComponent(
      EmailAddress
    )}&ParentName=${encodeURIComponent(
      ParentName
    )}&GradeLevel=${encodeURIComponent(
      GradeLevel
    )}&FieldofStudy=${encodeURIComponent(
      FieldofStudy
    )}&HealthDetails=${encodeURIComponent(
      HealthDetails
    )}&Remarks=${encodeURIComponent(
      Remarks
    )}&Referral=${Referral}${interestsParams}${daysParams}${timesParams}${healthParams}`;

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    iframe.onload = () => {
      console.log("Form submitted successfully:", formData);
      document.body.removeChild(iframe);
    };
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto items-center text-center py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-[#360182]">
              Contact info:
            </h1>

            <div className="mb-8 space-y-2">
              <p className="text-lg text-gray-700">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-[#360182]"
                />
                +961 81 696751
              </p>
              <p className="text-lg text-gray-700">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-[#360182]"
                />
                aelta2024@gmail.com
              </p>
            </div>

            <div className="flex space-x-6 mb-8 justify-center items-center">
              <a
                href="https://www.instagram.com/aelta.lb?igsh=d2RzbG9rdzF1ZnVy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#b3902f]"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.facebook.com/share/n54mMP1Qufzgsbz1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#b3902f]"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#b3902f]"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="w-full max-w-4xl h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-center text-[#360182] mb-6">
          Student Information Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="StudentFullName"
              value={formData.StudentFullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#360182]"
            />
          </div>

          <div>
            <label className="block text-gray-700">School Name</label>
            <input
              type="text"
              name="StudentSchoolName"
              value={formData.StudentSchoolName}
              onChange={handleChange}
              placeholder="Enter school name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#360182]"
            />
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="ContactNumber"
              value={formData.ContactNumber}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#360182]"
            />
          </div>

          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="DateofBirth"
              value={formData.DateofBirth}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#360182]"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="EmailAddress"
              value={formData.EmailAddress}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#360182]"
            />
          </div>

          <div>
            <label className="block text-gray-700">Parent's Name</label>
            <input
              type="text"
              name="ParentName"
              value={formData.ParentName}
              onChange={handleChange}
              placeholder="Enter parent's name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#360182]"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Grade Level(Current Education Level E.g. High School,
              Undergraduate, Graduate, etc.)
            </label>
            <input
              type="text"
              name="GradeLevel"
              value={formData.GradeLevel}
              onChange={handleChange}
              placeholder="Enter your grade level"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#360182]"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Field of Study (if Applicable)
            </label>
            <input
              type="text"
              name="FieldofStudy"
              value={formData.FieldofStudy}
              onChange={handleChange}
              placeholder="Enter your field of study"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#360182]"
            />
          </div>

          <div>
            <label className="block text-gray-700">
              Please Check All That Apply:
            </label>
            {Object.keys(formData.Interests).map((interest) => (
              <div key={interest} className="flex items-center">
                <input
                  type="checkbox"
                  name={interest}
                  checked={formData.Interests[interest]}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>{interest.replace(/([A-Z])/g, " $1").trim()}</span>
              </div>
            ))}
          </div>
          <div>
            <label className="block text-gray-700">Days Available:</label>
            {Object.keys(formData.DaysAvailable).map((day) => (
              <div key={day} className="flex items-center">
                <input
                  type="checkbox"
                  name={day}
                  checked={formData.DaysAvailable[day]}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>{day}</span>
              </div>
            ))}
          </div>
          <div>
            <label className="block text-gray-700">Preferred Time:</label>
            {Object.keys(formData.Times).map((time) => (
              <div key={time} className="flex items-center">
                <input
                  type="checkbox"
                  name={time}
                  checked={formData.Times[time]}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>{time.replace("FullDay", "Full Day")}</span>
              </div>
            ))}
          </div>
          <div>
            <label className="block text-gray-700">
              Please Check All That Apply:
            </label>
            {Object.keys(formData.HealthInfo).map((health) => (
              <div key={health} className="flex items-center">
                <input
                  type="checkbox"
                  name={health}
                  checked={formData.HealthInfo[health]}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>{health.replace(/([A-Z])/g, " $1").trim()}</span>
              </div>
            ))}
          </div>
          <div>
            <label className="block text-gray-700">
              If you selected any of the above, please provide details:
            </label>
            <input
              type="text"
              name="HealthDetails"
              value={formData.HealthDetails}
              onChange={handleChange}
              placeholder="Enter your health details"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#360182]"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              How did you hear about AELTA
            </label>
            <input
              type="radio"
              name="Referral"
              value="SocialMedia"
              checked={formData.Referral === "SocialMedia"}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Social Media</span>
            <input
              type="radio"
              name="Referral"
              value="WordofMouth"
              checked={formData.Referral === "WordofMouth"}
              onChange={handleChange}
              className="ml-4 mr-2"
            />
            <span>Word of Mouth</span>
          </div>

          <div>
            <label className="block text-gray-700">Remarks:</label>
            <input
              type="text"
              name="Remarks"
              value={formData.Remarks}
              onChange={handleChange}
              placeholder="Enter your health details"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#360182]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#360182] text-white font-semibold rounded-md hover:bg-[#5b2e9e] transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
