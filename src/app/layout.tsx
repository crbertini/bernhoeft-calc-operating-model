import type { Metadata } from "next";
import Header from "@/components/Header";
import { ChapterPager } from "@/components/PresentationNavigation";
import { getSite } from "@/lib/content/load";
import "./globals.css";
import "./navigation.css";

export const metadata: Metadata = { title:"Bernhoeft CALC — Operating Model", description:"Disciplina para Operar. Ousadia para Transformar." };

export default function RootLayout({children}:{children:React.ReactNode}) {
  const { navigation } = getSite();
  return <html lang="pt-BR"><body><Header/><main>{children}</main><ChapterPager navigation={navigation}/><footer><div className="container">Bernhoeft CALC • Operating Model vivo, orientado por papéis, capacidades e accountability.</div></footer></body></html>;
}
