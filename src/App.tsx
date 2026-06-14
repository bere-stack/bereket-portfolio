import React, { useState,useEffect } from 'react';
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
  AppWindow, 
  Briefcase, 
  Info,
  Layers
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'en' | 'am'>('en');
  
  // 👇 እዚህ ጋ የእኔን የሙድ (Theme) ኮድ ጨምረው
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  // 👆 የሙድ ኮድ እዚህ ላይ ያብቃል

  const [formState, setFormState] = useState<{ name: string; email: string; message: string }>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Content translations
  const content = {
    en: {
      navAbout: "About",
      navProjects: "Projects",
      navContact: "Contact",
      heritageSub: "WHERE HERITAGE MEETS CODE",
      heroTitle: "Hello, I'm Bereket",
      heroBio: "A Full Stack Developer crafting simple, impactful digital experiences inspired by design, storytelling, and Ethiopian artistic heritage.",
      heroCTA: "View My Work",
      
      projectsTitle: "Featured Projects",
      projectsSubtitle: "A curated collection merging cutting-edge front-end engineering with artistic web discipline.",
      
      proj1Title: "Netflix Clone",
      proj1Desc: "A cinematic streaming web application interface built with React, featuring live movie rows, banner logic, and Firebase authentication.",
      proj1Tech: ["React", "Firebase", "TMDB API", "Tailwind CSS"],

      proj2Title: "Weather Dashboard",
      proj2Desc: "A minimal, clean weather tracking application that fetches real-time environmental data and presents it with modern minimalist UI layouts.",
      proj2Tech: ["React", "OpenWeather API", "Recharts", "Vite"],
      

      proj3Title: "Jano Photo Studio",
       proj3Desc: "A premium fine-art and cultural photography platform showcasing advanced layout structures, rich galleries, and scheduling integration.",
      proj3Tech: ["HTML5", "CSS Grid", "JavaScript (ES6)", "Intersections API"],
      proj3Link: <a href="https://jano-photo-studio.vercel.app/" target="_blank" rel="noopener noreferrer"></a>,

      aboutTitle: "About Me",
      aboutBio1: "I am a dedicated Front-End Engineer who visualizes technology through an artistic lens. Combining modern frameworks like React and Tailwind CSS with rich cultural aesthetics, I create high-performance web solutions that tell stories and engage users.",
      aboutBio2: "My design philosophy is deeply rooted in my heritage—finding harmony in geometry, storytelling through contrast, and crafting user interfaces with the precise, high-end care of a master weaver.",
      techHeading: "Technical Arsenal",
      culturalConcept: "Cultural Vision",
      culturalDesc: "I incorporate authentic cultural aesthetics, such as the colorful geometric patterns of Habesha clothing (Tilet), into high-fidelity web experiences for global digital preservation.",

      contactTitle: "Get In Touch",
      contactSubtitle: "Have an ambitious project in mind or looking to hire? Drop me a line and let's craft something remarkable together.",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      formBtn: "Send Message",
      formSending: "Sending Message...",
      formSuccess: "Message sent successfully! Thank you. I will reply to you within 24 hours.",
      
      footerCredits: "Designed & Compiled by Bereket. All rights reserved.",
      toastClose: "Dismiss"
    },
    am: {
      navAbout: "ስለ እኔ",
      navProjects: "ፕሮጀክቶች",
      navContact: "ያግኙኝ",
      heritageSub: "ባህልና ጥበብ ከኮድ ጋር የሚገናኙበት",
      heroTitle: "ጤና ይስጥልኝ፣ እኔ በረከት ነኝ",
      heroBio: "በዲዛይን፣ በታሪክ አተራረክ እና በኢትዮጵያ የስነ-ጥበብ ቅርሶች በመነሳሳት ሁለንተናዊ እና ተሰሚነት ያላቸውን ዲጂታል ተሞክሮዎች የምሰራ የፊት-ለፊት (Front-End) አልሚ ነኝ።",
      heroCTA: "የሠራኋቸውን እዩ",
      
      projectsTitle: "የተመረጡ ፕሮጀክቶች",
      projectsSubtitle: "ዘመናዊ የቴክኖሎጂ ስራዎችን ከማራኪ ዲዛይን እና እይታ ጋር በማዋሃድ የተሰሩ የድረ-ገጾች ስብስብ።",
      
      proj1Title: "የኔትፍሊክስ ክሎን",
      proj1Desc: "ፊልሞችን፣ ተንቀሳቃሽ ምስሎችን እና የፋየርቤዝ ማረጋገጫን (Firebase Auth) ያካተተ በሪአክት (React) የተገነባ የፊልም ማሳያ ድረ-ገጽ።",
      proj1Tech: ["ሪአክት (React)", "ፋየርቤዝ", "ቲ.ኤም.ዲ.ቢ", "ቴልዊንድ"],

      proj2Title: "የአየር ሁኔታ ማሳያ",
      proj2Desc: "ቅጽበታዊ የአየር ሁኔታ መረጃን በመሳብ ቀላል እና ውብ በሆነ አቀራረብ የሚያሳይ ዘመናዊ መተግበሪያ።",
      proj2Tech: ["ሪአክት (React)", "የአየር ሁኔታ ኤ.ፒ.አይ", "ሪቻርትስ", "ቪት"],

      proj3Title: "ጃኖ ፎቶ ስቱዲዮ",
      proj3Desc: "ልዩ ልዩ አስደናቂ ማዕከለ-ስዕላት እና የዕቅድ ማስያዣን የያዘ ጥራት ያለው የባህልና ፎቶግራፊ ማሳያ ድረ-ገጽ።",
      proj3Tech: ["HTML5", "CSS ግሪድ", "ጃቫስክሪፕት", "ማሳያ ኤ.ፒ.አይ"],
      proj3Link: <a href="https://jano-photo-studio.vercel.app/" target="_blank" rel="noopener noreferrer"></a>,

      aboutTitle: "ስለ እኔ",
      aboutBio1: "እኔ ቴክኖሎጂን በኪነ-ጥበብ መነጽር የምመለከት የፊት-ለፊት (Front-End) መሐንዲስ ነኝ። እንደ ሪአክት (React) እና ቴልዊንድ (Tailwind CSS) ያሉ ዘመናዊ መሣሪያዎችን ከባህላዊ ውበት ጋር በማዋሃድ ታሪክን የሚተርኩና ተጠቃሚዎችን የሚስቡ ከፍተኛ አፈጻጸም ያላቸውን የድረ-ገጽ መፍትሄዎችን እሠራለሁ።",
      aboutBio2: "የዲዛይን አስተሳሰቤ ከባህሌ ጋር በጥብቅ የተቆራኘ ነው—በጂኦሜትሪ ውስጥ ስምምነትን ማግኘት፣ በንፅፅር ታሪክ መተረክ እና ልክ እንደ ጥበበኛ ሸማኔ የተጠቃሚ በይነገጽን ማቀናጀት።",
      techHeading: "የቴክኒክ ችሎታዎች",
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
      
      footerCredits: "በበረከት የተነደፈ እና የተገነባ። መብቱ በህግ የተጠበቀ ነው።",
      toastClose: "ዝጋ"
    }
  };

  const current = content[lang as keyof typeof content];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev: { name: string; email: string; message: string }) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate API request to hold up professional vibes
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const toggleLang = () => {
    setLang((l: 'en' | 'am') => l === 'en' ? 'am' : 'en');
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#060608]" id="top">
      {/* Background Glowing Ambient Orbs for professional lighting landscape */}
      <div className="glow-orb w-[400px] h-[400px] top-[10%] left-[5%] bg-[rgba(197,160,89,0.08)]"></div>
      <div className="glow-orb w-[500px] h-[500px] top-[40%] right-[3%] bg-[rgba(178,34,34,0.06)]"></div>
      <div className="glow-orb w-[420px] h-[420px] bottom-[15%] left-[8%] bg-[rgba(197,160,89,0.07)]"></div>

      {/* 2. FIXED NAVBAR */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-[#060608]/80 backdrop-blur-md border-b-[4px] border-solid border-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Left Side: Profile Circle & Gold Cinzel Logo */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full border border-[#c5a059]/40 group-hover:border-[#c5a059] transition-colors duration-300"></div>
              <img 
                src="me.jpg" 
                alt="Bereket" 
                className="profile-pic w-12 h-12 rounded-full object-cover grayscale brightness-95 contrast-105 border-2 border-[#060608] shadow-md shadow-black/80"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  // Fallback in case me.jpg loading is delayed
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200";
                }}
              />
            </div>
            <a href="#top" className="text-2xl font-bold tracking-[0.15em] font-serif text-[#c5a059] hover:text-[#f5f5f7] transition-colors duration-300">
              BEREKET
            </a>
          </div>

          {/* Right Side: Nav Links & Language Switcher */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium tracking-wider text-[#f5f5f7]/80 hover:text-[#c5a059] transition-colors duration-300 px-1 py-2 font-serif">
              {current.navAbout}
            </a>
            <a href="#projects" className="text-sm font-medium tracking-wider text-[#f5f5f7]/80 hover:text-[#c5a059] transition-colors duration-300 px-1 py-2 font-serif">
              {current.navProjects}
            </a>
            <a href="#contact" className="text-sm font-medium tracking-wider text-[#f5f5f7]/80 hover:text-[#c5a059] transition-colors duration-300 px-1 py-2 font-serif">
              {current.navContact}
            </a>
            
            {/* styled language button */}
            <button 
              id="lang-btn"
              onClick={toggleLang} 
              className="px-4 py-1.5 rounded-sm border border-[#c5a059]/30 text-[#c5a059] hover:bg-[#c5a059] hover:text-[#060608] transition-all duration-300 text-xs font-semibold tracking-wide flex items-center gap-1.5"
            >
              <Globe2 className="w-3.5 h-3.5" />
              {lang === 'en' ? "አማርኛ" : "English"}
            </button>
            <button onClick={toggleTheme} style={{ padding: '8px 16px', cursor: 'pointer', marginLeft: '10px' }}>
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>

          {/* Quick Mobile Language button on Header */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleLang} 
              className="px-3 py-1 rounded-sm border border-[#c5a059]/30 text-[#c5a059] hover:bg-[#c5a059] hover:text-[#060608] transition-all duration-300 text-xs font-semibold"
            >
              {lang === 'en' ? "አማርኛ" : "EN"}
            </button>
          </div>
        </div>

        {/* Bottom Border: Beautiful Ethiopian "Tilet" (ጥለት) repeating pattern */}
        <div className="tilet-pattern h-[4px] w-full"></div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow z-10 pt-20">
        
        {/* 3. HERO / HOME SECTION */}
        <section 
          id="hero" 
          className="relative min-h-[calc(100vh-80px)] xl:min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('my-africa.jpe')` }}
        >
          {/* Cinematic Overlay - combining rich dark gradients */}
          <div className="absolute inset-0 hero-bg-overlay"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-20">
            
            {/* Culture tagline indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a059]/25 bg-[#060608]/80 text-[#c5a059] text-xs font-semibold tracking-[0.16em] mb-6 uppercase shadow-lg shadow-black/50 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              {current.heritageSub}
            </div>

            {/* Main Bold Cinematic Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-serif text-[#f5f5f7] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] max-w-3xl leading-tight">
              Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] via-[#e2c17c] to-[#c5a059]">{lang === 'en' ? "Bereket" : "በረከት"}</span>
            </h1>

            {/* Main Bio Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#f5f5f7]/80 leading-relaxed max-w-2xl mb-10 drop-shadow-md">
              {current.heroBio}
            </p>

            {/* Call to Action Button with smooth transform + crimson red & gold glowing hover */}
            <a 
              href="#projects" 
              className="cta-button inline-flex items-center gap-2 px-8 py-4 rounded-sm tracking-[0.15em] text-sm uppercase group"
            >
              {current.heroCTA}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>

          {/* Micro Bottom Scroll Indicator decorative */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#c5a059]/40 hover:text-[#c5a059] transition-colors duration-300">
            <span className="text-[10px] tracking-[0.2em] uppercase font-serif font-semibold">SCROLL</span>
            <div className="w-[1.5px] h-6 bg-[#c5a059]/30 rounded-full overflow-hidden relative">
              <div className="w-full h-1/2 bg-[#c5a059] absolute top-0 left-0 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* 4. PROJECTS GRID SECTION */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#c5a059]/10 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Content */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest font-serif text-[#c5a059] mb-4 uppercase">
                {current.projectsTitle}
              </h2>
              {/* Gold layout divider */}
              <div className="flex items-center justify-center gap-3 my-4">
                <div className="w-8 h-[1px] bg-[#c5a059]/30"></div>
                <div className="w-3 h-3 rotate-45 border border-[#c5a059]/60"></div>
                <div className="w-8 h-[1px] bg-[#c5a059]/30"></div>
              </div>
              <p className="text-sm sm:text-base text-[#f5f5f7]/60 leading-relaxed">
                {current.projectsSubtitle}
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Netflix Clone */}
              <div className="project-card flex flex-col p-6 rounded-sm relative group">
                <div className="absolute top-0 right-0 p-3 text-[#c5a059]/20 group-hover:text-[#c5a059] transition-colors duration-300">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-[10px] tracking-widest font-mono text-[#c5a059] font-semibold uppercase mb-2">01 / CAPSTONE</span>
                <h3 className="text-xl font-bold font-serif text-[#f5f5f7] mb-3 group-hover:text-[#c5a059] transition-colors duration-300">
                  {current.proj1Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#f5f5f7]/70 leading-relaxed mb-6 flex-grow">
                  {current.proj1Desc}
                </p>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#c5a059]/15">
                  {current.proj1Tech.map((tech, i) => (
                    <span key={i} className="text-[10px] tracking-wide font-mono px-2 py-1 rounded bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/15">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 2: Weather Dashboard */}
              <div className="project-card flex flex-col p-6 rounded-sm relative group">
                <div className="absolute top-0 right-0 p-3 text-[#c5a059]/20 group-hover:text-[#c5a059] transition-colors duration-300">
                  <Globe2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] tracking-widest font-mono text-[#c5a059] font-semibold uppercase mb-2">02 / INTERACTIVE</span>
                <h3 className="text-xl font-bold font-serif text-[#f5f5f7] mb-3 group-hover:text-[#c5a059] transition-colors duration-300">
                  {current.proj2Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#f5f5f7]/70 leading-relaxed mb-6 flex-grow">
                  {current.proj2Desc}
                </p>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#c5a059]/15">
                  {current.proj2Tech.map((tech, i) => (
                    <span key={i} className="text-[10px] tracking-wide font-mono px-2 py-1 rounded bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/15">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 3: Jano Photo Studio */}
              <div className="project-card flex flex-col p-6 rounded-sm relative group">
                <div className="absolute top-0 right-0 p-3 text-[#c5a059]/20 group-hover:text-[#c5a059] transition-colors duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] tracking-widest font-mono text-[#c5a059] font-semibold uppercase mb-2">03 / SHOWCASE</span>
                <h3 className="text-xl font-bold font-serif text-[#f5f5f7] mb-3 group-hover:text-[#c5a059] transition-colors duration-300">
                  {current.proj3Title}
                </h3>
                <p className="text-xs sm:text-sm text-[#f5f5f7]/70 leading-relaxed mb-6 flex-grow">
                  {current.proj3Desc}
                </p>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#c5a059]/15">
                  {current.proj3Tech.map((tech, i) => (
                    <span key={i} className="text-[10px] tracking-wide font-mono px-2 py-1 rounded bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/15">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. ABOUT SECTION */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#c5a059]/10 bg-[#09090d]/60 relative">
          
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Visual accent container */}
              <div className="relative group p-1 w-full max-w-sm mx-auto aspect-square rounded-sm overflow-hidden border border-[#c5a059]/20 shadow-2xl shadow-black/80">
                {/* Inner beautiful abstract frame representing Ethiopia borders */}
                <div className="absolute inset-0 tilet-diagonal"></div>
                
                <div className="absolute inset-4 border border-[#c5a059]/30 flex flex-col items-center justify-center p-6 text-center bg-[#060608]/90 group-hover:border-[#c5a059] transition-colors duration-500">
                  <div className="text-[#c5a059] mb-4">
                    <Code2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-[#f5f5f7] text-2xl font-bold mb-2 tracking-wider">BEREKET</h3>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a059] font-bold uppercase mb-4">FRONT-END CRAFTSMAN</span>
                  <div className="tilet-pattern h-1 w-24"></div>
                  <p className="text-xs text-[#f5f5f7]/55 mt-4 leading-normal italic">
                    {lang === 'en' ? '"Bringing ancient pattern harmony into beautiful, highly functional digital products."' : '"ጥንታዊ የቅኝት ጂኦሜትሪን ወደ ሚደነቁ ዘመናዊ መተግበሪያዎች ማምጣት።"'}
                  </p>
                </div>
              </div>

              {/* Right Column: Bio Details */}
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#c5a059] mb-2 uppercase flex items-center gap-1.5"><Info className="w-3 h-3 text-[#c5a059]"/> {lang === 'en' ? "BIOGRAPHY" : "የህይወት ታሪክ"}</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#f5f5f7] mb-6 uppercase">
                  {current.aboutTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#f5f5f7]/85 mb-4 leading-relaxed">
                  {current.aboutBio1}
                </p>
                <p className="text-sm sm:text-base text-[#f5f5f7]/85 mb-8 leading-relaxed">
                  {current.aboutBio2}
                </p>

                {/* Technical Skills and Cultural Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#c5a059]/15">
                  
                  {/* Skill Arsenal List */}
                  <div>
                    <h4 className="font-serif text-[#c5a059] text-base font-semibold mb-3 tracking-wide flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      {current.techHeading}
                    </h4>
                    <ul className="space-y-2 text-[#f5f5f7]/70 text-sm font-semibold">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rotate-45 bg-[#b22222]"></span>
                        HTML5 &amp; Semantic Web layouts
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rotate-45 bg-[#c5a059]"></span>
                        CSS3 Custom Variables &amp; Tailwind CSS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rotate-45 bg-[#b22222]"></span>
                        Modern JavaScript (ES6+)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rotate-45 bg-[#c5a059]"></span>
                        React.js Custom Hooks &amp; State Management
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rotate-45 bg-[#b22222]"></span>
                        Firebase Auth &amp; Cloud Database structures
                      </li>
                    </ul>
                  </div>

                  {/* Cultural Vision Detail */}
                  <div className="p-4 rounded bg-[#c5a059]/5 border border-[#c5a059]/10">
                    <h4 className="font-serif text-[#c5a059] text-sm font-bold mb-2 tracking-wide flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                      {current.culturalConcept}
                    </h4>
                    <p className="text-xs text-[#f5f5f7]/75 leading-relaxed">
                      {current.culturalDesc}
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#c5a059]/10 relative">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest font-serif text-[#c5a059] mb-4 uppercase">
                {current.contactTitle}
              </h2>
              <div className="flex items-center justify-center gap-3 my-4">
                <div className="w-8 h-[1px] bg-[#c5a059]/30"></div>
                <div className="w-3 h-3 rotate-45 border border-[#c5a059]/60"></div>
                <div className="w-8 h-[1px] bg-[#c5a059]/30"></div>
              </div>
              <p className="text-sm sm:text-base text-[#f5f5f7]/60 leading-relaxed max-w-2xl mx-auto">
                {current.contactSubtitle}
              </p>
            </div>

            {/* Contact Form Submission Container */}
            <div className="bg-[#0a0a0e]/80 border border-[#c5a059]/15 rounded-sm p-6 sm:p-10 shadow-2xl shadow-black/90">
              
              {isSubmitted ? (
                /* Success Layout Feedback */
                <div className="text-center py-12 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#c5a059]/10 border border-[#c5a059] flex items-center justify-center text-[#c5a059] mb-4 shadow-xl shadow-[#c5a059]/10 animate-scaleIn">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-[#f5f5f7] mb-3 uppercase">
                    {lang === 'en' ? "Thank You!" : "እናመሰግናለን!"}
                  </h3>
                  <p className="text-[#f5f5f7]/70 text-sm max-w-md mx-auto mb-8">
                    {current.formSuccess}
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="cta-button px-6 py-2 rounded-sm text-xs uppercase"
                  >
                    {lang === 'en' ? "Send Another Message" : "ሌላ መልዕክት ላክ"}
                  </button>
                </div>
              ) : (
                /* Contact Input Form */
                <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] font-serif">
                        {current.formName} *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder={lang === 'en' ? "e.g., John Doe" : "ምሳሌ፡ ዮሐንስ አበበ"}
                        className="bg-[#050507] border border-[#c5a059]/25 hover:border-[#c5a059]/50 focus:border-[#c5a059] text-sm text-[#f5f5f7] px-4 py-3.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a059]/30 transition-all placeholder-[#f5f5f7]/30"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] font-serif">
                        {current.formEmail} *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="bg-[#050507] border border-[#c5a059]/25 hover:border-[#c5a059]/50 focus:border-[#c5a059] text-sm text-[#f5f5f7] px-4 py-3.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a059]/30 transition-all placeholder-[#f5f5f7]/30"
                      />
                    </div>
                  </div>

                  {/* Message Area */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] font-serif">
                      {current.formMessage} *
                    </label>
                    <textarea 
                      name="message" 
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder={lang === 'en' ? "Your message details..." : "የመልዕክትዎ ዝርዝር..."}
                      className="bg-[#050507] border border-[#c5a059]/25 hover:border-[#c5a059]/50 focus:border-[#c5a059] text-sm text-[#f5f5f7] px-4 py-3.5 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#c5a059]/30 transition-all placeholder-[#f5f5f7]/30 resize-none"
                    ></textarea>
                  </div>

                  {/* Form Submission Button with glowing state updates */}
                  <div className="flex justify-end pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="cta-button w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm tracking-[0.15em] text-xs uppercase disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-solid border-[#060608]/40 border-t-[#060608] animate-spin"></span>
                          {current.formSending}
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          {current.formBtn}
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </section>

      </main>

      {/* Footer & Closing layout */}
      <footer className="bg-[#030304] border-t border-[#c5a059]/10 pt-16 pb-12 relative overflow-hidden">
        
        {/* Repeating Accent Tilet line */}
        <div className="absolute top-0 left-0 right-0 h-[4px] tilet-pattern"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          {/* Logo */}
          <h3 className="text-2xl font-bold tracking-[0.2em] font-serif text-[#c5a059] mb-6">
            BEREKET
          </h3>

          {/* Nav quick lists on footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            <a href="#about" className="text-xs uppercase tracking-widest text-[#f5f5f7]/60 hover:text-[#c5a059] transition-all font-serif">
              {current.navAbout}
            </a>
            <a href="#projects" className="text-xs uppercase tracking-widest text-[#f5f5f7]/60 hover:text-[#c5a059] transition-all font-serif">
              {current.navProjects}
            </a>
            <a href="#contact" className="text-xs uppercase tracking-widest text-[#f5f5f7]/60 hover:text-[#c5a059] transition-all font-serif">
              {current.navContact}
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6 mb-10">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#c5a059]/25 flex items-center justify-center text-[#c5a059] hover:bg-[#c5a059]/10 hover:border-[#c5a059] hover:text-[#f5f5f7] transition-all duration-300 shadow-md"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#c5a059]/25 flex items-center justify-center text-[#c5a059] hover:bg-[#c5a059]/10 hover:border-[#c5a059] hover:text-[#f5f5f7] transition-all duration-300 shadow-md"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:bereket@gmail.com" 
              className="w-10 h-10 rounded-full border border-[#c5a059]/25 flex items-center justify-center text-[#c5a059] hover:bg-[#c5a059]/10 hover:border-[#c5a059] hover:text-[#f5f5f7] transition-all duration-300 shadow-md"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Decorative small visual separator */}
          <div className="w-16 h-[2px] bg-[#c5a059]/20 rounded-full mb-6"></div>

          {/* Copyright text */}
          <p className="text-center text-[10px] sm:text-xs text-[#f5f5f7]/40 tracking-wider">
            &copy; {new Date().getFullYear()} {current.footerCredits}
          </p>

        </div>
      </footer>
    </div>
  );
}
