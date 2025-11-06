"use client";

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./ContactForm.module.css";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/contact", data);

      if (response.status === 200) {
        reset();
        router.push("/thank-you");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.formTitle}>Get in Touch</h3>

      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && <span className={styles.error}>Required</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <span className={styles.error}>Invalid email</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter your phone"
          {...register("phone", { required: true })}
        />
        {errors.phone && <span className={styles.error}>Required</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="suburb">Suburb</label>
        <input
          type="text"
          id="suburb"
          placeholder="Enter your suburb"
          {...register("suburb")}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          rows="4"
          placeholder="Describe your shipment..."
          {...register("desc")}
        />
      </div>

      <button type="submit" disabled={isSubmitting} className={styles.button}>
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
      </button>
    </form>
  );
};

export default ContactForm;
