import "./globals.css";

export const metadata = {
  title: "Adeel Ul Rehman — Full-Stack Software Engineer & AI Systems Architect",
  description: "Official portfolio of Adeel Ul Rehman. Full-Stack Software Engineer and AI Systems Architect specializing in resilient web platforms, generative 3D environments, and autonomous AI pipelines.",
  keywords: ["Adeel Ul Rehman", "Full-Stack Engineer", "AI Systems Architect", "Next.js Portfolio", "React", "Three.js", "Python Automation", "Lahore Pakistan"],
  authors: [{ name: "Adeel Ul Rehman" }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
