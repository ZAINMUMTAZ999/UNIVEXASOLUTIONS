// import { useForm } from "react-hook-form";
// // import { contactUsTypes } from "../../../backend/src/models/contactUs.models";
// import {contactUsTypes} from "../Api";
// import { useMutation } from "react-query";
// import { contactUsApi } from "@/Api";
// import { AppContext } from "@/context/AppNotify";
// import { useNavigate } from "react-router-dom";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const ContactUs = () => {
//   const { showToast } = AppContext();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<contactUsTypes>();

//   const { mutate: apiMutate, isLoading } = useMutation(contactUsApi, {
//     onSuccess: () => {
//       showToast({ message: "Message sent successfully!", type: "SUCCESS" });
//       navigate("/");
//     },
//     onError: (error: Error) => {
//       showToast({ message: error.message, type: "ERROR" });
//     },
//   });

//   const onSubmits = handleSubmit((data) => apiMutate(data));

//   return (
//     <form
//       className="min-h-screen bg-white relative overflow-hidden"
//       onSubmit={onSubmits}
//     >
//       {/* Background + Plus Pattern + Robot (unchanged) */}
//       {/* ... include your background, plus pattern, robot code here ... */}

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col xl:flex-row items-start justify-between relative z-10 gap-8 lg:gap-12 xl:gap-16">
//         {/* Form Section */}
//         <div className="w-full xl:w-1/2 order-2 xl:order-1">
//           <div className="space-y-4 sm:space-y-6">
//             {/* Name */}
//             <div>
//               <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
//               <input
//                 type="text"
//                 {...register("name", { required: "Full name is required" })}
//                 className="w-full p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm text-sm sm:text-base"
//                 placeholder="Enter your full name"
//               />
//               {errors?.name && (
//                 <span className="text-red-500 text-xs sm:text-sm mt-1 block">
//                   {errors.name.message}
//                 </span>
//               )}
//             </div>

//             {/* Email & Phone */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
//                 <input
//                   type="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                       message: "Invalid email address",
//                     },
//                   })}
//                   className="w-full p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm text-sm sm:text-base"
//                   placeholder="Enter your email"
//                 />
//                 {errors?.email && (
//                   <span className="text-red-500 text-xs sm:text-sm mt-1 block">
//                     {errors.email.message}
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
//                 <input
//                   type="tel"
//                   {...register("phoneNumber", {
//                     required: "Phone number is required",
//                   })}
//                   className="w-full p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm text-sm sm:text-base"
//                   placeholder="Enter your phone"
//                 />
//                 {errors?.phoneNumber && (
//                   <span className="text-red-500 text-xs sm:text-sm mt-1 block">
//                     {errors.phoneNumber.message}
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Interested In */}
//             <div>
//               <input
//                 type="text"
//                 {...register("interestedIn", { required: "This field is required" })}
//                 className="w-full p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm text-sm sm:text-base"
//                 placeholder="Interested In (e.g., Web Development, SEO)"
//               />
//               {errors?.interestedIn && (
//                 <span className="text-red-500 text-xs sm:text-sm mt-1 block">
//                   {errors.interestedIn.message}
//                 </span>
//               )}
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
//               <textarea
//                 {...register("message", { required: "Message is required" })}
//                 rows={5}
//                 className="w-full p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm resize-none text-sm sm:text-base"
//                 placeholder="Write your message here..."
//               />
//               {errors?.message && (
//                 <span className="text-red-500 text-xs sm:text-sm mt-1 block">
//                   {errors.message.message}
//                 </span>
//               )}
//             </div>

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-center text-sm sm:text-base"
//             >
//               {isLoading ? "Submitting..." : "Submit"}
//             </Button>
//           </div>
//         </div>

//         {/* Contact Info Section (unchanged) */}
//         <div className="w-full xl:w-1/2 order-1 xl:order-2 xl:pl-8 2xl:pl-16">
//           <div className="mb-6 sm:mb-8">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
//               Contact Us
//             </h1>
//             <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
//               Have questions, need services, or want to collaborate? Contact us using the
//               details below — let's connect and create something great together.
//             </p>
//           </div>
//           <div className="space-y-4 sm:space-y-6">
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
//                 <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <span className="text-gray-700 text-base sm:text-lg">+1 234 567 890</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
//                 <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <span className="text-gray-700 text-base sm:text-lg">contact@yourdomain.com</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
//                 <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <span className="text-gray-700 text-base sm:text-lg">
//                 123 Your Street, City, Country
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ContactUs;
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

import { contactUsApi, contactUsTypes } from "../Api"; // Grouped imports
import { AppContext } from "@/context/AppNotify";
import { Button } from "@/components/ui/button";

// Placeholder for your decorative background elements for cleaner code
const ContactBackground = () => (
  <>
    {/* This is where your background, plus pattern, and robot images would go */}
    {/* Example: <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-purple-100 z-0" /> */}
    <div className="absolute top-0 left-0 w-full h-full opacity-50 /* your pattern styles */" />
  </>
);


const ContactUs = () => {
  const { showToast } = AppContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactUsTypes>();

  const { mutate: apiMutate, isLoading } = useMutation(contactUsApi, {
    onSuccess: () => {
      showToast({ message: "Message sent successfully!", type: "SUCCESS" });
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  // The form submission handler remains the same
  const onSubmits = handleSubmit((data) => apiMutate(data));

  return (
    // Use a main layout wrapper instead of the form tag for the whole page
    <main className="min-h-screen bg-white relative overflow-hidden">
      <ContactBackground />

      {/* Main content container with responsive padding and centering */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col xl:flex-row items-center justify-center relative z-10 gap-12 lg:gap-16">
        
        {/* === Left Side: Contact Info & Title === */}
        {/* This section now appears first on mobile for better context */}
        <div className="w-full xl:w-5/12 text-center xl:text-left">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tighter">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto xl:mx-0">
              Have a project in mind or just want to say hi? Fill out the form or use the contact details below. We'd love to hear from you!
            </p>
          </div>
          <div className="space-y-6 flex flex-col items-center xl:items-start">
            {/* Contact Detail Item */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-gray-700 font-medium text-base sm:text-lg">+1 234 567 890</span>
            </div>
            {/* Contact Detail Item */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-gray-700 font-medium text-base sm:text-lg">contact@yourdomain.com</span>
            </div>
            {/* Contact Detail Item */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-gray-700 font-medium text-base sm:text-lg">123 Your Street, City, Country</span>
            </div>
          </div>
        </div>

        {/* === Right Side: Contact Form === */}
        {/* The <form> tag should only wrap the form elements for better semantics */}
        <form onSubmit={onSubmits} className="w-full xl:w-7/12 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Full name is required" })}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                placeholder="Enter your full name"
              />
              {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name.message}</span>}
            </div>

            {/* Email & Phone - Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" }})}
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                  placeholder="name@example.com"
                />
                {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                <input
                  id="phoneNumber"
                  type="tel"
                  {...register("phoneNumber", { required: "Phone number is required" })}
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                  placeholder="(123) 456-7890"
                />
                {errors.phoneNumber && <span className="text-red-500 text-sm mt-1 block">{errors.phoneNumber.message}</span>}
              </div>
            </div>

            {/* Interested In - LABEL ADDED FOR ACCESSIBILITY */}
            <div>
              <label htmlFor="interestedIn" className="block text-gray-700 text-sm font-bold mb-2">Service of Interest</label>
              <input
                id="interestedIn"
                type="text"
                {...register("interestedIn", { required: "This field is required" })}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                placeholder="e.g., Web Development, SEO"
              />
              {errors.interestedIn && <span className="text-red-500 text-sm mt-1 block">{errors.interestedIn.message}</span>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows={5}
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-base"
                placeholder="Write your message here..."
              />
              {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 text-base font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactUs;