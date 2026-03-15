import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "ABA Quality Index cookie policy. What cookies are used on this site and how to manage your cookie preferences.",
};

export default function CookiePolicyPage() {
  return (
    <PolicyPage title="Cookie Policy">
      <h2>What Cookies Does ABA Quality Index Use?</h2>
      <p>
        ABA Quality Index uses a limited number of cookies to operate the website and understand how visitors use the platform. Cookies are small text files stored on your device when you visit a website. ABA Quality Index uses the following categories of cookies:
      </p>

      <h3>Essential Cookies</h3>
      <p>
        Essential cookies are required for basic site functionality, including navigation, page rendering, and security. These cookies do not collect personal information and cannot be disabled without affecting site functionality.
      </p>

      <h3>Analytics Cookies</h3>
      <p>
        ABA Quality Index uses analytics cookies to understand how visitors interact with the website, including which pages are visited most frequently, how long visitors spend on each page, and where visitors navigate from. This data is aggregated and anonymized. ABA Quality Index uses this information to improve the website experience. No individual user behavior is tracked or shared with third parties.
      </p>

      <h2>Does ABA Quality Index Use Third-Party Cookies?</h2>
      <p>
        ABA Quality Index may use third-party analytics services that set their own cookies. These services process data in accordance with their own privacy policies. ABA Quality Index does not use advertising cookies, retargeting pixels, or third-party tracking for advertising purposes.
      </p>

      <h2>How Can Users Manage Cookies?</h2>
      <p>
        Most web browsers allow users to control cookies through their settings. You can typically find cookie controls in your browser&apos;s &ldquo;Settings&rdquo; or &ldquo;Preferences&rdquo; menu. Options include blocking all cookies, blocking third-party cookies, or deleting cookies when you close your browser. Blocking essential cookies may affect the functionality of ABA Quality Index.
      </p>

      <h2>Updates to This Cookie Policy</h2>
      <p>
        ABA Quality Index will update this Cookie Policy if new cookie types are added or existing cookies change in purpose. Changes are posted on this page with an updated revision date.
      </p>
    </PolicyPage>
  );
}
