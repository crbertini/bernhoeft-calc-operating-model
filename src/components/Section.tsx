import type { ReactNode } from "react";
export function Section({eyebrow,title,intro,children,id}:{eyebrow?:string,title:string,intro?:string,children:ReactNode,id?:string}) {
  return <section className="section" id={id}><div className="container">
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2>{intro && <p className="sectionIntro">{intro}</p>}{children}
  </div></section>
}
export function BulletList({items}:{items?:string[]}) { if(!items?.length) return null; return <ul className="cleanList">{items.map((x,i)=><li key={i}>{x}</li>)}</ul> }
