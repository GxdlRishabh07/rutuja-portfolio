"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setServerMessage(json.message);
        reset();
      } else {
        setStatus("error");
        setServerMessage(json.message || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again.");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "12px",
    border: "1.5px solid var(--color-gray-300)",
    fontSize: "15px",
    fontFamily: "var(--font-sans)",
    backgroundColor: "var(--color-bg-white)",
    color: "var(--color-text-black)",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const errorStyle = {
    fontSize: "13px",
    color: "#dc2626",
    marginTop: "4px",
  };

  if (status === "success") {
    return (
      <ScrollReveal>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            padding: "48px",
            borderRadius: "var(--card-radius)",
            backgroundColor: "var(--color-bg-white)",
            textAlign: "center",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <CheckCircle2 size={48} color="var(--color-primary)" style={{ marginBottom: "16px" }} />
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", marginBottom: "8px" }}>
            Message Sent!
          </h3>
          <p style={{ color: "var(--color-gray-500)" }}>{serverMessage}</p>
          <button
            onClick={() => setStatus("idle")}
            className="btn-pill btn-primary"
            style={{ marginTop: "24px" }}
          >
            Send Another
          </button>
        </motion.div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          padding: "40px",
          borderRadius: "var(--card-radius)",
          backgroundColor: "var(--color-bg-white)",
          boxShadow: "var(--shadow-md)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", marginBottom: "8px" }}>
          Get In Touch
        </h3>

        {/* Honeypot — hidden from real users */}
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
          <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <input {...register("name")} placeholder="Your Name" style={inputStyle} />
          {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
        </div>

        <div>
          <input {...register("email")} type="email" placeholder="your@email.com" style={inputStyle} />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>

        <div>
          <input {...register("subject")} placeholder="Subject" style={inputStyle} />
          {errors.subject && <p style={errorStyle}>{errors.subject.message}</p>}
        </div>

        <div>
          <textarea
            {...register("message")}
            placeholder="Your message..."
            rows={5}
            style={{ ...inputStyle, resize: "vertical" }}
          />
          {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
        </div>

        {status === "error" && (
          <p style={{ ...errorStyle, padding: "12px", backgroundColor: "#fef2f2", borderRadius: "8px" }}>
            {serverMessage}
          </p>
        )}

        <motion.button
          type="submit"
          disabled={status === "loading"}
          className="btn-pill btn-primary"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            opacity: status === "loading" ? 0.7 : 1,
          }}
        >
          {status === "loading" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Send size={18} />
          )}
          {status === "loading" ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </ScrollReveal>
  );
}
