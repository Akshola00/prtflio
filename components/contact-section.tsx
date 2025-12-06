"use client"

import type React from "react"

import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground">
                If you would like to discuss a project or just say hi, I&apos;m always down to chat.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:akinniyishola07@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-md bg-muted group-hover:bg-primary/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>akinniyishola07@gmail.com</span>
              </a>
            </div>

            <div className="space-y-3 pt-4">
              <p className="text-sm text-muted-foreground">Find me on</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Akshola00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/akinshola-akinniyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/Akshola00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={5}
                required
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>
            <Button type="submit" className="w-full gap-2" disabled={true}>
              Send Message <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
