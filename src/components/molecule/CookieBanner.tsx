"use client";
import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button, Card } from "../atom";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("performance-cookies="))
      ?.split("=")[1];

    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const setCookie = (name: string, value: string, days = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
  };

  const acceptCookies = () => {
    setCookie("performance-cookies", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    setCookie("performance-cookies", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-2xl">
      <Card className="border-border  shadow-lg" variant="tertiary">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Cookie className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              {/* <h3 className="font-semibold text-foreground mb-2">Performance Cookies</h3> */}
              <div className=" text-muted-foreground mb-4">
                We use cookies to analyze website traffic and measure page load
                times. These cookies help us understand how users interact with
                our website to improve system efficiency.
                <a
                  href="/cookie-policy"
                  className="block underline text-blue-600 text-xl font-bold"
                >
                  Cookie Policy
                </a>
              </div>
              <p className="text-lg text-primary mb-2 mt-12">
                By clicking “Accept”, you agree to the storing of cookies on
                your device to enhance site navigation and analyze site usage.
              </p>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="unstyled"
                  href={""}
                  onClick={acceptCookies}
                  className="bg-risd-blue-900 text-white px-10 hover:text-grey-100 font-medium hover:bg-primary/90 text-primary-foreground"
                >
                  Accept
                </Button>
                <Button
                  variant="unstyled"
                  href={""}
                  onClick={declineCookies}
                  className="border-border px-10 border-risd-blue-900 border bg-transparent"
                >
                  Decline
                </Button>
              </div>
            </div>
            <button
              onClick={declineCookies}
              className="p-1 h-auto w-auto text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
