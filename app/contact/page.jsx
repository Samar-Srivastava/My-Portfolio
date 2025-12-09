"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// shadcn dialog
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+91) 80048 75039" },
  { icon: <FaEnvelope />, title: "Email", description: "samarsri08@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "C-902, Saraswati Appartment, Gomti Nagar Extension, Lucknow 226010" },
];

const Contact = () => {
  const formRef = useRef();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jab85v8",
        "template_7pqgeir",
        formRef.current,
        "mHvqxfzJyXtZXK8SP"
      )
      .then(
        () => {
          setDialogData({
            type: "success",
            message: "Thank you for contacting me.",
          });
          setDialogOpen(true);
          formRef.current.reset();
        },
        () => {
          setDialogData({
            type: "error",
            message: "Failed to send your message. Please try again.",
          });
          setDialogOpen(true);
        }
      );
  };

  return (
    <>
      {/* Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {dialogData.type === "success" ? "Message Sent" : "Error"}
            </DialogTitle>
            <DialogDescription>{dialogData.message}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="py-3"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:h-[54%] order-2 xl:order-none">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-4 p-8 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-3xl text-accent">Let's work together</h3>
                <p className="text-white/60 text-[15px]">
                  Partner with me to create meaningful, user-focused solutions that deliver real results.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="text" name="firstname" placeholder="Firstname" required />
                  <Input type="text" name="lastname" placeholder="Lastname" required />
                  <Input type="email" name="email" placeholder="Email address" required />
                  <Input type="tel" name="phone" placeholder="Phone number" />
                </div>

                <Select name="service">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Software Development">Software Development</SelectItem>
                      <SelectItem value="AI & Machine Learning">AI & Machine Learning</SelectItem>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea name="message" className="h-[150px]" placeholder="Type your message here." required />

                <Button type="submit" size="md" className="max-w-40">
                  Send message
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[42px] xl:w-[72px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
