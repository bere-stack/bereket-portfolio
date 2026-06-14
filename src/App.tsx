import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Globe2, 
  CheckCircle2, 
  Send, 
  Flame, 
  Code2, 
  Info,
  Layers
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'en' | 'am'>('en');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    en: {
      navAbout: "About",
      navProjects: "Projects",
      navContact: "Contact",
      heritageSub: "WHERE HERITAGE MEETS CODE",
      heroTitle: "Hi, I'm Bereket",
      heroBio: "A Full-Stack Developer and Designer bridging the gap between analytical logic, business economics, and cultural aesthetics to craft impactful digital solutions.",
      heroCTA: "View My Work",
      
      projectsTitle: "Featured Projects",
      projectsSubtitle: "A curated collection merging cutting-edge engineering with premium web discipline and business logic.",
      
      proj1Title: "Netflix Clone",
      proj1Desc: "A cinematic streaming web application interface built with React, featuring live movie rows, banner logic, and Firebase authentication.",
      proj1Tech: ["React", "Firebase", "TMDB API", "Tailwind CSS"],

      proj2Title: "Biruh Tesfa Furniture",
      proj2Desc: "A premium and modern e-commerce platform designed for high-quality furniture, showcasing advanced layout structures, optimized user conversion, and elegant product portfolios.",
      proj2Tech: ["React", "Tailwind CSS", "Vite"],
      proj2Link: "https://biruh-tesfa-furniture-1o69.vercel.app/",

      proj3Title: "Jano Photo Studio",
      proj3Desc: "A high-end cultural and fine-art photography studio platform featuring fluid grid animations, rich performance-optimized galleries, and direct booking paths.",
      proj3Tech: ["HTML5", "CSS Grid", "JavaScript (ES6)", "Intersections API"],
      proj3Link: "https://jano-photo-studio.vercel.app/",

      aboutTitle: "About Me",
      aboutBio1: "I am a Full-Stack Developer with a BA degree in Economics and over 2 years of experience in accounting-related roles. This background gives me a unique edge in understanding complex business workflows and financial structures, which I seamlessly fuse with graphic design to build highly efficient, beautiful digital products.",
      aboutBio2: "Deeply rooted in my cultural heritage, my worldview is also shaped by a profound love for philosophy and books. I don't just write lines of code; I architect comprehensive solutions where deep analytical engineering, strategic business principles, and modern digital aesthetics live in perfect harmony.",
      techHeading: "Technical Arsenal & Core Competencies",
      culturalConcept: "Cultural Vision",
      culturalDesc: "I passionately incorporate authentic cultural aesthetics, such as the colorful geometric mathematics of Habesha clothing (Tilet), into high-fidelity user experiences for global digital preservation.",

      contactTitle: "Get In Touch",
      contactSubtitle: "Have an ambitious project in mind or looking to hire? Drop me a line and let's craft something truly remarkable together.",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      formBtn: "Send Message",
      formSending: "Sending Message...",
      formSuccess: "Message sent successfully! Thank you. I will reply to you within 24 hours.",
      
      footerCredits: "Designed & Compiled by Bereket. All rights reserved."
    },
    am: {
      navAbout: "ስለ እኔ",
      navProjects: "ፕሮጀክቶች",
      navContact: "ያግኙኝ",
      heritageSub: "ባህልና ጥበብ ከኮድ ጋር የሚገናኙበት",
      heroTitle: "ጤና ይስጥልኝ! በረከት እባላለሁ፣",
      heroBio: "ተፅዕኖ ፈጣሪ የሆኑ ዲጂታል መፍትሄዎችን ለመገንባት፤ የኮድ አመክንዮን፣ የቢዝነስ ኢኮኖሚክስን እና የባህል ውበትን አስተባብሬ የምሰራ Full-Stack Developer እና ዲዛይነር ነኝ።",
      heroCTA: "የሠራኋቸውን እዩ",
      
      projectsTitle: "የተመረጡ ፕሮጀክቶች",
      projectsSubtitle: "ዘመናዊ የቴክኖሎጂ ስራዎችን ከማራኪ ዲዛይን፣ የንግድ ስትራቴጂ እና የገበያ እይታ ጋር በማዋሃድ የተሰሩ የድረ-ገጾች ስብስብ።",
      
      proj1Title: "የኔትፍሊክስ ክሎን",
      proj1Desc: "ፊልሞችን፣ ተንቀሳቃሽ ምስሎችን እና የፋየርቤዝ ማረጋገጫን (Firebase Auth) ያካተተ በሪአክት (React) የተገነባ የፊልም ማሳያ ድረ-ገጽ።",
      proj1Tech: ["ሪአክት (React)", "ፋየርቤዝ", "ቲ.ኤም.ዲ.ቢ", "ቴልዊንድ"],
 
      proj2Title: "ብሩህ ተስፋ ፈርኒቸር",
      proj2Desc: "ከፍተኛ ጥራት ያላቸውን የቤትና የቢሮ ፈርኒቸሮችን ለገበያ የሚያቀርብ፣ ለተጠቃሚ ምቹ የሆኑ ዘመናዊ መዋቅሮችን እና ማራኪ ዲዛይን ያካተተ ፕሪሚየም የኢ-ኮሜርስ ድረ-ገጽ።", 
      proj2Tech: ["React", "Tailwind CSS", "Vite"], 
      proj2Link: "https://biruh-tesfa-furniture-1o69.vercel.app/",

      proj3Title: "ጃኖ ፎቶ ስቱዲዮ",
      proj3Desc: "ልዩ ልዩ አስደናቂ ማዕከለ-ስዕላት እና የዕቅድ ማስያዣን የያዘ ጥራት ያለው የባህልና ፎቶግራፊ ማሳያ ድረ-ገጽ።",
      proj3Tech: ["HTML5", "CSS ግሪድ", "ጃቫስክሪፕት", "ማሳያ ኤ.ፒ.አይ"],
      proj3Link: "https://jano-photo-studio.vercel.app/",

      aboutTitle: "ስለ እኔ",
      aboutBio1: "በኢኮኖሚክስ የቢኤ (BA) ዲግሪ ያለኝ እና በሂሳብ አያያዝ (Accounting) ዘርፍ ከሁለት ዓመት በላይ የሰራሁ Full-Stack Developer ነኝ። ይህ የቢዝነስ እና የፋይናንስ እውቀቴ፣ ከግራፊክስ ዲዛይን ክህሎቴ ጋር ተዳምሮ ጠንካራ፣ ዘመናዊ እና የንግድ ፍላጎትን መሰረት ያደረጉ የሶፍትዌር ምርቶችን ለመገንባት ልዩ አቅም ሰጥቶኛል።",
      aboutBio2: "ለባህሌ ካለኝ ጥልቅ ፍቅር ባሻገር፣ አስተሳሰቤ በፍልስፍና እና በመጻሕፍት ንባብ የዳበረ ነው። ኮድ ከመጻፍ ባለፈ፣ የሂሳብ ቀመርን፣ የባህል ውበትን እና ዘመናዊ የቴክኖሎጂ ምህንድስናን ያቀናጁ ፍጹም መፍትሄዎችን መፍጠር እወዳለሁ።",
      techHeading: "የቴክኒክ ችሎታዎችና የአቅም አድማሶች",
      culturalConcept: "የባህል ውህደት ራዕይ",
      culturalDesc: "እንደ የሐበሻ ቀሚስ ጥለት ያሉ ባህላዊ ውበት ያላቸውን የጂኦሜትሪክ ቅጦች በከፍተኛ-ጥራት የድረ-ገጽ ይዘቶች ላይ በማካተት የባህል ጥበብን በዲጂታል ዓለም ውስጥ አቆያለሁ።",

      contactTitle: "ያግኙኝ",
      contactSubtitle: "በአእምሮዎ የያዙት ትልቅ ፕሮጀክት አለ ወይስ እኔን መቅጠር ይፈልጋሉ? መልዕክት ይላኩልኝና አብረን አስደናቂ ነገር እንፍጠር።",
      formName: "ስምዎ",
      formEmail: "ኢሜይልዎ",
      formMessage: "መልዕክትዎ",
      formBtn: "መልዕክት ላክ",
      formSending: "በመላክ ላይ...",
      formSuccess: "መልዕክትዎ በተሳካ ሁኔታ ተልኳል! እናመሰግናለን። በ24 ሰዓት ውስጥ ምላሽ እሰጥዎታለሁ።",
      
      footerCredits: "በበረከት የተነደፈ እና የተገነባ። መብቱ በህግ የተጠበቀ ነው።"
    }
  };

  const current = content[lang];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      setIsSubmitting(false);
      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      }
    }).catch(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#14110f] text-[#f5f5f7] selection:bg-[#eab308]/30" id="top">
      
      <div className="w-[400px] h-[400px] top-[10%] left-[5%] bg-[rgba(234,179,8,0.05)] pointer-events-none absolute rounded-full blur-[120px]"></div>
      <div className="w-[500px] h-[500px] top-[40%] right-[3%] bg-[rgba(178,34,34,0.04)] pointer-events-none absolute rounded-full blur-[140px]"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#14110f]/85 backdrop-blur-md border-b border-[#eab308]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="me.jpg" 
                alt="Bereket" 
                className="w-12 h-12 rounded-full object-cover grayscale border-2 border-[#14110f] shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200";
                }}
              />
            </div>
            <a href="#top" className="text-2xl font-bold tracking-[0.2em] font-serif text-[#eab308]">BEREKET</a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium tracking-wider text-[#f5f5f7]/80 hover:text-[#eab308] transition-colors">{current.navAbout}</a>
            <a href="#projects" className="text-sm font-medium tracking-wider text-[#f5f5f7]/80 hover:text-[#eab308] transition-colors">{current.navProjects}</a>
            <a href="#contact" className="text-sm font-medium tracking-wider text-[#f5f5f7]/80 hover:text-[#eab308] transition-colors">{current.navContact}</a>
            
            <button onClick={() => setLang(l => l === 'en' ? 'am' : 'en')} className="px-4 py-2 rounded-sm border border-[#eab308]/30 text-[#eab308] hover:bg-[#eab308] hover:text-[#14110f] text-xs font-semibold flex items-center gap-1.5 min-h-[44px]">
              <Globe2 className="w-3.5 h-3.5" />
              {lang === 'en' ? "አማርኛ" : "English"}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setLang(l => l === 'en' ? 'am' : 'en')} className="px-3 py-2 rounded-sm border border-[#eab308]/40 text-[#eab308] text-xs font-semibold min-h-[44px]">
              {lang === 'en' ? "አማርኛ" : "EN"}
            </button>
          </div>
        </div>
        <div className="h-[4px] w-full bg-gradient-to-r from-[#eab308] via-[#b22222] to-[#eab308]"></div>
      </nav>

      <main className="flex-grow z-10 pt-20">
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('my-africa.jpe')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#14110f]/60 via-[#14110f]/90 to-[#14110f]"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center py-20 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#eab308]/25 bg-[#14110f]/90 text-[#eab308] text-xs font-bold tracking-[0.16em] mb-6 uppercase min-h-[36px]">
              <Sparkles className="w-3.5 h-3.5" />
              {current.heritageSub}
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-serif text-[#f5f5f7] mb-6 leading-tight">
              {lang === 'en' ? "Hi, I'm " : ""}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] via-[#f7d070] to-[#eab308]">{lang === 'en' ? "Bereket" : "ጤና ይስጥልኝ! በረከት እባላለሁ፣"}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#f5f5f7]/90 leading-relaxed max-w-2xl mb-10 px-2">
              {current.heroBio}
            </p>

            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm tracking-[0.15em] text-xs uppercase font-bold bg-[#eab308] text-[#14110f] hover:bg-[#eab308]/90 transition-all shadow-lg min-h-[48px] touch-manipulation">
              {current.heroCTA}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#eab308]/10 bg-[#1c1814]/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest font-serif text-[#eab308] mb-4 uppercase">{current.projectsTitle}</h2>
              <p className="text-sm sm:text-base text-[#f5f5f7]/70 leading-relaxed">{current.projectsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-[#14110f]/90 border border-[#eab308]/10 flex flex-col p-6 rounded-sm min-h-[280px]">
                <span className="text-[10px] tracking-widest font-mono text-[#eab308]/60 font-bold uppercase mb-2">01 / ENTERTAINMENT</span>
                <h3 className="text-xl font-bold font-serif text-[#f5f5f7] mb-3">{current.proj1Title}</h3>
                <p className="text-sm text-[#f5f5f7]/75 leading-relaxed mb-6 flex-grow">{current.proj1Desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#eab308]/10">
                  {current.proj1Tech.map((tech, i) => <span key={i} className="text-[10px] font-mono px-2 py-1 rounded bg-[#eab308]/5 text-[#eab308] border border-[#eab308]/10">{tech}</span>)}
                </div>
              </div>

              {/* Project 2 - Clickable */}
              <a href={current.proj2Link} target="_blank" rel="noopener noreferrer" className="bg-[#14110f]/90 border border-[#eab308]/15 flex flex-col p-6 rounded-sm hover:border-[#eab308] transition-all block min-h-[280px] active:scale-[0.99] touch-manipulation">
                <span className="text-[10px] tracking-widest font-mono text-[#eab308] font-bold uppercase mb-2">02 / PREMIUM E-COMMERCE</span>
                <h3 className="text-xl font-bold font-serif text-[#f5f5f7] mb-3">{current.proj2Title}</h3>
                <p className="text-sm text-[#f5f5f7]/80 leading-relaxed mb-6 flex-grow">{current.proj2Desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#eab308]/20">
                  {current.proj2Tech.map((tech, i) => <span key={i} className="text-[10px] font-mono px-2 py-1 rounded bg-[#eab308]/10 text-[#eab308] border border-[#eab308]/30">{tech}</span>)}
                </div>
              </a>

              {/* Project 3 - Clickable */}
              <a href={current.proj3Link} target="_blank" rel="noopener noreferrer" className="bg-[#14110f]/90 border border-[#eab308]/15 flex flex-col p-6 rounded-sm hover:border-[#eab308] transition-all block min-h-[280px] active:scale-[0.99] touch-manipulation">
                <span className="text-[10px] tracking-widest font-mono text-[#eab308] font-bold uppercase mb-2">03 / DIGITAL ART PORTFOLIO</span>
                <h3 className="text-xl font-bold font-serif text-[#f5f5f7] mb-3">{current.proj3Title}</h3>
                <p className="text-sm text-[#f5f5f7]/80 leading-relaxed mb-6 flex-grow">{current.proj3Desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#eab308]/20">
                  {current.proj3Tech.map((tech, i) => <span key={i} className="text-[10px] font-mono px-2 py-1 rounded bg-[#eab308]/10 text-[#eab308] border border-[#eab308]/30">{tech}</span>)}
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#eab308]/10 bg-[#1a1512]/40">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative p-1 w-full max-w-sm mx-auto aspect-square rounded-sm border border-[#eab308]/20 bg-[#14110f]/95 flex flex-col items-center justify-center p-6 text-center">
                <Code2 className="w-12 h-12 text-[#eab308] mb-4" />
                <h3 className="font-serif text-[#f5f5f7] text-2xl font-bold mb-2">BEREKET</h3>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#eab308] font-bold uppercase mb-4">FULL-STACK CRAFTSMAN</span>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-[#eab308] mb-2 uppercase flex items-center gap-1.5"><Info className="w-3 h-3"/> BIOGRAPHY</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#f5f5f7] mb-6 uppercase">{current.aboutTitle}</h2>
                <p className="text-sm sm:text-base text-[#f5f5f7]/90 mb-4 leading-relaxed">{current.aboutBio1}</p>
                <p className="text-sm sm:text-base text-[#f5f5f7]/90 mb-8 leading-relaxed">{current.aboutBio2}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#eab308]/15">
                  <div>
                    <h4 className="font-serif text-[#eab308] text-base font-bold mb-3 flex items-center gap-2"><Layers className="w-4 h-4" /> {current.techHeading}</h4>
                    <ul className="space-y-2 text-[#f5f5f7]/80 text-sm">
                      <li>• Full-Stack Web Engineering</li>
                      <li>• React.js, Vite &amp; Tailwind CSS</li>
                      <li>• Graphic Design &amp; Digital Aesthetics</li>
                      <li>• Economics &amp; Financial Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#eab308]/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest font-serif text-[#eab308] mb-4 uppercase">{current.contactTitle}</h2>
              <p className="text-sm sm:text-base text-[#f5f5f7]/70 max-w-2xl mx-auto">{current.contactSubtitle}</p>
            </div>

            <div className="bg-[#1a1512]/60 border border-[#eab308]/15 rounded-sm p-6 sm:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold font-serif text-[#f5f5f7] mb-3">{lang === 'en' ? "Thank You!" : "እናመሰግናለን!"}</h3>
                  <p className="text-[#f5f5f7]/80 text-sm mb-8">{current.formSuccess}</p>
                </div>
              ) : (
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase text-[#eab308]">{current.formName} *</label>
                      <input type="text" name="name" required value={formState.name} onChange={handleInputChange} className="bg-[#14110f] border border-[#eab308]/25 text-sm text-[#f5f5f7] px-4 py-3.5 focus:outline-none focus:border-[#eab308] min-h-[48px]" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase text-[#eab308]">{current.formEmail} *</label>
                      <input type="email" name="email" required value={formState.email} onChange={handleInputChange} className="bg-[#14110f] border border-[#eab308]/25 text-sm text-[#f5f5f7] px-4 py-3.5 focus:outline-none focus:border-[#eab308] min-h-[48px]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-[#eab308]">{current.formMessage} *</label>
                    <textarea name="message" rows={5} required value={formState.message} onChange={handleInputChange} className="bg-[#14110f] border border-[#eab308]/25 text-sm text-[#f5f5f7] px-4 py-3.5 focus:outline-none focus:border-[#eab308] resize-none"></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-4 bg-[#eab308] text-[#14110f] font-bold uppercase text-xs min-h-[48px] touch-manipulation">
                    {isSubmitting ? current.formSending : current.formBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b0908] border-t border-[#eab308]/10 py-12 relative">
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#eab308] via-[#b22222] to-[#eab308]"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <h3 className="text-2xl font-bold tracking-[0.2em] font-serif text-[#eab308] mb-6">BEREKET</h3>
          <p className="text-center text-xs text-[#f5f5f7]/40">&copy; {new Date().getFullYear()} {current.footerCredits}</p>
        </div>
      </footer>
    </div>
  );
}
