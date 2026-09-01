import { useState } from "react";
import { Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { LINKS } from "../data/constants";

const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    href: LINKS.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: LINKS.github,
    icon: GithubIcon,
  },
  {
    label: "Email",
    href: `mailto:${LINKS.email}`,
    icon: Mail,
  },
];

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("Thanks! Your message has been sent successfully.");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let's build something that acts, not just answers."
          description="Open to AI/ML and Data Science internships and entry-level roles, based in Chennai or Bengaluru."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-hairline-bright bg-panel px-4 py-2.5 text-sm text-ink transition-colors hover:border-cyan/50"
            >
              <Icon className="h-4 w-4 text-ink-faint" />
              {label}
            </a>
          ))}
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="mx-auto max-w-xl space-y-4 text-left"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Don't fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm text-ink-faint"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-lg border border-hairline-bright bg-panel px-4 py-3 text-ink outline-none transition-colors focus:border-cyan/50"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-ink-faint"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-lg border border-hairline-bright bg-panel px-4 py-3 text-ink outline-none transition-colors focus:border-cyan/50"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-ink-faint"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Tell me about your project or opportunity..."
              className="w-full resize-none rounded-lg border border-hairline-bright bg-panel px-4 py-3 text-ink outline-none transition-colors focus:border-cyan/50"
            />
          </div>

          <button
            type="submit"
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-cyan hover:bg-cyan/20"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-green-400">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}