import { FaFacebook, FaGithub, FaTelegram, FaInstagram, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';
import { SiDribbble } from 'react-icons/si';
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
  Code2, 
  Info,
  Layers,
  Sun,
  Moon
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
      proj2Tech: ["React", "Tailwind CSS", "Vite","JavaScript (ES6)"],
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
      proj2Tech: ["React", "Tailwind CSS", "Vite","ጃቫስክሪፕት"], 
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
    <div className={`min-h-screen flex flex-col relative transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a0a0a] text-[#ffffff]' : 'bg-[#f8f9fa] text-[#1a1a1a]'}`} id="top">
      
      {theme === 'dark' && (
        <>
          <div className="w-[400px] h-[400px] top-[10%] left-[5%] bg-[rgba(37,99,235,0.08)] pointer-events-none absolute rounded-full blur-[120px]"></div>
          <div className="w-[500px] h-[500px] top-[40%] right-[3%] bg-[rgba(37,99,235,0.05)] pointer-events-none absolute rounded-full blur-[140px]"></div>
        </>
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${theme === 'dark' ? 'bg-[#0a0a0a]/85 border-[#2563eb]/20' : 'bg-[#f8f9fa]/85 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
         <div className="flex items-center gap-4">
       <img 
        src="/me.jpg" 
        alt="Bereket" 
      className="w-10 h-10 rounded-full object-cover border border-[#2563eb]"
      />
    <a href="#top" className="text-2xl font-black tracking-[0.25em] font-sans text-[#2563eb]">BEREKET</a>
  </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={`text-sm font-semibold tracking-wider transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-[#2563eb]' : 'text-gray-600 hover:text-[#2563eb]'}`}>{current.navAbout}</a>
            <a href="#projects" className={`text-sm font-semibold tracking-wider transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-[#2563eb]' : 'text-gray-600 hover:text-[#2563eb]'}`}>{current.navProjects}</a>
            <a href="#contact" className={`text-sm font-semibold tracking-wider transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-[#2563eb]' : 'text-gray-600 hover:text-[#2563eb]'}`}>{current.navContact}</a>
            
            <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700"></div>

            {/* Light/Dark Mode Switcher */}
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-all min-h-[44px] min-w-[44px] flex items-center justify-center border ${theme === 'dark' ? 'border-gray-800 hover:bg-gray-900 text-yellow-400' : 'border-gray-200 hover:bg-gray-100 text-indigo-600'}`}>
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button onClick={() => setLang(l => l === 'en' ? 'am' : 'en')} className="px-4 py-2 rounded-md border border-[#2563eb]/40 text-[#2563eb] hover:bg-[#2563eb] hover:text-white text-xs font-bold flex items-center gap-1.5 min-h-[44px]">
              <Globe2 className="w-3.5 h-3.5" />
              {lang === 'en' ? "አማርኛ" : "English"}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 text-gray-500 min-h-[44px]">
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>
            <button onClick={() => setLang(l => l === 'en' ? 'am' : 'en')} className="px-3 py-2 rounded-md border border-[#2563eb]/40 text-[#2563eb] text-xs font-bold min-h-[44px]">
              {lang === 'en' ? "አማርኛ" : "EN"}
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow z-10 pt-20">
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/my-africa.jpg')" }}>
          <div className="relative max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center py-20 z-10">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-[0.16em] mb-6 uppercase min-h-[36px] ${theme === 'dark' ? 'border-[#2563eb]/30 bg-[#0a0a0a]/90 text-[#2563eb]' : 'border-[#2563eb]/20 bg-blue-50 text-[#2563eb]'}`}>
              <Sparkles className="w-3.5 h-3.5" />
              {current.heritageSub}
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight font-sans mb-6 leading-tight">
              {lang === 'en' ? "Hi, I'm " : ""}<span className="text-[#2563eb]">{lang === 'en' ? "Bereket" : "ጤና ይስጥልኝ! በረከት እባላለሁ፣"}</span>
            </h1>

            <p className={`text-base sm:text-xl leading-relaxed max-w-2xl mb-10 px-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {current.heroBio}
            </p>

            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md tracking-[0.15em] text-xs uppercase font-bold bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all shadow-lg min-h-[48px] touch-manipulation">
              {current.heroCTA}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section id="projects" className={`py-24 px-4 sm:px-6 lg:px-8 border-t ${theme === 'dark' ? 'border-gray-900 bg-gray-900/20' : 'border-gray-200 bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black tracking-wider font-sans text-[#2563eb] mb-4 uppercase">{current.projectsTitle}</h2>
              <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{current.projectsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className={`border flex flex-col p-6 rounded-lg min-h-[280px] ${theme === 'dark' ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                <span className="text-[10px] tracking-widest font-mono text-[#2563eb] font-bold uppercase mb-2">01 / ENTERTAINMENT</span>
                <h3 className="text-xl font-bold font-sans mb-3">{current.proj1Title}</h3>
                <p className={`text-sm leading-relaxed mb-6 flex-grow ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{current.proj1Desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {current.proj1Tech.map((tech, i) => <span key={i} className={`text-[10px] font-mono px-2 py-1 rounded border ${theme === 'dark' ? 'bg-gray-900 text-gray-300 border-gray-800' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>{tech}</span>)}
                </div>
              </div>

              {/* Project 2 - Clickable */}
              <a href={current.proj2Link} target="_blank" rel="noopener noreferrer" className={`border flex flex-col p-6 rounded-lg transition-all block min-h-[280px] active:scale-[0.99] touch-manipulation hover:border-[#2563eb] ${theme === 'dark' ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                <span className="text-[10px] tracking-widest font-mono text-[#2563eb] font-bold uppercase mb-2">02 / PREMIUM E-COMMERCE</span>
                <h3 className="text-xl font-bold font-sans mb-3">{current.proj2Title}</h3>
                <p className={`text-sm leading-relaxed mb-6 flex-grow ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{current.proj2Desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {current.proj2Tech.map((tech, i) => <span key={i} className={`text-[10px] font-mono px-2 py-1 rounded border ${theme === 'dark' ? 'bg-gray-900 text-gray-300 border-gray-800' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>{tech}</span>)}
                </div>
              </a>

              {/* Project 3 - Clickable */}
              <a href={current.proj3Link} target="_blank" rel="noopener noreferrer" className={`border flex flex-col p-6 rounded-lg transition-all block min-h-[280px] active:scale-[0.99] touch-manipulation hover:border-[#2563eb] ${theme === 'dark' ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
                <span className="text-[10px] tracking-widest font-mono text-[#2563eb] font-bold uppercase mb-2">03 / DIGITAL ART PORTFOLIO</span>
                <h3 className="text-xl font-bold font-sans mb-3">{current.proj3Title}</h3>
                <p className={`text-sm leading-relaxed mb-6 flex-grow ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{current.proj3Desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {current.proj3Tech.map((tech, i) => <span key={i} className={`text-[10px] font-mono px-2 py-1 rounded border ${theme === 'dark' ? 'bg-gray-900 text-gray-300 border-gray-800' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>{tech}</span>)}
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className={`py-24 px-4 sm:px-6 lg:px-8 border-t ${theme === 'dark' ? 'border-gray-900 bg-gray-900/10' : 'border-gray-200 bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`relative p-6 w-full max-w-sm mx-auto aspect-square rounded-xl border flex flex-col items-center justify-center text-center shadow-sm ${theme === 'dark' ? 'border-gray-800 bg-[#0a0a0a]' : 'border-gray-200 bg-gray-50'}`}>
                <Code2 className="w-12 h-12 text-[#2563eb] mb-4" />
                <h3 className="font-sans text-2xl font-black mb-2">BEREKET</h3>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#2563eb] font-bold uppercase mb-4">FULL-STACK CRAFTSMAN</span>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-[#2563eb] mb-2 uppercase flex items-center gap-1.5"><Info className="w-3 h-3"/> BIOGRAPHY</span>
                <h2 className="text-3xl sm:text-4xl font-black font-sans mb-6 uppercase">{current.aboutTitle}</h2>
                <p className={`text-sm sm:text-base mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{current.aboutBio1}</p>
                <p className={`text-sm sm:text-base mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{current.aboutBio2}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div>
                    <h4 className="font-sans text-[#2563eb] text-base font-bold mb-3 flex items-center gap-2"><Layers className="w-4 h-4" /> {current.techHeading}</h4>
                    <ul className={`space-y-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
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

        <section id="contact" className={`py-24 px-4 sm:px-6 lg:px-8 border-t ${theme === 'dark' ? 'border-gray-900 bg-[#0a0a0a]' : 'border-gray-200 bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black tracking-wider font-sans text-[#2563eb] mb-4 uppercase">{current.contactTitle}</h2>
              <p className={`text-sm sm:text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{current.contactSubtitle}</p>
            </div>

            <div className={`border rounded-xl p-6 sm:p-10 shadow-xl ${theme === 'dark' ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-200'}`}>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold font-sans mb-3">{lang === 'en' ? "Thank You!" : "እናመሰግናለን!"}</h3>
                  <p className="text-gray-500 text-sm mb-8">{current.formSuccess}</p>
                </div>
              ) : (
                <form action="https://formspree.io/f/xrevryka" method="POST" onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase text-[#2563eb]">{current.formName} *</label>
                      <input type="text" name="name" required value={formState.name} onChange={handleInputChange} className={`border rounded-md text-sm px-4 py-3.5 focus:outline-none focus:border-[#2563eb] min-h-[48px] ${theme === 'dark' ? 'bg-[#0a0a0a] border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-black'}`} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase text-[#2563eb]">{current.formEmail} *</label>
                      <input type="email" name="email" required value={formState.email} onChange={handleInputChange} className={`border rounded-md text-sm px-4 py-3.5 focus:outline-none focus:border-[#2563eb] min-h-[48px] ${theme === 'dark' ? 'bg-[#0a0a0a] border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-black'}`} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase text-[#2563eb]">{current.formMessage} *</label>
                    <textarea name="message" rows={5} required value={formState.message} onChange={handleInputChange} className={`border rounded-md text-sm px-4 py-3.5 focus:outline-none focus:border-[#2563eb] resize-none ${theme === 'dark' ? 'bg-[#0a0a0a] border-gray-800 text-white' : 'bg-gray-50 border-gray-200 text-black'}`}></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-4 bg-[#2563eb] text-white font-bold uppercase rounded-md text-xs min-h-[48px] hover:bg-[#1d4ed8] transition-all touch-manipulation">
                    {isSubmitting ? current.formSending : current.formBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className={`border-t py-12 relative ${theme === 'dark' ? 'bg-[#0a0a0a] border-gray-900' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <h3 className="text-2xl font-black tracking-[0.25em] font-sans text-[#2563eb] mb-6">BEREKET</h3>
    
    {/* አይከኖቹ የሚገቡበት ቦታ */}
    <div className="flex flex-wrap justify-center gap-6 mb-6 text-2xl text-gray-400">
      <a href="https://facebook.com/bereket.haylu.516834" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition"><FaFacebook /></a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" className="hover:text-gray-100 transition"><FaGithub /></a>
      <a href="https://t.me/@bereket091" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaTelegram /></a>
      <a href="https://instagram.com/haylueco" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition"><FaInstagram /></a>
      <a href="https://linkedin.com/in/https://www.linkedin.com/in/bereket-haylu-709279352" target="_blank" rel="noreferrer" className="hover:text-blue-700 transition"><FaLinkedin /></a>
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaTwitter /></a>
      <a href="https://dribbble.com/yourprofile" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition"><SiDribbble /></a>
      <a href="https://discord.com/users/yourprofile" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition"><FaDiscord /></a>
    </div>

    <p className="text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Designed & Compiled by Bereket. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  );
}
