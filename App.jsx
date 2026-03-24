import { useState, useEffect, useRef } from "react";

// ─── COMPASS MARK ────────────────────────────────────────────────────────────
function CompassMark({ size = 32, color = "#2C4A2E", accent = "#C4933F" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="20" r="13" stroke={accent} strokeWidth="0.75" strokeDasharray="2 3" fill="none" />
      <polygon points="20,4 22.5,18 20,21 17.5,18" fill={color} />
      <polygon points="20,36 17.5,22 20,19 22.5,22" fill={accent} />
      <polygon points="4,20 18,17.5 21,20 18,22.5" fill={accent} />
      <polygon points="36,20 22,22.5 19,20 22,17.5" fill={color} />
      <circle cx="20" cy="20" r="2.5" fill={accent} />
      <circle cx="20" cy="20" r="1" fill={color} />
    </svg>
  );
}

// ─── LEAF BUILDING BLOCK ─────────────────────────────────────────────────────
function Leaf({ x, y, rotate, size = 1, color = "#3D6B40", flip = false, opacity = 0.85 }) {
  const s = size;
  const f = flip ? -1 : 1;
  return (
    <g transform={"translate(" + x + "," + y + ") rotate(" + rotate + ")"}>
      <path
        d={"M0,0 C" + (f*8*s) + ",-" + (12*s) + " " + (f*18*s) + ",-" + (10*s) + " " + (f*16*s) + ",0 C" + (f*18*s) + "," + (10*s) + " " + (f*8*s) + "," + (12*s) + " 0,0"}
        fill={color} opacity={opacity}
      />
      <path d={"M0,0 L" + (f*13*s) + ",0"} stroke="#1E3520" strokeWidth="0.5" opacity="0.3" />
    </g>
  );
}

// ─── DARK VINE (cream/beige backgrounds) ─────────────────────────────────────
function VineLeft({ opacity = 0.28 }) {
  return (
    <svg style={{ position:"absolute", left:0, top:0, height:"100%", width:"200px", pointerEvents:"none" }}
      viewBox="0 0 200 900" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg" opacity={opacity}>
      <path d="M35,0 C35,0 20,50 38,100 C56,150 18,200 32,270 C46,340 15,390 30,460 C45,530 12,580 28,650 C44,720 20,780 35,900" stroke="#2C4A2E" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M38,100 C38,100 70,85 80,65 C90,45 72,30 55,42" stroke="#3D6B40" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M32,270 C32,270 0,255 -8,275 C-16,295 5,310 25,290" stroke="#4A7C50" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M30,460 C30,460 65,445 78,468 C91,490 68,508 45,490" stroke="#3D6B40" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M28,650 C28,650 -5,638 -12,660 C-19,682 8,695 28,672" stroke="#4A7C50" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M30,380 C30,380 50,365 48,350 C46,338 35,342 30,355" stroke="#3D6B40" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M35,575 C35,575 18,563 22,550 C26,537 38,544 35,558" stroke="#4A7C50" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <Leaf x={38}  y={55}  rotate={-40} size={1.2} color="#2C4A2E" opacity={0.9} />
      <Leaf x={38}  y={55}  rotate={145} size={0.9} color="#3D6B40" flip={true} opacity={0.8} />
      <Leaf x={32}  y={175} rotate={28}  size={1.0} color="#8DB84A" opacity={0.85} />
      <Leaf x={32}  y={175} rotate={210} size={0.85} color="#A0C355" flip={true} opacity={0.75} />
      <Leaf x={30}  y={330} rotate={-48} size={1.3} color="#4A7C50" opacity={0.9} />
      <Leaf x={30}  y={330} rotate={132} size={0.9} color="#5A8C5E" flip={true} opacity={0.8} />
      <Leaf x={28}  y={490} rotate={22}  size={1.0} color="#C4933F" opacity={0.7} />
      <Leaf x={28}  y={490} rotate={200} size={0.95} color="#B8852E" flip={true} opacity={0.6} />
      <Leaf x={35}  y={660} rotate={-38} size={1.1} color="#7AA66E" opacity={0.85} />
      <Leaf x={35}  y={660} rotate={142} size={0.8} color="#5A8C5E" flip={true} opacity={0.75} />
      <Leaf x={65}  y={80}  rotate={-18} size={0.95} color="#A0C355" opacity={0.8} />
      <Leaf x={5}   y={268} rotate={162} size={0.85} color="#4A7C50" opacity={0.75} />
      <Leaf x={68}  y={458} rotate={-12} size={0.9}  color="#7AA66E" opacity={0.8} />
      <Leaf x={5}   y={655} rotate={168} size={0.85} color="#5A8C5E" opacity={0.75} />
      <Leaf x={22}  y={140} rotate={60}  size={0.65} color="#E8C5B0" opacity={0.55} />
      <Leaf x={42}  y={400} rotate={-70} size={0.6}  color="#E8C87A" opacity={0.5} />
      <Leaf x={18}  y={610} rotate={80}  size={0.65} color="#E8C87A" opacity={0.55} />
    </svg>
  );
}

function VineRight({ opacity = 0.28 }) {
  return (
    <svg style={{ position:"absolute", right:0, top:0, height:"100%", width:"200px", pointerEvents:"none" }}
      viewBox="0 0 200 900" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg" opacity={opacity}>
      <path d="M165,0 C165,0 180,50 162,100 C144,150 182,200 168,270 C154,340 185,390 170,460 C155,530 188,580 172,650 C156,720 180,780 165,900" stroke="#2C4A2E" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M162,100 C162,100 130,85 120,65 C110,45 128,30 145,42" stroke="#3D6B40" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M168,270 C168,270 200,255 208,275 C216,295 195,310 175,290" stroke="#4A7C50" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M170,460 C170,460 135,445 122,468 C109,490 132,508 155,490" stroke="#3D6B40" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M172,650 C172,650 205,638 212,660 C219,682 192,695 172,672" stroke="#4A7C50" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M170,380 C170,380 150,365 152,350 C154,338 165,342 170,355" stroke="#3D6B40" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M165,575 C165,575 182,563 178,550 C174,537 162,544 165,558" stroke="#4A7C50" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <Leaf x={162} y={55}  rotate={222} size={1.2} color="#A0C355" flip={true} opacity={0.85} />
      <Leaf x={162} y={55}  rotate={38}  size={0.9} color="#8DB84A" opacity={0.75} />
      <Leaf x={168} y={175} rotate={152} size={1.0} color="#2C4A2E" flip={true} opacity={0.9} />
      <Leaf x={168} y={175} rotate={330} size={0.85} color="#3D6B40" opacity={0.8} />
      <Leaf x={170} y={330} rotate={228} size={1.3} color="#C4933F" flip={true} opacity={0.7} />
      <Leaf x={170} y={330} rotate={48}  size={0.9} color="#B8852E" opacity={0.6} />
      <Leaf x={172} y={490} rotate={158} size={1.0} color="#7AA66E" flip={true} opacity={0.85} />
      <Leaf x={172} y={490} rotate={342} size={0.95} color="#5A8C5E" opacity={0.8} />
      <Leaf x={165} y={660} rotate={218} size={1.1} color="#8DB84A" flip={true} opacity={0.8} />
      <Leaf x={165} y={660} rotate={38}  size={0.8} color="#4A7C50" opacity={0.75} />
      <Leaf x={135} y={80}  rotate={198} size={0.95} color="#4A7C50" flip={true} opacity={0.8} />
      <Leaf x={195} y={268} rotate={18}  size={0.85} color="#C4933F" opacity={0.6} />
      <Leaf x={132} y={458} rotate={195} size={0.9}  color="#8DB84A" flip={true} opacity={0.8} />
      <Leaf x={195} y={655} rotate={12}  size={0.85} color="#4A7C50" opacity={0.75} />
      <Leaf x={178} y={140} rotate={118} size={0.65} color="#E8C5B0" flip={true} opacity={0.55} />
      <Leaf x={158} y={400} rotate={248} size={0.6}  color="#E8C87A" flip={true} opacity={0.5} />
      <Leaf x={182} y={610} rotate={100} size={0.65} color="#F5E6DC" flip={true} opacity={0.5} />
    </svg>
  );
}

// ─── LIGHT VINE (green/dark backgrounds) ─────────────────────────────────────
function VineLeftLight({ opacity = 0.18 }) {
  return (
    <svg style={{ position:"absolute", left:0, top:0, height:"100%", width:"200px", pointerEvents:"none" }}
      viewBox="0 0 200 900" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg" opacity={opacity}>
      <path d="M35,0 C35,0 20,50 38,100 C56,150 18,200 32,270 C46,340 15,390 30,460 C45,530 12,580 28,650 C44,720 20,780 35,900" stroke="#FAF6F0" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M38,100 C38,100 70,85 80,65 C90,45 72,30 55,42" stroke="#F0E8DE" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M32,270 C32,270 0,255 -8,275 C-16,295 5,310 25,290" stroke="#FAF6F0" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M30,460 C30,460 65,445 78,468 C91,490 68,508 45,490" stroke="#F0E8DE" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M28,650 C28,650 -5,638 -12,660 C-19,682 8,695 28,672" stroke="#FAF6F0" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M30,380 C30,380 50,365 48,350 C46,338 35,342 30,355" stroke="#F0E8DE" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M35,575 C35,575 18,563 22,550 C26,537 38,544 35,558" stroke="#FAF6F0" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <Leaf x={38}  y={55}  rotate={-40} size={1.2} color="#FAF6F0" opacity={0.9} />
      <Leaf x={38}  y={55}  rotate={145} size={0.9} color="#F0E8DE" flip={true} opacity={0.8} />
      <Leaf x={32}  y={175} rotate={28}  size={1.0} color="#FAF6F0" opacity={0.85} />
      <Leaf x={32}  y={175} rotate={210} size={0.85} color="#E8C87A" flip={true} opacity={0.7} />
      <Leaf x={30}  y={330} rotate={-48} size={1.3} color="#F0E8DE" opacity={0.9} />
      <Leaf x={30}  y={330} rotate={132} size={0.9} color="#FAF6F0" flip={true} opacity={0.8} />
      <Leaf x={28}  y={490} rotate={22}  size={1.0} color="#E8C87A" opacity={0.7} />
      <Leaf x={28}  y={490} rotate={200} size={0.95} color="#F0E8DE" flip={true} opacity={0.6} />
      <Leaf x={35}  y={660} rotate={-38} size={1.1} color="#FAF6F0" opacity={0.85} />
      <Leaf x={35}  y={660} rotate={142} size={0.8} color="#F0E8DE" flip={true} opacity={0.75} />
      <Leaf x={65}  y={80}  rotate={-18} size={0.95} color="#E8C87A" opacity={0.7} />
      <Leaf x={5}   y={268} rotate={162} size={0.85} color="#FAF6F0" opacity={0.75} />
      <Leaf x={68}  y={458} rotate={-12} size={0.9}  color="#F0E8DE" opacity={0.8} />
      <Leaf x={5}   y={655} rotate={168} size={0.85} color="#FAF6F0" opacity={0.75} />
      <Leaf x={22}  y={140} rotate={60}  size={0.65} color="#E8C87A" opacity={0.6} />
      <Leaf x={42}  y={400} rotate={-70} size={0.6}  color="#F5E6DC" opacity={0.55} />
      <Leaf x={18}  y={610} rotate={80}  size={0.65} color="#E8C87A" opacity={0.6} />
    </svg>
  );
}

function VineRightLight({ opacity = 0.18 }) {
  return (
    <svg style={{ position:"absolute", right:0, top:0, height:"100%", width:"200px", pointerEvents:"none" }}
      viewBox="0 0 200 900" preserveAspectRatio="xMaxYMid meet" xmlns="http://www.w3.org/2000/svg" opacity={opacity}>
      <path d="M165,0 C165,0 180,50 162,100 C144,150 182,200 168,270 C154,340 185,390 170,460 C155,530 188,580 172,650 C156,720 180,780 165,900" stroke="#FAF6F0" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M162,100 C162,100 130,85 120,65 C110,45 128,30 145,42" stroke="#F0E8DE" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M168,270 C168,270 200,255 208,275 C216,295 195,310 175,290" stroke="#FAF6F0" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M170,460 C170,460 135,445 122,468 C109,490 132,508 155,490" stroke="#F0E8DE" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M172,650 C172,650 205,638 212,660 C219,682 192,695 172,672" stroke="#FAF6F0" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M170,380 C170,380 150,365 152,350 C154,338 165,342 170,355" stroke="#F0E8DE" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <path d="M165,575 C165,575 182,563 178,550 C174,537 162,544 165,558" stroke="#FAF6F0" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <Leaf x={162} y={55}  rotate={222} size={1.2} color="#FAF6F0" flip={true} opacity={0.85} />
      <Leaf x={162} y={55}  rotate={38}  size={0.9} color="#E8C87A" opacity={0.75} />
      <Leaf x={168} y={175} rotate={152} size={1.0} color="#FAF6F0" flip={true} opacity={0.9} />
      <Leaf x={168} y={175} rotate={330} size={0.85} color="#F0E8DE" opacity={0.8} />
      <Leaf x={170} y={330} rotate={228} size={1.3} color="#E8C87A" flip={true} opacity={0.7} />
      <Leaf x={170} y={330} rotate={48}  size={0.9} color="#FAF6F0" opacity={0.6} />
      <Leaf x={172} y={490} rotate={158} size={1.0} color="#F0E8DE" flip={true} opacity={0.85} />
      <Leaf x={172} y={490} rotate={342} size={0.95} color="#FAF6F0" opacity={0.8} />
      <Leaf x={165} y={660} rotate={218} size={1.1} color="#E8C87A" flip={true} opacity={0.8} />
      <Leaf x={165} y={660} rotate={38}  size={0.8} color="#FAF6F0" opacity={0.75} />
      <Leaf x={135} y={80}  rotate={198} size={0.95} color="#F0E8DE" flip={true} opacity={0.8} />
      <Leaf x={195} y={268} rotate={18}  size={0.85} color="#E8C87A" opacity={0.6} />
      <Leaf x={132} y={458} rotate={195} size={0.9}  color="#FAF6F0" flip={true} opacity={0.8} />
      <Leaf x={195} y={655} rotate={12}  size={0.85} color="#F0E8DE" opacity={0.75} />
      <Leaf x={178} y={140} rotate={118} size={0.65} color="#E8C87A" flip={true} opacity={0.6} />
      <Leaf x={158} y={400} rotate={248} size={0.6}  color="#FAF6F0" flip={true} opacity={0.55} />
      <Leaf x={182} y={610} rotate={100} size={0.65} color="#F5E6DC" flip={true} opacity={0.55} />
    </svg>
  );
}



const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --forest: #2C4A2E; --forest-mid: #3D6B40; --forest-lt: #5A8C5E;
    --blush: #E8C5B0; --blush-lt: #F5E6DC;
    --gold: #C4933F; --gold-lt: #E8C87A;
    --cream: #FAF6F0; --cream-dk: #F0E8DE;
    --bark: #6B4F3A; --text: #2A2218; --text-mid: #5A4E44; --text-lt: #8A7E74; --white: #FFFFFF;
  }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--text); line-height: 1.6; overflow-x: hidden; }
  h1,h2,h3,h4 { font-family: 'Cormorant Garamond', serif; font-weight: 500; line-height: 1.2; }

  nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 1.2rem 3rem; background: rgba(250,246,240,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(196,147,63,0.15); }
  .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 600; color: var(--forest); cursor: pointer; display: flex; align-items: center; gap: 0.5rem; }
  .nav-logo span { color: var(--gold); }
  .nav-links { display: flex; gap: 2rem; align-items: center; }
  .nav-link { font-size: 0.875rem; font-weight: 400; letter-spacing: 0.03em; color: var(--text-mid); cursor: pointer; transition: color 0.2s; background: none; border: none; font-family: 'DM Sans', sans-serif; }
  .nav-link:hover, .nav-link.active { color: var(--forest); }
  .nav-cta { background: var(--forest); color: var(--cream); padding: 0.55rem 1.4rem; border-radius: 2rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; border: none; font-family: 'DM Sans', sans-serif; transition: background 0.2s, transform 0.15s; }
  .nav-cta:hover { background: var(--forest-mid); transform: translateY(-1px); }

  .btn-primary { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--forest); color: var(--cream); padding: 0.9rem 2.2rem; border-radius: 3rem; font-size: 1rem; font-weight: 500; cursor: pointer; border: none; font-family: 'DM Sans', sans-serif; transition: all 0.25s; }
  .btn-primary:hover { background: var(--forest-mid); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(44,74,46,0.25); }
  .btn-outline { display: inline-flex; align-items: center; gap: 0.5rem; background: transparent; color: var(--forest); padding: 0.85rem 2rem; border-radius: 3rem; font-size: 0.95rem; font-weight: 500; cursor: pointer; border: 2px solid var(--forest); font-family: 'DM Sans', sans-serif; transition: all 0.25s; }
  .btn-outline:hover { background: var(--forest); color: var(--cream); transform: translateY(-2px); }
  .btn-gold { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--gold); color: var(--white); padding: 0.9rem 2.2rem; border-radius: 3rem; font-size: 1rem; font-weight: 500; cursor: pointer; border: none; font-family: 'DM Sans', sans-serif; transition: all 0.25s; }
  .btn-gold:hover { background: var(--bark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(196,147,63,0.3); }

  .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 8rem 2rem 4rem; background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(90,140,94,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(232,197,176,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 20% 70%, rgba(196,147,63,0.08) 0%, transparent 60%); }
  .hero-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--blush-lt); color: var(--bark); padding: 0.4rem 1.1rem; border-radius: 2rem; font-size: 0.8rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1.8rem; }
  .hero h1 { font-size: clamp(3rem, 7vw, 5.5rem); color: var(--forest); max-width: 820px; margin-bottom: 1.2rem; }
  .hero h1 em { color: var(--gold); font-style: italic; }
  .hero-sub { font-size: clamp(1rem, 2vw, 1.2rem); color: var(--text-mid); max-width: 540px; margin: 0 auto 2.5rem; font-weight: 300; line-height: 1.8; }
  .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .hero-scroll { margin-top: 5rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: var(--text-lt); font-size: 0.8rem; letter-spacing: 0.05em; animation: bounce 2.5s ease-in-out infinite; }
  @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }

  .section { padding: 6rem 2rem; }
  .section-inner { max-width: 1100px; margin: 0 auto; }
  .section-label { display: inline-block; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.8rem; }
  .section-title { font-size: clamp(2rem, 4vw, 3rem); color: var(--forest); margin-bottom: 1rem; }
  .section-sub { font-size: 1.05rem; color: var(--text-mid); max-width: 580px; font-weight: 300; line-height: 1.8; }

  .framework-section { background: var(--cream-dk); }
  .framework-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
  .framework-card { background: var(--cream); border-radius: 1.2rem; padding: 1.8rem 1.5rem; border: 1px solid rgba(196,147,63,0.15); transition: transform 0.25s, box-shadow 0.25s; }
  .framework-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(44,74,46,0.1); }
  .framework-icon { width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1rem; }
  .framework-card h4 { font-size: 1.2rem; color: var(--forest); margin-bottom: 0.4rem; }
  .framework-card p { font-size: 0.875rem; color: var(--text-mid); line-height: 1.6; }

  .process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem; }
  .process-card { padding: 2.5rem 2rem; background: var(--white); border-radius: 1.5rem; border: 1px solid var(--cream-dk); box-shadow: 0 2px 12px rgba(44,74,46,0.05); }
  .process-num { font-family: 'Cormorant Garamond', serif; font-size: 4rem; font-weight: 300; color: var(--blush); line-height: 1; margin-bottom: 0.5rem; }
  .process-card h3 { font-size: 1.6rem; color: var(--forest); margin-bottom: 0.8rem; }
  .process-card p { font-size: 0.9rem; color: var(--text-mid); line-height: 1.7; }
  .process-tag { display: inline-block; margin-top: 1rem; background: var(--blush-lt); color: var(--bark); font-size: 0.75rem; padding: 0.3rem 0.8rem; border-radius: 2rem; }

  .cta-section { background: var(--forest); text-align: center; padding: 6rem 2rem; }
  .cta-section .section-label { color: var(--gold-lt); }
  .cta-section h2 { color: var(--cream); font-size: clamp(2rem, 4vw, 3.2rem); margin-bottom: 1rem; }
  .cta-section p { color: rgba(250,246,240,0.7); font-size: 1.05rem; max-width: 500px; margin: 0 auto 2.5rem; }

  .hiw-hero { padding: 10rem 2rem 5rem; text-align: center; background: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(90,140,94,0.1) 0%, transparent 70%); }
  .hiw-hero h1 { font-size: clamp(2.5rem, 5vw, 4rem); color: var(--forest); margin-bottom: 1rem; }
  .hiw-hero p { font-size: 1.1rem; color: var(--text-mid); max-width: 560px; margin: 0 auto; font-weight: 300; line-height: 1.8; }

  .stage-block { padding: 4rem 2rem; }
  .stage-block:nth-child(even) { background: var(--cream-dk); }
  .stage-inner { max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .stage-inner.reverse { direction: rtl; }
  .stage-inner.reverse > * { direction: ltr; }
  .stage-badge { display: inline-flex; align-items: center; background: var(--forest); color: var(--cream); padding: 0.4rem 1rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem; }
  .stage-title { font-size: 2.2rem; color: var(--forest); margin-bottom: 1rem; font-family: 'Cormorant Garamond', serif; }
  .stage-desc { font-size: 0.95rem; color: var(--text-mid); line-height: 1.8; margin-bottom: 1.5rem; }
  .stage-list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
  .stage-list li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.875rem; color: var(--text-mid); }
  .stage-list li::before { content: '◈'; color: var(--gold); flex-shrink: 0; margin-top: 0.1rem; }
  .stage-visual { background: linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 100%); border-radius: 1.5rem; padding: 2.5rem; display: flex; flex-direction: column; gap: 1rem; min-height: 260px; justify-content: center; }
  .stage-visual-item { background: rgba(255,255,255,0.1); border-radius: 0.75rem; padding: 0.8rem 1rem; display: flex; align-items: center; gap: 0.75rem; }
  .stage-visual-item span { color: var(--cream); font-size: 0.875rem; }
  .stage-visual-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--gold-lt); flex-shrink: 0; }

  .dimensions-section { padding: 6rem 2rem; background: var(--forest); }
  .dimensions-inner { max-width: 1100px; margin: 0 auto; }
  .dimensions-section .section-label { color: var(--gold-lt); }
  .dimensions-section .section-title { color: var(--cream); margin-bottom: 0.5rem; }
  .dimensions-section .section-sub { color: rgba(250,246,240,0.65); margin-bottom: 3rem; }
  .dim-grid { display: flex; flex-direction: column; gap: 1.2rem; align-items: center; }
  .dim-row { display: flex; gap: 1.2rem; justify-content: center; }
  .dim-card { width: 220px; flex-shrink: 0; }
  .dim-card { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); border-radius: 1.2rem; padding: 1.8rem 1.4rem; transition: background 0.25s, transform 0.25s; }
  .dim-card:hover { background: rgba(255,255,255,0.12); transform: translateY(-3px); }
  .dim-card .icon { font-size: 1.8rem; margin-bottom: 0.8rem; }
  .dim-card h4 { color: var(--gold-lt); font-size: 1.1rem; margin-bottom: 0.4rem; }
  .dim-card p { color: rgba(250,246,240,0.6); font-size: 0.82rem; line-height: 1.6; }

  .about-hero { padding: 10rem 2rem 5rem; text-align: center; background: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,197,176,0.2) 0%, transparent 70%); }
  .about-hero h1 { font-size: clamp(2.5rem, 5vw, 4rem); color: var(--forest); margin-bottom: 1rem; }
  .about-hero p { font-size: 1.1rem; color: var(--text-mid); max-width: 620px; margin: 0 auto; font-weight: 300; line-height: 1.9; }
  .about-block { padding: 5rem 2rem; }
  .about-block:nth-child(even) { background: var(--cream-dk); }
  .about-inner { max-width: 860px; margin: 0 auto; }
  .problem-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
  .problem-card { background: var(--cream); border-radius: 1.2rem; padding: 1.8rem; border-left: 3px solid var(--gold); }
  .problem-card h4 { color: var(--forest); font-size: 1.1rem; margin-bottom: 0.5rem; }
  .problem-card p { color: var(--text-mid); font-size: 0.875rem; line-height: 1.6; }

  .starter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-top: 2rem; }
  .starter-card { background: var(--white); border-radius: 1.5rem; padding: 2rem 1.8rem; border: 1px solid var(--cream-dk); box-shadow: 0 2px 12px rgba(44,74,46,0.05); cursor: pointer; transition: all 0.25s; display: flex; flex-direction: column; gap: 1rem; }
  .starter-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(44,74,46,0.12); border-color: var(--forest-lt); }
  .starter-card p { color: var(--text-mid); font-size: 0.95rem; line-height: 1.7; flex: 1; }
  .starter-card-cta { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--forest); font-size: 0.82rem; font-weight: 500; }

  .ai-note { background: var(--forest); border-radius: 1.5rem; padding: 2.5rem; text-align: center; margin-top: 2.5rem; }
  .ai-note h3 { color: var(--cream); font-size: 1.8rem; margin-bottom: 0.8rem; }
  .ai-note p { color: rgba(250,246,240,0.7); font-size: 0.95rem; max-width: 560px; margin: 0 auto; line-height: 1.8; }

  .workshop-page { min-height: 100vh; padding-top: 70px; display: flex; flex-direction: column; background: var(--cream); }
  .workshop-layout { display: grid; grid-template-columns: 260px 1fr; flex: 1; max-width: 1100px; width: 100%; margin: 0 auto; padding: 2rem; gap: 2rem; }
  .workshop-sidebar { background: var(--white); border-radius: 1.5rem; border: 1px solid var(--cream-dk); padding: 1.8rem; height: fit-content; position: sticky; top: 90px; }
  .sidebar-title { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.2rem; }
  .stage-steps { display: flex; flex-direction: column; gap: 0.4rem; }
  .stage-step { display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 0.8rem; border-radius: 0.75rem; font-size: 0.85rem; color: var(--text-lt); transition: all 0.2s; }
  .stage-step.active { background: var(--blush-lt); color: var(--forest); font-weight: 500; }
  .stage-step.complete { color: var(--forest-lt); }
  .step-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--cream-dk); flex-shrink: 0; }
  .stage-step.active .step-dot { background: var(--gold); }
  .stage-step.complete .step-dot { background: var(--forest-lt); }

  .workshop-main { display: flex; flex-direction: column; gap: 1.5rem; }
  .survey-block { background: var(--white); border-radius: 1.5rem; border: 1px solid var(--cream-dk); padding: 2rem; }
  .survey-question { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; color: var(--forest); line-height: 1.4; margin-bottom: 1.2rem; }
  .survey-options { display: flex; flex-direction: column; gap: 0.6rem; }
  .survey-option { display: flex; align-items: center; gap: 0.75rem; padding: 0.8rem 1rem; border-radius: 0.75rem; border: 1.5px solid var(--cream-dk); cursor: pointer; font-size: 0.875rem; color: var(--text-mid); transition: all 0.2s; background: var(--cream); }
  .survey-option:hover { border-color: var(--forest-lt); background: var(--blush-lt); }
  .survey-option.selected { border-color: var(--forest); background: rgba(44,74,46,0.06); color: var(--forest); font-weight: 500; }
  .survey-option-dot { width: 18px; height: 18px; border-radius: 50%; border: 2px solid var(--cream-dk); flex-shrink: 0; transition: all 0.2s; }
  .survey-option.selected .survey-option-dot { border-color: var(--forest); background: var(--forest); }
  .multi-select-grid { display: flex; flex-wrap: wrap; gap: 0.6rem; }
  .chip { padding: 0.5rem 1rem; border-radius: 2rem; border: 1.5px solid var(--cream-dk); cursor: pointer; font-size: 0.82rem; color: var(--text-mid); transition: all 0.2s; background: var(--cream); }
  .chip:hover { border-color: var(--forest-lt); }
  .chip.selected { border-color: var(--forest); background: var(--forest); color: var(--cream); }
  .chip.disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }
  .chip-limit-note { font-size: 0.78rem; color: var(--gold); margin-top: 0.5rem; font-style: italic; }
  .text-input-block textarea { width: 100%; padding: 1rem; border-radius: 0.75rem; border: 1.5px solid var(--cream-dk); background: var(--cream); font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: var(--text); resize: vertical; min-height: 110px; line-height: 1.7; transition: border-color 0.2s; outline: none; }
  .text-input-block textarea:focus { border-color: var(--forest-lt); }
  .text-input-block textarea::placeholder { color: var(--text-lt); }
  .survey-submit { margin-top: 1.2rem; background: var(--forest); color: var(--cream); padding: 0.75rem 2rem; border-radius: 2rem; font-size: 0.9rem; font-weight: 500; cursor: pointer; border: none; font-family: 'DM Sans', sans-serif; transition: all 0.2s; }
  .survey-submit:hover { background: var(--forest-mid); transform: translateY(-1px); }
  .survey-submit:disabled { background: var(--cream-dk); color: var(--text-lt); cursor: not-allowed; transform: none; }
  .progress-bar { background: var(--cream-dk); border-radius: 2rem; height: 6px; overflow: hidden; margin-bottom: 1rem; }
  .progress-fill { height: 100%; background: linear-gradient(90deg, var(--forest), var(--gold)); border-radius: 2rem; transition: width 0.5s ease; }

  .chat-window { background: var(--white); border-radius: 1.5rem; border: 1px solid var(--cream-dk); display: flex; flex-direction: column; min-height: 560px; overflow: hidden; }
  .chat-header { padding: 1.2rem 1.5rem; border-bottom: 1px solid var(--cream-dk); display: flex; align-items: center; gap: 0.75rem; background: var(--cream); }
  .chat-avatar { width: 36px; height: 36px; border-radius: 50%; background: var(--forest); display: flex; align-items: center; justify-content: center; font-size: 1rem; color: var(--cream); flex-shrink: 0; }
  .chat-header-info h4 { font-size: 0.95rem; color: var(--forest); }
  .chat-header-info span { font-size: 0.75rem; color: var(--forest-lt); }
  .online-dot { width: 6px; height: 6px; border-radius: 50%; background: #5CB85C; display: inline-block; margin-right: 4px; }
  .chat-messages { flex: 1; overflow-y: auto; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; max-height: 460px; }
  .chat-messages::-webkit-scrollbar { width: 4px; }
  .chat-messages::-webkit-scrollbar-thumb { background: var(--cream-dk); border-radius: 2px; }
  .msg { display: flex; gap: 0.75rem; align-items: flex-start; animation: fadeIn 0.3s ease; }
  .msg.user { flex-direction: row-reverse; }
  @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  .msg-avatar { width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; }
  .msg-avatar.ai { background: var(--forest); color: var(--cream); }
  .msg-avatar.user { background: var(--blush); color: var(--bark); }
  .msg-bubble { max-width: 75%; padding: 0.9rem 1.2rem; border-radius: 1.2rem; font-size: 0.9rem; line-height: 1.65; }
  .msg.ai .msg-bubble { background: var(--cream-dk); color: var(--text); border-bottom-left-radius: 0.25rem; }
  .msg.user .msg-bubble { background: var(--forest); color: var(--cream); border-bottom-right-radius: 0.25rem; }
  .typing-indicator { display: flex; gap: 4px; align-items: center; padding: 0.4rem 0.2rem; }
  .typing-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--text-lt); animation: typingBounce 1.2s ease-in-out infinite; }
  .typing-dot:nth-child(2) { animation-delay: 0.2s; }
  .typing-dot:nth-child(3) { animation-delay: 0.4s; }
  @keyframes typingBounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }
  .chat-input-row { display: flex; gap: 0.75rem; padding: 1rem 1.5rem; border-top: 1px solid var(--cream-dk); }
  .chat-input { flex: 1; padding: 0.75rem 1rem; border-radius: 2rem; border: 1.5px solid var(--cream-dk); background: var(--cream); font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: var(--text); outline: none; transition: border-color 0.2s; }
  .chat-input:focus { border-color: var(--forest-lt); }
  .chat-send { width: 42px; height: 42px; border-radius: 50%; background: var(--forest); color: var(--cream); border: none; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; transition: background 0.2s, transform 0.15s; flex-shrink: 0; }
  .chat-send:hover:not(:disabled) { background: var(--forest-mid); transform: scale(1.05); }
  .chat-send:disabled { background: var(--cream-dk); color: var(--text-lt); cursor: not-allowed; }
  .profile-ready-banner { margin: 0 1.5rem 1rem; background: var(--blush-lt); border-radius: 1rem; padding: 1rem 1.2rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; border: 1px solid var(--blush); }
  .profile-ready-banner p { font-size: 0.875rem; color: var(--bark); line-height: 1.5; }
  .profile-ready-banner button { background: var(--gold); color: var(--white); border: none; border-radius: 2rem; padding: 0.6rem 1.4rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; white-space: nowrap; transition: background 0.2s; }
  .profile-ready-banner button:hover { background: var(--bark); }

  .profile-card { background: var(--white); border-radius: 1.5rem; border: 1px solid var(--cream-dk); padding: 2.5rem; animation: fadeIn 0.5s ease; }
  .profile-card h2 { color: var(--forest); font-size: 2rem; margin-bottom: 0.5rem; }
  .profile-card > p { color: var(--text-mid); font-size: 0.9rem; margin-bottom: 2rem; }
  .profile-section { margin-bottom: 1.8rem; }
  .profile-section h4 { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.8rem; }
  .profile-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .profile-chip { padding: 0.4rem 1rem; border-radius: 2rem; background: var(--blush-lt); color: var(--bark); font-size: 0.82rem; }
  .profile-direction-card { background: var(--cream-dk); border-radius: 1rem; padding: 1.2rem; margin-bottom: 0.8rem; }
  .profile-direction-card h5 { color: var(--forest); font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; margin-bottom: 0.3rem; }
  .profile-direction-card p { font-size: 0.85rem; color: var(--text-mid); line-height: 1.6; }

  footer { background: var(--text); color: rgba(250,246,240,0.6); padding: 3rem 2rem; text-align: center; }
  .footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: var(--cream); margin-bottom: 0.5rem; }
  .footer-logo span { color: var(--gold); }
  footer p { font-size: 0.82rem; line-height: 1.8; }
  .footer-links { display: flex; gap: 1.5rem; justify-content: center; margin-top: 1rem; }
  .footer-link { font-size: 0.82rem; color: rgba(250,246,240,0.5); cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; transition: color 0.2s; }
  .footer-link:hover { color: var(--cream); }

  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { gap: 1rem; }
    .stage-inner { grid-template-columns: 1fr; gap: 2rem; }
    .stage-inner.reverse { direction: ltr; }
    .workshop-layout { grid-template-columns: 1fr; }
    .workshop-sidebar { display: none; }
  }
`;

const dimensions = [
  { label: "Strengths", color: "#5A8C5E", desc: "What you're naturally good at — your core capabilities and talents." },
  { label: "Interests", color: "#C4933F", desc: "Topics, industries, or activities that genuinely spark your curiosity." },
  { label: "Energy", color: "#E8A87C", desc: "The types of work that light you up versus the ones that drain you." },
  { label: "Values", color: "#9B7EC8", desc: "Your personal motivations — what makes work feel meaningful." },
  { label: "Opportunities", color: "#6BAED6", desc: "Where your strengths and interests exist in the real world." },
];

const STAGE_ORDER = ["intro","why","background","strengths","interests","energy","values","explore","chat","profile"];
const STAGE_LABELS = { intro:"Welcome", why:"Why You're Here", background:"About You", strengths:"Your Strengths", interests:"Your Interests", energy:"Your Energy", values:"Your Values", explore:"Ready to Explore", chat:"Coaching Session", profile:"Your Profile" };

const openStages = {
  why: {
    title: "What's brought you here?",
    subtitle: "There are no right answers — just tell us a little about where you're at.",
    questions: [
      { type: "text", question: "What's brought you to Career Compass today?", placeholder: "It might be a feeling, a situation, a question you can't shake — share whatever comes to mind..." },
      { type: "text", question: "What are you hoping to walk away with from this session?", placeholder: "Even if it's vague, that's okay — 'more clarity' or 'just something to go on' counts..." },
      { type: "text", question: "How are you feeling about your career or path right now?", placeholder: "Stuck? Curious? Overwhelmed? Something else entirely? Be honest with yourself here..." },
    ],
  },
  background: {
    title: "Tell us a little about yourself.",
    subtitle: "Understanding where you've been helps us understand where you might want to go.",
    questions: [
      { type: "text", question: "What do you currently do, or what have you done most recently?", placeholder: "Your role, field, or just what a typical day looks like — whatever feels relevant..." },
      { type: "text", question: "How long have you been on this path, and what has kept you there?", placeholder: "Maybe it was the logical choice, maybe you fell into it — either way, there's no judgment here..." },
      { type: "text", question: "What has worked well for you in your career so far — and what hasn't?", placeholder: "Think about what has given you energy, and what has slowly drained it..." },
    ],
  },
};

const surveyStages = {
  strengths: {
    title: "Let's discover your strengths",
    subtitle: "These questions are about natural tendencies — not just what you're trained to do.",
    questions: [
      { type: "chips", question: "Which of these come naturally to you? (Select all that apply)", options: ["Problem solving","Communication","Empathy","Creativity","Organisation","Leadership","Analysis","Teaching & mentoring","Building things","Research","Listening","Strategic thinking","Writing","Public speaking","Data & numbers"] },
      { type: "text", question: "Describe a moment when you felt really in your element — what were you doing?", placeholder: "It doesn't have to be a big achievement. Even a small moment where things just clicked..." },
      { type: "radio", question: "When people come to you for help, it's usually because:", options: ["You're great at thinking through problems","You're calm and easy to talk to","You get things done and stay organised","You come up with creative ideas","You understand data and find patterns","You help people see the bigger picture"] },
    ],
  },
  interests: {
    title: "What genuinely excites you?",
    subtitle: "Think beyond your job description — what would you explore even without a career attached to it?",
    questions: [
      { type: "chips", question: "Which areas spark your curiosity? (Select all that apply)", options: ["Technology","Design","People & community","Environment","Education","Health & wellness","Business","Arts & culture","Science","Writing & storytelling","Social impact","Finance","Psychology","Innovation","Media & communication"] },
      { type: "text", question: "What do you find yourself reading, watching, or exploring in your free time?", placeholder: "No need to make it sound career-worthy — just be honest about what pulls your attention..." },
      { type: "radio", question: "When you imagine truly fulfilling work, which feels most true?", options: ["I'm creating or designing something","I'm helping or supporting people","I'm solving a complex problem","I'm learning and researching deeply","I'm leading or building something","I'm communicating ideas to others"] },
    ],
  },
  energy: {
    title: "What gives you energy at work?",
    subtitle: "Understanding what lights you up — and what drains you — is one of the most powerful things you can know about yourself.",
    questions: [
      { type: "chips", question: "Which of these work environments energise you? (Select all that apply)", options: ["Working independently","Collaborating with a team","Variety & change","Deep focused work","Creative freedom","Structure & routine","Fast-paced environments","Mentoring others","Flexible or remote work","Hands-on or physical work"] },
      { type: "text", question: "Describe a moment at work — or school, or life — where time just flew by. What were you doing?", placeholder: "This is often one of the most revealing questions. Take your time with it..." },
      { type: "text", question: "What kinds of tasks or situations tend to drain your energy or leave you feeling flat?", placeholder: "Think about what you tend to put off, dread, or feel exhausted by — even small things are worth naming..." },
    ],
  },
  values: {
    title: "What matters most to you?",
    subtitle: "Your values are the compass within the compass — they guide which direction feels right, not just which direction is possible.",
    questions: [
      { type: "chips_limited", max: 5, question: "Which of these matter most to you in your work? (Choose up to 5)", options: ["Autonomy","Impact","Creativity","Stability","Growth","Helping others","Recognition","Flexibility","Collaboration","Earning potential","Purpose","Innovation","Belonging","Challenge","Work-life balance"] },
      { type: "radio", question: "At the end of a truly fulfilling workday, you most likely feel:", options: ["I made a real difference to someone","I created something I'm proud of","I solved something genuinely hard","I learned something meaningful","I built or moved something forward","I was completely in my element"] },
      { type: "text", question: "Is there anything you feel has been missing from your work so far — something you wish was different?", placeholder: "This could be about meaning, environment, recognition, growth — whatever feels true for you..." },
    ],
  },
};

async function askClaude(messages, system) {
  try {
    // Trim conversation history to last 12 messages max to avoid token limits
    const trimmed = messages.length > 12 ? messages.slice(-12) : messages;
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1024, system, messages: trimmed }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error?.message || `API error ${res.status}`);
    }
    const data = await res.json();
    if (data.error) throw new Error(data.error.message || "API returned an error");
    const text = data.content?.[0]?.text;
    if (!text) throw new Error("Empty response from API");
    return text;
  } catch(e) {
    console.error("askClaude error:", e.message);
    throw e;
  }
}

const SYSTEM_PROMPT = `You are Career Compass — a thoughtful, supportive career coach and reflective thinking partner. You feel like a trusted guide and collaborator, not a recruiter, therapist, or assessment tool.

PERSONALITY: supportive, curious, insightful, reflective, encouraging, practical, friendly, clear and actionable. Conversational and approachable. Never verbose — promote dialogue over long explanations.

CAREER COMPASS FRAMEWORK — five dimensions you explore across the conversation:
- Strengths: what the user is naturally good at
- Interests: topics, industries, or activities they are curious about
- Energy: work that energizes vs. drains them
- Values: personal motivations influencing career decisions
- Opportunities: where strengths and interests exist in the real world
Career clarity emerges where strengths, interests, energy, and opportunities intersect. Values guide direction. Identify patterns across dimensions before suggesting directions.

COACHING PHILOSOPHY:
- Help users discover their OWN insights — ask and reflect, never prescribe
- Use language like: "Let's explore that together.", "Tell me more about that.", "I'm noticing a pattern in what you shared.", "What stands out to you about that?", "That might suggest an interest in...", "A direction you might explore could be..."
- NEVER say "You should become a ___" — say "A direction worth exploring might be..." or "This could suggest an interest in..."
- Frame all suggestions as possibilities, never prescriptions
- Ask ONE reflective question per response
- Keep responses concise — 3-5 sentences or light bullets, never long monologues unless generating a final profile

COACHING APPROACHES informing your style:
- GROW progression: Goal, Reality, Options, Will
- Solution-focused: "What might be a useful next step?", "What is already working we can build from?"
- Narrative career design: help users recognize themes across experiences and strengths
- Ikigai-style alignment: intersection of strengths, curiosity, energy, and opportunity

THREE-STAGE PROCESS:
Stage 1 Discover: explore past experiences, strengths, energizing and draining tasks, interests, values. Identify patterns.
Stage 2 Explore: translate patterns into possible career paths, transferable skills, industries. Always frame as possibilities.
Stage 3 Experiment: suggest small experiments such as informational interviews, short courses, portfolio projects, networking, side projects. May generate a 90-day exploration plan.

FIRST RESPONSE RULE — when a user opens with uncertainty such as "I feel stuck", "I do not know what to do", "I am unhappy", "I feel lost":
- Respond in 3-4 sentences MAXIMUM
- Acknowledge briefly and normalize it as a signal worth exploring
- Ask ONE reflective question to open exploration
- Do NOT launch into long explanations

MENTAL HEALTH BOUNDARY — Career Compass is not a therapist:
- If a user expresses feeling stuck, anxious, burned out, depressed, or overwhelmed:
  Step 1: Acknowledge briefly ("That sounds like a heavy place to be.")
  Step 2: Check if it relates to work ("Do you think this is mostly connected to your work or career direction?")
  Step 3: If work-related, continue coaching. If not clearly work-related, gently refocus: "I may not be the right space for mental health support, but I can help explore what might be happening in your career situation if that feels connected."
- Never diagnose, interpret emotions clinically, suggest coping strategies, or replace professional support.

AVOID: rigid advice, HR jargon, motivational clichés, therapy-style interpretation, sounding like a recruiter or corporate HR system.

PROFILE READINESS: Only signal readiness after at least 6 meaningful exchanges AND you have a rich understanding of all five dimensions plus context. When truly ready, end your message with exactly this on its own line: PROFILE_READY`

function OpenStage({ stageKey, onComplete, onBack }) {
  const stage = openStages[stageKey];
  const [answers, setAnswers] = useState({});
  const [qIndex, setQIndex] = useState(0);
  const q = stage.questions[qIndex];
  const total = stage.questions.length;
  const canProceed = (answers[qIndex] || "").trim().length > 10;

  const next = () => {
    if (qIndex < total - 1) setQIndex(i => i + 1);
    else onComplete(answers, stage.questions);
  };

  const back = () => {
    if (qIndex > 0) setQIndex(i => i - 1);
    else onBack();
  };

  return (
    <div className="survey-block">
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{stage.title} · {qIndex + 1} of {total}</div>
        <div className="progress-bar"><div className="progress-fill" style={{ width: `${(qIndex / total) * 100}%` }} /></div>
        <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", marginBottom: "1rem", fontStyle: "italic" }}>{stage.subtitle}</p>
        <div className="survey-question">{q.question}</div>
      </div>
      <div className="text-input-block">
        <textarea placeholder={q.placeholder} value={answers[qIndex] || ""} onChange={e => setAnswers(a => ({ ...a, [qIndex]: e.target.value }))} />
      </div>
      <div style={{ display:"flex", gap:"0.75rem", alignItems:"center", marginTop:"1.2rem" }}>
        <button onClick={back} style={{ background:"transparent", color:"var(--text-lt)", border:"1px solid var(--cream-dk)", borderRadius:"2rem", padding:"0.7rem 1.5rem", fontSize:"0.875rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s" }}>← Back</button>
        <button className="survey-submit" style={{ marginTop:0 }} disabled={!canProceed} onClick={next}>{qIndex < total - 1 ? "Next →" : "Continue"}</button>
      </div>
    </div>
  );
}

function SurveyStage({ stageKey, onComplete, onBack }) {
  const stage = surveyStages[stageKey];
  const [answers, setAnswers] = useState({});
  const [qIndex, setQIndex] = useState(0);
  const q = stage.questions[qIndex];
  const total = stage.questions.length;
  const selected = answers[qIndex] || (q.type === "chips" || q.type === "chips_limited" ? [] : "");

  const toggleChip = (opt) => {
    const cur = answers[qIndex] || [];
    setAnswers(a => ({ ...a, [qIndex]: cur.includes(opt) ? cur.filter(x => x !== opt) : [...cur, opt] }));
  };
  const toggleChipLimited = (opt) => {
    const cur = answers[qIndex] || [];
    if (cur.includes(opt)) { setAnswers(a => ({ ...a, [qIndex]: cur.filter(x => x !== opt) })); return; }
    if (cur.length >= q.max) return;
    setAnswers(a => ({ ...a, [qIndex]: [...cur, opt] }));
  };

  const canProceed = (() => {
    const a = answers[qIndex];
    if (!a) return false;
    if (typeof a === "string") return a.trim().length > 5;
    if (Array.isArray(a)) return a.length > 0;
    return !!a;
  })();

  const next = () => {
    if (qIndex < total - 1) setQIndex(i => i + 1);
    else onComplete(answers, stage.questions);
  };

  const back = () => {
    if (qIndex > 0) setQIndex(i => i - 1);
    else onBack();
  };

  return (
    <div className="survey-block">
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Question {qIndex + 1} of {total}</div>
        <div className="progress-bar"><div className="progress-fill" style={{ width: `${(qIndex / total) * 100}%` }} /></div>
        <div className="survey-question">{q.question}</div>
        {q.type === "chips_limited" && <div className="chip-limit-note">{(answers[qIndex] || []).length} of {q.max} selected</div>}
      </div>

      {q.type === "chips" && (
        <div className="multi-select-grid">
          {q.options.map(opt => <div key={opt} className={`chip ${(selected).includes(opt) ? "selected" : ""}`} onClick={() => toggleChip(opt)}>{opt}</div>)}
        </div>
      )}
      {q.type === "chips_limited" && (
        <div className="multi-select-grid">
          {q.options.map(opt => {
            const sel = (answers[qIndex] || []);
            return <div key={opt} className={`chip ${sel.includes(opt) ? "selected" : ""} ${!sel.includes(opt) && sel.length >= q.max ? "disabled" : ""}`} onClick={() => toggleChipLimited(opt)}>{opt}</div>;
          })}
        </div>
      )}
      {q.type === "radio" && (
        <div className="survey-options">
          {q.options.map(opt => (
            <div key={opt} className={`survey-option ${answers[qIndex] === opt ? "selected" : ""}`} onClick={() => setAnswers(a => ({ ...a, [qIndex]: opt }))}>
              <div className="survey-option-dot" />{opt}
            </div>
          ))}
        </div>
      )}
      {q.type === "text" && (
        <div className="text-input-block">
          <textarea placeholder={q.placeholder || "Take your time..."} value={answers[qIndex] || ""} onChange={e => setAnswers(a => ({ ...a, [qIndex]: e.target.value }))} />
        </div>
      )}

      <div style={{ display:"flex", gap:"0.75rem", alignItems:"center", marginTop:"1.2rem" }}>
        <button onClick={back} style={{ background:"transparent", color:"var(--text-lt)", border:"1px solid var(--cream-dk)", borderRadius:"2rem", padding:"0.7rem 1.5rem", fontSize:"0.875rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s" }}>← Back</button>
        <button className="survey-submit" style={{ marginTop:0 }} disabled={!canProceed} onClick={next}>{qIndex < total - 1 ? "Next →" : "Continue"}</button>
      </div>
    </div>
  );
}

function ChatInterface({ collectedData, onProfileGenerated }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [profileReady, setProfileReady] = useState(false);
  const [profileError, setProfileError] = useState(null);
  const [generating, setGenerating] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    // Summarise survey data concisely to keep tokens low
    const summaryParts = Object.entries(collectedData).map(([stage, data]) => {
      const lines = Object.entries(data)
        .map(([q, a]) => `Q: ${q} | A: ${Array.isArray(a) ? a.join(", ") : (a || "").slice(0, 300)}`)
        .join(" | ");
      return `[${stage.toUpperCase()}] ${lines}`;
    });
    const initPrompt = `The user just completed a career discovery workshop. Summary of their responses: ${summaryParts.join(" ||| ")} --- Greet them warmly. Reflect back 2-3 specific patterns you notice. Ask one meaningful follow-up question. Be warm and concise. Do NOT say PROFILE_READY yet.`;
    setLoading(true);
    askClaude([{ role: "user", content: initPrompt }], SYSTEM_PROMPT)
      .then(reply => {
        setMessages([{ role: "ai", content: reply.replace("PROFILE_READY", "").trim() }]);
        setLoading(false);
      })
      .catch(e => {
        setMessages([{ role: "ai", content: "Hey, I'm here and ready to explore with you. Something went wrong loading your session summary — could you tell me a little about what brought you here today?" }]);
        setLoading(false);
      });
  }, []);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const send = async () => {
    if (!input.trim() || loading || generating) return;
    const userMsg = input.trim();
    setInput("");
    const newMsgs = [...messages, { role: "user", content: userMsg }];
    setMessages(newMsgs);
    setLoading(true);
    try {
      // Only send role/content pairs, keep last 12 turns to stay within limits
      const apiMsgs = newMsgs
        .map(m => ({ role: m.role === "ai" ? "assistant" : "user", content: m.content }))
        .filter(m => m.content && m.content.trim().length > 0);
      const reply = await askClaude(apiMsgs, SYSTEM_PROMPT);
      const isReady = reply.includes("PROFILE_READY");
      setMessages(m => [...m, { role: "ai", content: reply.replace("PROFILE_READY", "").trim() }]);
      if (isReady) setProfileReady(true);
    } catch(e) {
      setMessages(m => [...m, { role: "ai", content: `Something went wrong on my end (${e.message}). Please try sending your message again.` }]);
    }
    setLoading(false);
  };

  const generateProfile = async () => {
    if (generating) return;
    setGenerating(true);
    setProfileError(null);

    const summary = Object.entries(collectedData).map(([k, v]) => {
      const val = typeof v === "object" && !Array.isArray(v)
        ? Object.entries(v).map(([q, a]) => `Q: ${q} | A: ${Array.isArray(a) ? a.join(", ") : a}`).join(" | ")
        : JSON.stringify(v);
      return `${k}: ${val}`;
    }).join("\n");

    const convo = messages.map(m => `${m.role === "ai" ? "Coach" : "User"}: ${m.content}`).join("\n");

    const prompt = `Generate a Career Compass Profile as a JSON object based on this data.

WORKSHOP DATA:
${summary}

COACHING CONVERSATION:
${convo}

Return ONLY a raw JSON object. No markdown. No backticks. No explanation. Start with { and end with }.

Use this exact structure:
{"strengths":["s1","s2","s3","s4"],"interests":["i1","i2","i3"],"energizers":["e1","e2","e3"],"values":["v1","v2","v3","v4"],"personality":"2-3 sentences on how this person thinks works and relates to others","directions":[{"title":"Direction 1","description":"3-4 sentences on what this is and why it fits this person"},{"title":"Direction 2","description":"3-4 sentences"},{"title":"Direction 3","description":"3-4 sentences"}],"nextSteps":["step1","step2","step3","step4","step5"]}`;

    try {
      const raw = await askClaude(
        [{ role: "user", content: prompt }],
        "Output only a raw JSON object. No markdown. No backticks. No preamble. Start with { and end with }."
      );
      let cleaned = raw.replace(/```json/gi, "").replace(/```/g, "").trim();
      const start = cleaned.indexOf("{");
      const end = cleaned.lastIndexOf("}");
      if (start === -1 || end === -1) throw new Error("No JSON found");
      const profile = JSON.parse(cleaned.slice(start, end + 1));
      if (!profile.strengths || !profile.directions || !profile.nextSteps) throw new Error("Incomplete profile");
      onProfileGenerated(profile);
    } catch (e) {
      console.error("Profile error:", e.message);
      setProfileError("We had trouble generating your profile. Please try again.");
    }
    setGenerating(false);
  };

  const renderContent = (text) => text.split("\n").map((line, i) => {
    if (line.startsWith("- ") || line.startsWith("• ")) return <div key={i} style={{ display:"flex", gap:"0.5rem", marginBottom:"0.25rem" }}><span style={{ color:"var(--gold-lt)", flexShrink:0 }}>◈</span><span>{line.slice(2)}</span></div>;
    if (line === "") return <br key={i} />;
    return <span key={i}>{line}<br /></span>;
  });

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-avatar">🧭</div>
        <div className="chat-header-info">
          <h4>Career Compass</h4>
          <span><span className="online-dot" />AI Career Coach · Active session</span>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>
            <div className={`msg-avatar ${m.role}`}>{m.role === "ai" ? "🧭" : "✦"}</div>
            <div className="msg-bubble">{renderContent(m.content)}</div>
          </div>
        ))}
        {loading && <div className="msg ai"><div className="msg-avatar ai">🧭</div><div className="msg-bubble"><div className="typing-indicator"><div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" /></div></div></div>}
        <div ref={endRef} />
      </div>
      {profileReady && (
        <div className="profile-ready-banner">
          <p>✦ I feel like I have a real picture of you now. Ready to build your Career Compass Profile?</p>
          <button onClick={generateProfile} disabled={generating}>
            {generating ? "Building your profile…" : "Build My Profile →"}
          </button>
        </div>
      )}
      {profileError && (
        <div style={{ margin:"0 1.5rem 0.75rem", padding:"0.8rem 1rem", background:"#fff3f0", border:"1px solid #f5c6c0", borderRadius:"0.75rem", fontSize:"0.85rem", color:"#8B3A3A", display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem" }}>
          <span>{profileError}</span>
          <button onClick={generateProfile} disabled={generating} style={{ background:"var(--forest)", color:"var(--cream)", border:"none", borderRadius:"2rem", padding:"0.4rem 1rem", fontSize:"0.8rem", cursor:"pointer", fontFamily:"'DM Sans', sans-serif", whiteSpace:"nowrap" }}>Try Again</button>
        </div>
      )}
      <div className="chat-input-row">
        <input className="chat-input" placeholder="Share your thoughts..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} />
        <button className="chat-send" onClick={send} disabled={loading || generating || !input.trim()}>→</button>
      </div>
    </div>
  );
}

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <h2>Your Career Compass Profile</h2>
      <p>Here's what we discovered together. These are directions to explore — not destinations to commit to. Treat each one as an invitation to experiment.</p>
      <div className="profile-section"><h4>Core Strengths</h4><div className="profile-chips">{profile.strengths.map(s => <span key={s} className="profile-chip">{s}</span>)}</div></div>
      <div className="profile-section"><h4>Key Interests</h4><div className="profile-chips">{profile.interests.map(s => <span key={s} className="profile-chip">{s}</span>)}</div></div>
      <div className="profile-section"><h4>What Energises You</h4><div className="profile-chips">{profile.energizers.map(s => <span key={s} className="profile-chip">{s}</span>)}</div></div>
      <div className="profile-section"><h4>Core Values</h4><div className="profile-chips">{profile.values.map(s => <span key={s} className="profile-chip">{s}</span>)}</div></div>
      {profile.personality && <div className="profile-section"><h4>How You Work</h4><p style={{ fontSize:"0.9rem", color:"var(--text-mid)", lineHeight:1.8, background:"var(--cream-dk)", padding:"1rem 1.2rem", borderRadius:"0.75rem" }}>{profile.personality}</p></div>}
      <div className="profile-section">
        <h4>Possible Career Directions</h4>
        {profile.directions.map(d => <div key={d.title} className="profile-direction-card"><h5>◈ {d.title}</h5><p>{d.description}</p></div>)}
      </div>
      <div className="profile-section">
        <h4>Suggested Next Steps</h4>
        <div style={{ display:"flex", flexDirection:"column", gap:"0.5rem" }}>
          {profile.nextSteps.map((s, i) => <div key={s} style={{ display:"flex", gap:"0.75rem", alignItems:"flex-start", fontSize:"0.875rem", color:"var(--text-mid)" }}><span style={{ color:"var(--gold)", fontWeight:600, minWidth:"1.2rem" }}>{i+1}.</span>{s}</div>)}
        </div>
      </div>
      <div style={{ marginTop:"1.5rem", padding:"1.2rem", background:"var(--blush-lt)", borderRadius:"1rem", fontSize:"0.875rem", color:"var(--bark)", lineHeight:1.7 }}>
        ✦ <strong>A gentle reminder:</strong> These are directions worth exploring, not answers to lock in. One conversation, one course, one person you reach out to — that's all it takes to begin.
      </div>
    </div>
  );
}




function WorkshopPage({ starterContext }) {
  const SAVE_KEY = "career_compass_session";

  const loadSaved = () => {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) return JSON.parse(raw);
    } catch(e) {}
    return null;
  };

  const saved = loadSaved();
  const [currentStage, setCurrentStage] = useState(saved ? saved.currentStage : "intro");
  const [collectedData, setCollectedData] = useState(saved ? saved.collectedData : {});
  const [profile, setProfile] = useState(saved ? saved.profile : null);
  const [showResumeBanner, setShowResumeBanner] = useState(!!saved && saved.currentStage !== "intro");
  const [showPDF, setShowPDF] = useState(false);
  const currentStep = STAGE_ORDER.indexOf(currentStage);
  const progress = (currentStep / (STAGE_ORDER.length - 1)) * 100;

  const saveSession = (stage, data, prof) => {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({ currentStage: stage, collectedData: data, profile: prof, savedAt: new Date().toISOString() }));
    } catch(e) {}
  };

  const clearSession = () => {
    try { localStorage.removeItem(SAVE_KEY); } catch(e) {}
  };

  const handleComplete = (answers, questions) => {
    const summary = {};
    questions.forEach((q, i) => { summary[q.question] = answers[i]; });
    const newData = { ...collectedData, [currentStage]: summary };
    const nextStage = STAGE_ORDER[currentStep + 1];
    setCollectedData(newData);
    setCurrentStage(nextStage);
    saveSession(nextStage, newData, profile);
  };

  const handleProfileGenerated = (p) => {
    setProfile(p);
    setCurrentStage("profile");
    saveSession("profile", collectedData, p);
  };

  const goBack = () => {
    const prevIndex = currentStep - 1;
    if (prevIndex < 0) return;
    const prevStage = STAGE_ORDER[prevIndex];
    setCurrentStage(prevStage);
    saveSession(prevStage, collectedData, profile);
  };

  const exportSession = () => { setShowPDF(true); };
  const startFresh = () => {
    clearSession();
    setCurrentStage("intro");
    setCollectedData({});
    setProfile(null);
    setShowResumeBanner(false);
  };

  if (showPDF) {
    const p = profile;
    const chips = (items) => items?.map(s => (
      <span key={s} style={{background:"#F5E6DC",color:"#6B4F3A",padding:"4px 14px",borderRadius:"20px",fontSize:"12px",display:"inline-block",margin:"3px"}}>{s}</span>
    ));

    return (
      <div style={{minHeight:"100vh",background:"#FAF6F0",position:"fixed",inset:0,zIndex:9998,overflowY:"auto"}}>
        {/* Toolbar - hidden on print */}
        <div className="no-print" style={{position:"fixed",top:0,left:0,right:0,background:"#2C4A2E",padding:"0.9rem 2rem",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:9999,flexWrap:"wrap",gap:"0.75rem",boxShadow:"0 2px 12px rgba(0,0,0,0.15)"}}>
          <span style={{color:"#FAF6F0",fontSize:"0.9rem",fontWeight:500}}>&#9672; Your Career Compass Profile</span>
          <div style={{display:"flex",gap:"0.75rem"}}>
            <button onClick={() => window.print()} style={{background:"#C4933F",color:"#fff",border:"none",borderRadius:"2rem",padding:"0.55rem 1.4rem",fontSize:"0.875rem",fontWeight:500,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
              &#8595; Print / Save as PDF
            </button>
            <button onClick={() => setShowPDF(false)} style={{background:"transparent",color:"#FAF6F0",border:"1px solid rgba(255,255,255,0.4)",borderRadius:"2rem",padding:"0.5rem 1.2rem",fontSize:"0.875rem",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
              &#8592; Back
            </button>
          </div>
        </div>
        <div style={{height:"60px"}} className="no-print" />

        {/* Print styles */}
        <style>{`
          @media print {
            .no-print { display: none !important; }
            body { background: white !important; }
            @page { margin: 1.5cm; }
          }
        `}</style>

        {/* Profile content */}
        <div style={{maxWidth:"720px",margin:"0 auto",padding:"48px 48px 64px",fontFamily:"Georgia,serif",color:"#2A2218",lineHeight:"1.6"}}>
          <div style={{borderBottom:"2px solid #C4933F",paddingBottom:"20px",marginBottom:"32px"}}>
            <div style={{fontSize:"18px",color:"#2C4A2E",fontWeight:600,fontFamily:"Georgia,serif"}}>
              Career<span style={{color:"#C4933F"}}>Compass</span>
            </div>
            <h1 style={{fontSize:"clamp(24px,4vw,36px)",color:"#2C4A2E",margin:"8px 0 4px",fontWeight:500,fontFamily:"Georgia,serif"}}>Your Career Compass Profile</h1>
            <div style={{fontSize:"12px",color:"#8A7E74",fontFamily:"sans-serif"}}>{new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</div>
          </div>

          <div style={{background:"#F5E6DC",borderRadius:"8px",padding:"14px 18px",fontSize:"13px",color:"#6B4F3A",marginBottom:"32px",fontFamily:"sans-serif",lineHeight:"1.7"}}>
            These are directions to explore — not destinations to commit to. Treat each one as an invitation to experiment.
          </div>

          {p?.strengths?.length > 0 && (
            <div style={{marginBottom:"24px"}}>
              <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C4933F",marginBottom:"8px",fontFamily:"sans-serif"}}>Core Strengths</div>
              <div>{chips(p.strengths)}</div>
            </div>
          )}
          {p?.interests?.length > 0 && (
            <div style={{marginBottom:"24px"}}>
              <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C4933F",marginBottom:"8px",fontFamily:"sans-serif"}}>Key Interests</div>
              <div>{chips(p.interests)}</div>
            </div>
          )}
          {p?.energizers?.length > 0 && (
            <div style={{marginBottom:"24px"}}>
              <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C4933F",marginBottom:"8px",fontFamily:"sans-serif"}}>What Energises You</div>
              <div>{chips(p.energizers)}</div>
            </div>
          )}
          {p?.values?.length > 0 && (
            <div style={{marginBottom:"24px"}}>
              <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C4933F",marginBottom:"8px",fontFamily:"sans-serif"}}>Core Values</div>
              <div>{chips(p.values)}</div>
            </div>
          )}
          {p?.personality && (
            <div style={{marginBottom:"24px"}}>
              <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C4933F",marginBottom:"8px",fontFamily:"sans-serif"}}>How You Work</div>
              <div style={{background:"#F0E8DE",borderRadius:"8px",padding:"14px 18px",fontSize:"13px",color:"#5A4E44",fontFamily:"sans-serif",lineHeight:"1.8"}}>{p.personality}</div>
            </div>
          )}
          {p?.directions?.length > 0 && (
            <div style={{marginBottom:"24px"}}>
              <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C4933F",marginBottom:"12px",fontFamily:"sans-serif"}}>Possible Career Directions</div>
              {p.directions.map(d => (
                <div key={d.title} style={{background:"#F0E8DE",borderRadius:"8px",padding:"16px 18px",marginBottom:"10px"}}>
                  <div style={{fontSize:"18px",color:"#2C4A2E",marginBottom:"6px",fontWeight:500}}>&#9672; {d.title}</div>
                  <div style={{fontSize:"13px",color:"#5A4E44",fontFamily:"sans-serif",lineHeight:"1.7"}}>{d.description}</div>
                </div>
              ))}
            </div>
          )}
          {p?.nextSteps?.length > 0 && (
            <div style={{marginBottom:"24px"}}>
              <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#C4933F",marginBottom:"10px",fontFamily:"sans-serif"}}>Suggested Next Steps</div>
              {p.nextSteps.map((s,i) => (
                <div key={i} style={{display:"flex",gap:"12px",marginBottom:"10px",fontSize:"13px",color:"#5A4E44",fontFamily:"sans-serif"}}>
                  <span style={{color:"#C4933F",fontWeight:600,minWidth:"20px"}}>{i+1}.</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          )}

          <div style={{marginTop:"48px",paddingTop:"16px",borderTop:"1px solid #F0E8DE",textAlign:"center",fontSize:"11px",color:"#8A7E74",fontFamily:"sans-serif"}}>
            Career Compass &mdash; AI-Powered Career Discovery
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="workshop-page" style={{ position:"relative" }}>
      <VineLeft opacity={0.08} />
      <VineRight opacity={0.08} />
      {showResumeBanner && (
        <div style={{ background:"var(--forest)", padding:"1rem 2rem", display:"flex", alignItems:"center", justifyContent:"center", gap:"1.5rem", flexWrap:"wrap" }}>
          <span style={{ color:"var(--cream)", fontSize:"0.9rem" }}>&#10003; We found a saved session. Would you like to resume where you left off?</span>
          <div style={{ display:"flex", gap:"0.75rem" }}>
            <button onClick={() => setShowResumeBanner(false)} style={{ background:"var(--gold)", color:"#fff", border:"none", borderRadius:"2rem", padding:"0.5rem 1.2rem", fontSize:"0.85rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>Resume Session</button>
            <button onClick={startFresh} style={{ background:"transparent", color:"var(--cream)", border:"1px solid rgba(255,255,255,0.4)", borderRadius:"2rem", padding:"0.5rem 1.2rem", fontSize:"0.85rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>Start Fresh</button>
          </div>
        </div>
      )}

      <div className="workshop-layout">
        <div className="workshop-sidebar">
          <div className="sidebar-title">Your Journey</div>
          <div className="progress-bar" style={{ marginBottom:"1.5rem" }}>
            <div className="progress-fill" style={{ width:`${progress}%` }} />
          </div>
          <div className="stage-steps">
            {STAGE_ORDER.map((s, i) => (
              <div key={s} className={`stage-step ${currentStage === s ? "active" : currentStep > i ? "complete" : ""}`}>
                <div className="step-dot" />{STAGE_LABELS[s]}
                {currentStep > i && <span style={{ marginLeft:"auto", fontSize:"0.7rem", color:"var(--forest-lt)" }}>&#10003;</span>}
              </div>
            ))}
          </div>
          {currentStep > 0 && (
            <div style={{ marginTop:"2rem", borderTop:"1px solid var(--cream-dk)", paddingTop:"1.2rem", display:"flex", flexDirection:"column", gap:"0.6rem" }}>
              <button onClick={exportSession} style={{ background:"var(--cream-dk)", color:"var(--forest)", border:"none", borderRadius:"2rem", padding:"0.55rem 1rem", fontSize:"0.78rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>&#8595; Export My Answers</button>
              <button onClick={startFresh} style={{ background:"transparent", color:"var(--text-lt)", border:"1px solid var(--cream-dk)", borderRadius:"2rem", padding:"0.5rem 1rem", fontSize:"0.78rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>Start Over</button>
            </div>
          )}
        </div>

        <div className="workshop-main">
          {currentStage === "intro" && (
            <div className="survey-block">
              <div style={{ fontSize:"0.75rem", color:"var(--gold)", fontWeight:500, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.8rem" }}>Welcome</div>
              <h2 style={{ fontFamily:"'Cormorant Garamond', serif", color:"var(--forest)", fontSize:"2rem", marginBottom:"1rem" }}>Let's explore your career direction together.</h2>
              {starterContext && <div style={{ background:"var(--blush-lt)", borderRadius:"0.75rem", padding:"0.9rem 1.1rem", marginBottom:"1.2rem", fontSize:"0.875rem", color:"var(--bark)", lineHeight:1.6 }}>&#10022; We'll keep in mind that you're here because: <em>"{starterContext}"</em></div>}
              <p style={{ color:"var(--text-mid)", lineHeight:1.8, marginBottom:"1rem" }}>This workshop takes about <strong>30&#8211;60 minutes</strong>. You'll start with some open reflections, move through guided questions across five dimensions, then have a real coaching conversation with your AI career coach.</p>
              <p style={{ color:"var(--text-mid)", lineHeight:1.8, marginBottom:"1.5rem" }}>At the end, you'll receive a personalised <strong>Career Compass Profile</strong> &#8212; including your strengths, values, personality patterns, and possible directions to explore.</p>
              <div style={{ background:"var(--blush-lt)", borderRadius:"0.75rem", padding:"0.9rem 1.1rem", marginBottom:"1.5rem", fontSize:"0.82rem", color:"var(--bark)", lineHeight:1.6 }}>
                &#10003; <strong>Your session auto-saves as you go.</strong> If you close this page and come back, you can resume right where you left off.
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem", marginBottom:"2rem" }}>
                {["There are no right or wrong answers","You don't need to have it figured out already","Take your time — this is entirely for you","The more honestly you share, the more useful this becomes"].map(t => (
                  <div key={t} style={{ display:"flex", gap:"0.6rem", alignItems:"center", fontSize:"0.875rem", color:"var(--text-mid)" }}><span style={{ color:"var(--gold)" }}>&#9672;</span>{t}</div>
                ))}
              </div>
              <button className="btn-primary" onClick={() => { setCurrentStage("why"); saveSession("why", {}, null); }}>Begin the Workshop &#8594;</button>
            </div>
          )}
          {["why","background"].includes(currentStage) && <OpenStage key={currentStage} stageKey={currentStage} onComplete={handleComplete} onBack={goBack} />}
          {["strengths","interests","energy","values"].includes(currentStage) && (
            <div>
              <div style={{ marginBottom:"1rem" }}>
                <h2 style={{ fontFamily:"'Cormorant Garamond', serif", color:"var(--forest)", fontSize:"1.8rem" }}>{surveyStages[currentStage].title}</h2>
                <p style={{ color:"var(--text-mid)", fontSize:"0.875rem", marginTop:"0.3rem" }}>{surveyStages[currentStage].subtitle}</p>
              </div>
              <SurveyStage key={currentStage} stageKey={currentStage} onComplete={handleComplete} onBack={goBack} />
            </div>
          )}
          {currentStage === "explore" && (
            <div className="survey-block">
              <div style={{ fontSize:"0.75rem", color:"var(--gold)", fontWeight:500, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.8rem" }}>Almost there</div>
              <h2 style={{ fontFamily:"'Cormorant Garamond', serif", color:"var(--forest)", fontSize:"2rem", marginBottom:"1rem" }}>You've completed the surveys.</h2>
              <p style={{ color:"var(--text-mid)", lineHeight:1.8, marginBottom:"1.2rem" }}>Now it's time for a real conversation. Your AI career coach has everything you've shared and is ready to reflect patterns back to you, go deeper on what matters most, and explore possible directions together.</p>
              <p style={{ color:"var(--text-mid)", lineHeight:1.8, marginBottom:"2rem" }}>When the coach feels they have a rich enough picture of you, they'll let you know &#8212; and together you'll build your Career Compass Profile.</p>
              <div style={{ display:"flex", gap:"0.75rem", alignItems:"center", marginTop:"0.5rem" }}>
                <button onClick={goBack} style={{ background:"transparent", color:"var(--text-lt)", border:"1px solid var(--cream-dk)", borderRadius:"2rem", padding:"0.7rem 1.5rem", fontSize:"0.875rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>← Back</button>
                <button className="btn-primary" style={{ marginTop:0 }} onClick={() => setCurrentStage("chat")}>Start My Coaching Session &#8594;</button>
              </div>
            </div>
          )}
          {currentStage === "chat" && <ChatInterface collectedData={collectedData} onProfileGenerated={handleProfileGenerated} />}
          {currentStage === "profile" && profile && (
            <div>
              <ProfileCard profile={profile} />
              <div style={{ marginTop:"1rem", display:"flex", gap:"0.75rem", justifyContent:"center", flexWrap:"wrap" }}>
                <button onClick={exportSession} className="btn-outline">&#8595; Download My Profile</button>
                <button onClick={startFresh} style={{ background:"transparent", color:"var(--text-lt)", border:"1px solid var(--cream-dk)", borderRadius:"2rem", padding:"0.85rem 2rem", fontSize:"0.95rem", cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>Start a New Session</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


function HomePage({ navigate }) {
  return (
    <div>
      <section className="hero" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeft />
        <VineRight />
        <div className="hero-eyebrow">✦ AI-Powered Career Discovery</div>
        <h1>You don't need to have it<br /><em>all figured out.</em></h1>
        <p className="hero-sub">Career Compass is a free, guided AI workshop that helps you discover your strengths, interests, values, and the career directions that actually fit who you are.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate("workshop")}>Let's Get Started ✦</button>
          <button className="btn-outline" onClick={() => navigate("how")}>How It Works</button>
        </div>
        <div className="hero-scroll"><span style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase" }}>Scroll to explore</span><span>↓</span></div>
      </section>

      <section className="section framework-section" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeft opacity={0.12} />
        <VineRight opacity={0.12} />
        <div className="section-inner">
          <span className="section-label">The Framework</span>
          <h2 className="section-title">Five dimensions.<br />One clear direction.</h2>
          <p className="section-sub">Career clarity emerges where your strengths, interests, energy, and opportunities intersect — while your values guide which direction feels right.</p>
          <div className="framework-grid">
            {dimensions.map(d => <div key={d.label} className="framework-card"><h4>{d.label}</h4><p>{d.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeft opacity={0.12} />
        <VineRight opacity={0.12} />
        <div className="section-inner">
          <span className="section-label">The Journey</span>
          <h2 className="section-title">Three stages to clarity.</h2>
          <p className="section-sub">Career Compass guides you through a structured process — from honest exploration to meaningful action.</p>
          <div className="process-grid">
            {[
              { n:"01", title:"Discover", desc:"Through open reflection and guided surveys, we build a rich picture of your strengths, interests, energy, values, and personality.", tag:"Surveys & Reflection" },
              { n:"02", title:"Explore", desc:"Your patterns are translated into possible career directions — with real context on what each path involves and why it fits you specifically.", tag:"AI-Guided Coaching" },
              { n:"03", title:"Experiment", desc:"Small, practical next steps help you test directions before committing. No big leaps required — just curiosity.", tag:"Action Planning" },
            ].map(s => <div key={s.n} className="process-card"><div className="process-num">{s.n}</div><h3>{s.title}</h3><p>{s.desc}</p><span className="process-tag">{s.tag}</span></div>)}
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeftLight opacity={0.22} />
        <VineRightLight opacity={0.22} />
        <span className="section-label">Free & AI-Powered</span>
        <h2>Your career clarity<br />starts with one conversation.</h2>
        <p>No sign-up. No cost. Just a guided, thoughtful exploration designed to help you see yourself more clearly.</p>
        <button className="btn-gold" onClick={() => navigate("workshop")}>Begin Your Journey →</button>
      </section>
    </div>
  );
}

function HowItWorksPage({ navigate }) {
  return (
    <div>
      <div className="hiw-hero" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeft opacity={0.15} />
        <VineRight opacity={0.15} />
        <span className="section-label">How It Works</span>
        <h1>A workshop, not a quiz.</h1>
        <p>Career Compass is designed to feel like a thoughtful conversation — one that helps you discover genuine insights about yourself, not hand you a personality label.</p>
      </div>
      {[
        { badge:"Stage 1 · Your Story", title:"Start with where you are", desc:"Before any structured questions, Career Compass simply asks what's brought you here. Understanding your context — where you are now, what's shifted, what you're hoping for — shapes the entire session.", items:["Open reflection on your current situation","Background and career history","What's working and what isn't","What you're hoping to find"], visual:["Your story, in your words","Where you are now","What's prompted the search","What you're hoping for"], reverse:false },
        { badge:"Stage 2 · The Surveys", title:"Map your patterns", desc:"Guided surveys explore your strengths, interests, energy, and values — including questions that reveal how you think, work, and relate to others. Each section is designed to surface things you might not have named before.", items:["Strengths & natural capabilities","Curiosity & interest mapping","Energy — what lights you up and what drains you","Values clarification (choose up to 5)","Work style & personality patterns"], visual:["Strengths surface","Interests become visible","Energy patterns identified","Values clarified","Personality patterns emerge"], reverse:true },
        { badge:"Stage 3 · Coaching & Profile", title:"Turn insights into direction", desc:"After the surveys, you have a real coaching conversation — the AI reflects back what it notices, goes deeper on what matters most, and when it has a full picture, generates your personalised Career Compass Profile.", items:["Personalised coaching conversation","Pattern recognition across all dimensions","Career directions with real context","Personality & work style summary","Practical next steps & experiments"], visual:["Patterns reflected back","Directions mapped","Profile generated","Next steps designed"], reverse:false },
      ].map(s => (
        <div key={s.badge} className="stage-block" style={{ position:"relative", overflow:"hidden" }}>
          <VineLeft opacity={0.1} />
          <VineRight opacity={0.1} />
          <div className={`stage-inner ${s.reverse ? "reverse" : ""}`}>
            <div>
              <span className="stage-badge">{s.badge}</span>
              <div className="stage-title">{s.title}</div>
              <p className="stage-desc">{s.desc}</p>
              <ul className="stage-list">{s.items.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="stage-visual">{s.visual.map(v => <div key={v} className="stage-visual-item"><div className="stage-visual-dot" /><span>{v}</span></div>)}</div>
          </div>
        </div>
      ))}
      <div className="dimensions-section" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeftLight opacity={0.2} />
        <VineRightLight opacity={0.2} />
        <div className="dimensions-inner">
          <span className="section-label">The Framework</span>
          <h2 className="section-title">The Career Compass Framework</h2>
          <p className="section-sub">Career clarity emerges at the intersection of five dimensions. Values guide the direction — the others define the terrain.</p>
          <div className="dim-grid">
            <div className="dim-row">
              {dimensions.slice(0,3).map(d => (
                <div key={d.label} className="dim-card">
                  <h4>{d.label}</h4>
                  <p>{d.desc}</p>
                </div>
              ))}
            </div>
            <div className="dim-row">
              {dimensions.slice(3).map(d => (
                <div key={d.label} className="dim-card">
                  <h4>{d.label}</h4>
                  <p>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="cta-section" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeftLight opacity={0.22} />
        <VineRightLight opacity={0.22} />
        <span className="section-label">Ready?</span>
        <h2>Let's find your direction together.</h2>
        <p>The workshop takes 30–60 minutes and is completely free.</p>
        <button className="btn-gold" onClick={() => navigate("workshop")}>Start the Workshop →</button>
      </section>
    </div>
  );
}

function AboutPage({ navigate }) {
  const starters = [
    { text: "Early in your career and overwhelmed by options? Career Compass helps you cut through the noise and find what's actually worth pursuing.", context: "I'm early in my career and feeling overwhelmed by options. I'm not sure which direction to go." },
    { text: "Considering a change but unsure where to start? We help you identify transferable skills and map them to new directions — without starting from scratch.", context: "I'm thinking about changing careers but I don't know where to start or how my skills translate." },
    { text: "Feeling burned out or unfulfilled? Career Compass helps you explore what's missing and find paths toward more meaningful, energising work.", context: "I'm feeling burned out and unfulfilled in my current work. I want to find something more meaningful." },
  ];
  return (
    <div>
      <div className="about-hero" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeft opacity={0.15} />
        <VineRight opacity={0.15} />
        <span className="section-label">About Career Compass</span>
        <h1>Built for people<br />who feel stuck.</h1>
        <p>Career Compass exists because clarity about your career path shouldn't require access to an expensive coach, a well-connected network, or perfect self-confidence. It should be available to anyone willing to reflect.</p>
      </div>

      <div className="about-block" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeft opacity={0.12} />
        <VineRight opacity={0.12} />
        <div className="about-inner">
          <span className="section-label">The Problem</span>
          <h2 className="section-title" style={{ color:"var(--forest)" }}>Why career decisions feel so hard</h2>
          <p className="section-sub" style={{ marginBottom:"1rem" }}>Most people don't struggle with career decisions because they're incapable — they struggle because of a few very human challenges.</p>
          <div className="problem-grid">
            {[
              { title:"Lack of clarity", desc:"Many people simply don't know what they're good at or what lights them up — especially if they've never been asked the right questions." },
              { title:"Following the wrong map", desc:"Society, family, and circumstance often push us toward paths that aren't aligned with who we actually are." },
              { title:"Fear of getting it wrong", desc:"The pressure to choose the 'perfect' career creates paralysis. Most people would rather stay stuck than risk the wrong move." },
              { title:"No access to support", desc:"Career coaching is expensive. Many people don't have mentors, coaches, or the right conversations at the right time." },
            ].map(p => <div key={p.title} className="problem-card"><h4>{p.title}</h4><p>{p.desc}</p></div>)}
          </div>
        </div>
      </div>

      <div className="about-block" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeft opacity={0.12} />
        <VineRight opacity={0.12} />
        <div className="about-inner">
          <span className="section-label">Our Mission</span>
          <h2 className="section-title" style={{ color:"var(--forest)" }}>From confusion to clarity to action</h2>
          <p style={{ color:"var(--text-mid)", lineHeight:1.9, marginBottom:"1.2rem" }}>Career Compass is designed to be the guide that many people never had. Not a recruiter. Not a job board. Not a rigid personality test — but a genuine, exploratory workshop that helps you understand yourself more deeply, then helps you act on what you discover.</p>
          <p style={{ color:"var(--text-mid)", lineHeight:1.9, marginBottom:"1.2rem" }}>The experience is built around the Career Compass Framework — five dimensions of career clarity: Strengths, Interests, Energy, Values, and Opportunities. And woven throughout, it gently explores your personality — how you think, how you work, how you relate to others. Not to put you in a box, but to give you a fuller picture of yourself.</p>
          <p style={{ color:"var(--text-mid)", lineHeight:1.9 }}>Think of it as a strategic workshop — structured enough to surface real insights, open enough to feel human.</p>
          <div className="ai-note">
            <h3>Powered by AI. Guided by you.</h3>
            <p>Career Compass is fully AI-driven — there's no human coach behind the screen. It's powered by advanced AI to give you a thoughtful, personalised coaching experience that responds to you specifically — not generic advice that could apply to anyone.</p>
          </div>
        </div>
      </div>

      <div className="about-block" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeft opacity={0.12} />
        <VineRight opacity={0.12} />
        <div className="about-inner">
          <span className="section-label">Who It's For</span>
          <h2 className="section-title" style={{ color:"var(--forest)" }}>Does any of this sound familiar?</h2>
          <p style={{ color:"var(--text-mid)", fontSize:"0.9rem", marginBottom:"0.25rem" }}>Click a statement below to begin your session with that context already in mind.</p>
          <div className="starter-grid">
            {starters.map(s => (
              <div key={s.context} className="starter-card" onClick={() => navigate("workshop", s.context)}>
                <p>{s.text}</p>
                <span className="starter-card-cta">Start my session →</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="cta-section" style={{ position:"relative", overflow:"hidden" }}>
        <VineLeftLight opacity={0.22} />
        <VineRightLight opacity={0.22} />
        <span className="section-label">It's free. It's yours.</span>
        <h2>Your clarity is waiting.</h2>
        <p>No sign-up, no cost, no judgment. A thoughtful AI workshop built to help you see yourself more clearly.</p>
        <button className="btn-gold" onClick={() => navigate("workshop")}>Start the Workshop →</button>
      </section>
    </div>
  );
}

export default function CareerCompass() {
  const [page, setPage] = useState("home");
  const [starterContext, setStarterContext] = useState(null);

  const navigate = (p, context = null) => {
    setPage(p);
    if (context) setStarterContext(context);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{CSS}</style>
      <nav>
        <div className="nav-logo" onClick={() => navigate("home")}><CompassMark size={28} />Career<span>Compass</span></div>
        <div className="nav-links">
          <button className={`nav-link ${page==="home"?"active":""}`} onClick={() => navigate("home")}>Home</button>
          <button className={`nav-link ${page==="how"?"active":""}`} onClick={() => navigate("how")}>How It Works</button>
          <button className={`nav-link ${page==="about"?"active":""}`} onClick={() => navigate("about")}>About</button>
          <button className="nav-cta" onClick={() => navigate("workshop")}>Get Started</button>
        </div>
      </nav>
      <main style={{ paddingTop: page === "workshop" ? "0" : "70px" }}>
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "how" && <HowItWorksPage navigate={navigate} />}
        {page === "about" && <AboutPage navigate={navigate} />}
        {page === "workshop" && <WorkshopPage starterContext={starterContext} />}
      </main>
      {page !== "workshop" && (
        <footer>
          <div className="footer-logo" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem" }}><CompassMark size={22} color="#FAF6F0" accent="#E8C87A" />Career<span>Compass</span></div>
          <p>An AI-powered career discovery workshop.<br />Built to make career clarity accessible to everyone.</p>
          <div className="footer-links">
            <button className="footer-link" onClick={() => navigate("home")}>Home</button>
            <button className="footer-link" onClick={() => navigate("how")}>How It Works</button>
            <button className="footer-link" onClick={() => navigate("about")}>About</button>
            <button className="footer-link" onClick={() => navigate("workshop")}>Get Started</button>
          </div>
        </footer>
      )}
    </>
  );
}
