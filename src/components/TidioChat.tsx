import Script from "next/script";

export default function TidioChat() {
  return (
    <Script
      src="https://code.tidio.co/bsiq9ccspqemvyeibr4x5ubkig0dkess.js"
      strategy="afterInteractive"
      async
    />
  );
}
