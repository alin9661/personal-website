'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if we're in the browser
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}