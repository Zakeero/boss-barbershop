import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, Scissors, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Header, Footer, BookingPanel } from "@/components/site-shell";

const services = [
  { n: "01", title: "Soch kesimi", text: "Yuz shaklingiz va uslubingizga mos professional kesim.", price: "120 000 so‘mdan" },
  { n: "02", title: "Soqol dizayni", text: "Aniq kontur, issiq sochiq va mukammal yakun.", price: "80 000 so‘mdan" },
  { n: "03", title: "BOSS kompleksi", text: "Soch, soqol va yuz parvarishi — bitta tashrifda.", price: "240 000 so‘mdan" },
];

export default function Home() {
  return <main><Header />
    <section className="hero"><div className="hero-grid" />
      <div className="wrap hero-inner">
        <div className="hero-copy"><div className="eyebrow"><span /> SAMARQAND • PREMIUM BARBERSHOP</div>
          <h1>Ko‘rinishingiz —<br/><em>sizning imzoingiz.</em></h1>
          <p>Navbatsiz, shoshilmasdan, doim bir xil yuqori sifat. BOSS’da soch turmagi shunchaki xizmat emas — o‘zingizga bo‘lgan ishonchdir.</p>
          <div className="hero-actions"><a href="#bron" className="btn gold">Navbatga yozilish <ArrowUpRight size={18}/></a><Link href="/services" className="btn ghost">Xizmatlarni ko‘rish</Link></div>
          <div className="hero-proof"><div className="avatars"><span>J</span><span>U</span><span>A</span></div><div><b>4.9 / 5</b><small><Star size={13} fill="currentColor"/> 380+ mijoz fikri</small></div></div>
        </div>
        <div className="hero-visual"><div className="arch"><div className="portrait"><Scissors size={94}/><span>BOSS</span><small>EST. 2025</small></div></div><div className="floating-card top"><Clock3/><span><b>60 daqiqada</b><small>premium xizmat</small></span></div><div className="floating-card bottom"><ShieldCheck/><span><b>Sifat kafolati</b><small>har bir detalda</small></span></div></div>
      </div>
    </section>
    <section className="ticker"><div>ANIQLIK <span>✦</span> USLUB <span>✦</span> ISHONCH <span>✦</span> KOMFORT <span>✦</span> BOSS</div></section>
    <section className="section wrap"><div className="section-head"><div><span className="kicker">XIZMATLAR</span><h2>Sizga mos uslub.<br/>Ortiqcha gaplarsiz.</h2></div><Link href="/services" className="text-link">Barcha xizmatlar <ArrowUpRight size={18}/></Link></div>
      <div className="service-grid">{services.map(s=><article className="service-card" key={s.n}><span className="num">{s.n}</span><Scissors/><h3>{s.title}</h3><p>{s.text}</p><div><b>{s.price}</b><ArrowUpRight/></div></article>)}</div>
    </section>
    <section className="dark-section"><div className="wrap split"><div className="story-art"><div className="big-b">B</div><span>Ikki do‘st.<br/>Bitta katta maqsad.</span></div><div className="story-copy"><span className="kicker gold-text">BIZNING HIKOYA</span><h2>Mahorat, komfort va hurmat bir joyda.</h2><p>Oddiy sartaroshxonada ishlagan ikki do‘st “nega yuqori sifat va chinakam komfort bir joyda bo‘lmasligi kerak?” degan savoldan BOSS’ni yaratdi.</p><p>Biz har bir detalga e’tibor, mijoz vaqtiga hurmat va doimiy rivojlanishga ishonamiz.</p><Link href="/about" className="btn outline">Hikoyamizni o‘qing <ArrowUpRight size={18}/></Link></div></div></section>
    <section className="section wrap"><div className="benefit-grid"><div><Sparkles/><b>Trend emas, sizga mos stil</b><p>Barber yuz shakli va kundalik hayotingizga mos kesim tavsiya qiladi.</p></div><div><CalendarDays/><b>Aniq vaqt bo‘yicha bron</b><p>Navbat kutmaysiz. Belgilangan vaqtda xizmat boshlanadi.</p></div><div><ShieldCheck/><b>Barqaror natija</b><p>Har tashrifda siz kutgan toza va professional ko‘rinish.</p></div></div></section>
    <BookingPanel /><Footer />
  </main>
}
