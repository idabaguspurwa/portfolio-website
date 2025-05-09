"use client";

import React, { useState, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn, { SubmitButtonRef } from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [formData, setFormData] = useState({
    senderEmail: "",
    message: ""
  });
  const [isPending, startTransition] = React.useTransition();
  const submitBtnRef = useRef<SubmitButtonRef>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ida.bagus862@gmail.com">
          ida.bagus862@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={async (e) => {
          e.preventDefault();
          const formElement = e.target as HTMLFormElement;
          const formData = new FormData(formElement);

          startTransition(async () => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            // Show success notification
            toast.success("Email sent successfully!", {
              duration: 3000,
              position: "top-center",
              style: {
                background: '#10B981',
                color: '#fff'
              },
              icon: '✉️'
            });

            // Trigger success state in button
            if (submitBtnRef.current) {
              submitBtnRef.current.setShowSuccess(true);
            }

            // Reset form
            setFormData({ senderEmail: "", message: "" });
          });
        }}
      >
        <div className="relative">
          <input
            className="peer h-14 w-full px-6 rounded-xl bg-gray-100 dark:bg-white dark:bg-opacity-80 
                     shadow-sm transition-all duration-300
                     dark:focus:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                     dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]
                     disabled:opacity-50"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            value={formData.senderEmail}
            onChange={(e) => setFormData(prev => ({ ...prev, senderEmail: e.target.value }))}
            placeholder=" "
            disabled={isPending}
          />
          <label
            className="absolute left-6 -top-2 text-sm text-gray-600 dark:text-white/80
                     transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                     peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Your Email
          </label>
        </div>
        
        <div className="relative mt-6">
          <textarea
            className="peer h-52 w-full rounded-xl bg-gray-100 dark:bg-white dark:bg-opacity-80 p-6
                     shadow-sm transition-all duration-300
                     dark:focus:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                     dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]
                     disabled:opacity-50"
            name="message"
            required
            maxLength={5000}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            placeholder=" "
            disabled={isPending}
          />
          <label
            className="absolute left-6 -top-2 text-sm text-gray-600 dark:text-white/80
                     transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                     peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Your Message
          </label>
        </div>

        <div className="mt-6">
          <SubmitBtn ref={submitBtnRef} />
        </div>
      </form>
    </motion.section>
  );
}
