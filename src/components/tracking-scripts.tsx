"use client";

import Script from "next/script";

// SongRocket Tracking IDs
const GA_MEASUREMENT_ID = "G-DRZ37H745Z"; // Google Analytics 4
const TIDIO_PUBLIC_KEY = "pe2gc0pcrfyptbqpms7imh7hfxten5f8"; // Tidio Live Chat
const AXEPTIO_CLIENT_ID = "609d0ba9e34b5e7472d7fdda"; // Axeptio Cookie Consent

export function TrackingScripts() {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* Tidio Live Chat Widget */}
      <Script
        src={`//code.tidio.co/${TIDIO_PUBLIC_KEY}.js`}
        strategy="lazyOnload"
      />

      {/* Axeptio Cookie Consent */}
      <Script id="axeptio-settings" strategy="afterInteractive">
        {`
          window.axeptioSettings = {
            clientId: "${AXEPTIO_CLIENT_ID}",
            cookiesVersion: "songrocket-en",
          };
        `}
      </Script>
      <Script
        src="//static.axept.io/sdk.js"
        strategy="lazyOnload"
      />
    </>
  );
}

// Optional: Facebook Pixel (if needed)
export function FacebookPixel() {
  const FB_PIXEL_ID = "YOUR_FACEBOOK_PIXEL_ID"; // Replace with actual Pixel ID

  return (
    <Script id="facebook-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FB_PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}

// Optional: Hotjar (if needed for heatmaps)
export function Hotjar() {
  const HOTJAR_ID = "YOUR_HOTJAR_ID"; // Replace with actual Hotjar ID

  return (
    <Script id="hotjar" strategy="afterInteractive">
      {`
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
    </Script>
  );
}
