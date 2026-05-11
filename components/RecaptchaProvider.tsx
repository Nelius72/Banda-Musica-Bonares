'use client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
      language="es"
      // Aquí puedes añadir scriptProps si necesitas defer o async según la doc
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}