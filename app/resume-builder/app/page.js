"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  //Redirect user to the home page
  useEffect(() => router.push("/resume-builder/app/how-to-start"), []);
  return null;
}
