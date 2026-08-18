import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
export const metadata: Metadata = { title:"Bernhoeft CALC — Operating Model", description:"Disciplina para Operar. Ousadia para Transformar." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body><Header/><main>{children}</main><footer><div className="container">Bernhoeft CALC • Operating Model vivo, orientado por papéis, capacidades e accountability.</div></footer></body></html> }
