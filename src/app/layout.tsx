import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nyayamarga Law Chambers | Advocates & Legal Consultants",
  description:
    "Nyayamarga Law Chambers provides expert legal services in Civil, Criminal, Property, Family, Consumer and Corporate Law matters in Bengaluru.",
  keywords: [
    "Nyayamarga Law Chambers",
    "Law Firm Bengaluru",
    "Advocate Yelahanka",
    "Civil Lawyer Bengaluru",
    "Criminal Lawyer Bengaluru",
    "Property Lawyer Bengaluru",
    "Family Lawyer Bengaluru",
    "Corporate Lawyer Bengaluru",
  ],
  authors: [{ name: "Nyayamarga Law Chambers" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}