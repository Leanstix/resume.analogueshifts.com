"use client"; // Mark the component as client-side

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useAuth } from "@/hooks/auth"; // Import the custom auth hook

export default function ValidateToken() {
  const searchParams = useSearchParams(); // Access query parameters
  const token = searchParams.get("token"); // Extract the token from the URL
  const router = useRouter(); // For programmatic navigation

  const { validateApp, notifyUser } = useAuth(); // Use validateApp and notifyUser from the auth hook

  useEffect(() => {
    const handleValidation = async () => {
      if (token) {
        // Save the token as a cookie to be used later
        Cookies.set("authToken", token, { expires: 7 }); // Cookie expires in 7 days

        try {
          // Validate the token using the validateApp function from useAuth
          await validateApp({ appToken: token });

          // Notify the user of success after validation
          notifyUser("success", "Token validated successfully", "right");

          // Redirect the user after validation
          setTimeout(() => {
            router.push("/"); // Redirect to the homepage or any route
          }, 1500); // Delay for user feedback
        } catch (error) {
          notifyUser("error", "Token validation failed", "right");
          router.push("/"); // Redirect to the homepage or any route
        }
      } else {
        // If no token is found, redirect to the saved redirection link or default route
        let RedirectionLink = Cookies.get("RedirectionLink");
        router.push(RedirectionLink || "/"); // Redirect to the saved link or the homepage
      }
    };

    handleValidation(); // Execute the validation logic
  }, [token, router, validateApp, notifyUser]); // Dependency array includes token, router, and auth functions

  return (
    <main className="w-full h-max py-28 flex justify-center items-center">
      <h2 className="text-tremor-brand-boulder900 font-medium text-base">
        Validating...
      </h2>
    </main>
  );
}
