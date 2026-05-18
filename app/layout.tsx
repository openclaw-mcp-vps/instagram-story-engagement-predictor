import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StoryPredict – Instagram Story Engagement Predictor",
  description: "Predict Instagram story engagement before posting. Analyze content, timing, and audience data to maximize reach.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f3510d58-671a-41e5-a8d0-31ba26204812"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
