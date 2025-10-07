import { Container } from "@/components";
import React from "react";

export default function CookiePolicy() {
  return (
    <Container>
      <div className=" bg-gray-50 text-gray-800 py-12 px-6">
        <div className=" mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="mb-4 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-4">
            Welcome to <span className="font-semibold">devseal.tech</span>.
            This Cookie Policy explains how we use cookies and similar
            technologies on our website. By using this site, you consent to our
            use of cookies as described below (where required by law).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            1. What Are Cookies?
          </h2>
          <p className="mb-4">
            Cookies are small text files placed on your device by websites you
            visit. They help us improve your experience by remembering
            preferences and understanding how our site is used.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            2. Types of Cookies We Use
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Strictly Necessary Cookies:</strong> Essential for the
              website to function (e.g., form submissions, security).
            </li>
            <li>
              <strong>Performance / Analytics Cookies:</strong> Help us
              understand how users interact with our site to improve
              functionality.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your choices (like
              language or preferences).
            </li>
            <li>
              <strong>Targeting / Advertising Cookies:</strong> May be used in
              the future to deliver personalized content or measure marketing
              campaigns.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            3. Third-Party Cookies
          </h2>
          <p className="mb-4">
            Some third-party services, such as analytics or embedded content
            providers, may place cookies on your device. We do not control these
            cookies. Please review the privacy policies of these providers for
            details.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">4. Your Choices</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              Most web browsers allow you to control cookies through settings.
            </li>
            <li>
              You may disable cookies, but this may impact certain features of
              our website.
            </li>
            <li>
              If we use analytics or marketing cookies, you will have the option
              to opt in or opt out via a cookie banner.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies, please contact
            us at:
          </p>
          <address className="not-italic mb-6">
            Email:{" "}
            <a
              href="mailto:hello@devseal.tech"
              className="text-blue-600 hover:underline"
            >
              hello@devseal.tech
            </a>
            <br />
            Address:{" "}
            <ul className="space-y-6 mt-4">
              <li>
                <h4 className="font-bold">DevSeal Technologies Africa</h4>
                Plot 9 Gbagada - Oworonshoki Expy, beside UPS, Araromi 105102,
                Lagos, Nigeria
              </li>
              <li>
                <h4 className="font-bold">
                  DevSeal Technologies North America
                </h4>
                1452 Hughes Road, Suite 200, Grapevine, TX 76051, USA
              </li>
            </ul>
          </address>

          <p className="text-sm text-gray-500">
            We may update this Cookie Policy from time to time. Please revisit
            this page to stay informed about our practices.
          </p>
        </div>
      </div>
    </Container>
  );
}
