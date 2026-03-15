import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "ABA Quality Index accessibility statement. Our commitment to WCAG 2.1 AA compliance and digital accessibility.",
};

export default function AccessibilityPage() {
  return (
    <PolicyPage title="Accessibility Statement">
      <h2>Our Commitment to Accessibility</h2>
      <p>
        ABA Quality Index is committed to making its website accessible to all users, including individuals with disabilities. ABA Quality Index follows the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA conformance level as the standard for digital accessibility.
      </p>

      <h2>What Accessibility Standards Does ABA Quality Index Follow?</h2>
      <p>
        ABA Quality Index is designed and developed with the following accessibility principles:
      </p>
      <ul>
        <li>All images include descriptive alt text for screen reader users</li>
        <li>All pages use semantic HTML structure with proper heading hierarchy</li>
        <li>Color contrast ratios meet WCAG 2.1 AA minimums (4.5:1 for normal text, 3:1 for large text)</li>
        <li>All interactive elements are keyboard-accessible</li>
        <li>Forms include descriptive labels and error messages</li>
        <li>The site is responsive and usable across devices and screen sizes</li>
        <li>Text can be resized up to 200% without loss of content or functionality</li>
      </ul>

      <h2>How Can Users Report Accessibility Issues?</h2>
      <p>
        ABA Quality Index welcomes feedback on the accessibility of this website. If you encounter an accessibility barrier or have suggestions for improvement, contact ABA Quality Index at info@abaqualityindex.com with a description of the issue. ABA Quality Index will respond to accessibility reports within 5 business days and work to resolve identified issues promptly.
      </p>
    </PolicyPage>
  );
}
