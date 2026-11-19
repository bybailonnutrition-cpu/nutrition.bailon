import { FormEvent, useState } from 'react';
import { Award, ArrowDown, ArrowRight, BookOpen, Check, ChevronDown, Clock, Heart, Menu, X } from 'lucide-react';

const journey = [
  ['01', 'Share Your Story', 'We start with a consultation to understand your health circumstances & goals. You will need to fill out a health and lifestyle questionnaire prior to your initial consultation.'],
  ['02', 'Receive Your Plan', 'A fully personalised nutrition & lifestyle plan designed around your body, lifestyle, and preferences.'],
  ['03', 'Ongoing Support', 'Follow up appointments scheduled as needed; available to answer questions via email in between appointments.'],
];

const commonQuestions = [
  ['Do I need a referral to book?', 'No referral needed — get in touch directly to arrange your consultation by emailing <a href="mailto:bybailonnutrition@gmail.com">bybailonnutrition@gmail.com</a>.'],
  ['What happens during an initial consultation?', 'We will explore your health history, current concerns, goals, lifestyle, and the support that would be most helpful for you.'],
  ['Do you offer online consultations?', 'Yes, consultations can be held online so you can receive support wherever you are.'],
  ['How many sessions will I need?', 'This varies for everyone. Some clients benefit from a single consultation, while others prefer ongoing support. We\u2019ll discuss what makes sense for you.'],
  ['Can you help with specific conditions?', 'I work with a range of conditions and situations. By getting in touch we can discuss whether your condition is something I can help with and if so, an initial consultation can be booked in.'],
  ['Are there any client discounts I can benefit from?', 'Yes! You will receive 10% off all products from Amrita Nutrition, which offer a wide range of premium nutritional supplements.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="By Bailon home">
          <img className="brand-mark" src="/by-bailon-logo.svg" alt="" />
          <span>By Bailon</span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a className="active" href="#top" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span />By Bailon</p>
            <h1>Holistic Nutrition<br />for <span className="accent">Modern Living</span></h1>
            <p className="hero-intro">Personalised nutrition &amp; lifestyle guidance. Together, we’ll look at your health history, goals &amp; lifestyle, and create a plan that works for your life &amp; unique circumstances.</p>
            <a className="button button-dark" href="#contact">Book a Consultation <ArrowRight size={18} /></a>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={16} /></a>
        </section>

        <section id="about" className="about section-pad">
          <div className="section-label">About me</div>
          <div className="about-story-heading"><h2>My Story &amp;<br /><span className="accent">Philosophy</span></h2></div>
          <div className="about-story-layout">
            <div className="about-story-copy">
              <p>Hi, I'm Sam — I'm so glad you're here. My journey into holistic nutrition started long before any formal training, rooted in a genuine love of cooking and baking from a young age. Over time, that passion grew into a deeper curiosity about how food, lifestyle, and mindset shape the way we feel — both physically and mentally.</p>
              <p>For me, health isn't about rigid rules or simply &quot;eating clean&quot; — it's about finding balance in the inevitable chaos of life no matter what you're going through. Having gone through my own challenges with food and health in the past, I understand how important it is to move away from restriction, towards a more balanced approach to eating and living.</p>
              <p>Having lived in London for over a decade, I understand first-hand how challenging it can be to prioritise your health alongside a busy career, social life, and the pace of city living. But I absolutely believe that it's possible to enjoy life's pleasures without compromising on your health. My approach is about celebrating that, while helping you build habits that leave you feeling energised, balanced, and well.</p>
            </div>
            <div className="profile-photo"><img src="/By_Bailon_Photo.jpg" alt="Sam Bailon, holistic nutritionist" /></div>
          </div>
        </section>

        <section className="credentials section-pad" aria-labelledby="credentials-title">
          <h2 id="credentials-title">Credentials &amp; Qualifications</h2>
          <div className="credential-list">
            <article><Award size={41} strokeWidth={1.5} /><h3>Diploma in Holistic Nutrition</h3><p>From the College of Living Nutrition</p></article>
            <article><BookOpen size={41} strokeWidth={1.5} /><h3>Registered</h3><p>With the Federation of Nutrition Therapy Practitioners (FNTP)</p></article>
            <article><Heart size={41} strokeWidth={1.5} /><h3>Insured</h3><p>Fully insured by Balens Insurance</p></article>
          </div>
        </section>

        <section id="services" className="services section-pad">
          <div className="services-header"><div className="section-label"><span />Services</div><p>If you'd like to book an appointment, please email <a href="mailto:bybailonnutrition@gmail.com">bybailonnutrition@gmail.com</a></p></div>
          <div className="appointment-list">
            <article className="appointment-card"><div className="appointment-top"><h2>Initial Consultation</h2><strong>£80</strong></div><p>A comprehensive session exploring your health history, goals, and lifestyle to create your personalised plan.</p><div className="appointment-duration"><Clock size={25} />60 minutes</div></article>
            <article className="appointment-card"><div className="appointment-top"><h2>Follow-Up Session</h2><strong>£60</strong></div><p>Review your progress, refine your plan, and address any questions.</p><div className="appointment-duration"><Clock size={25} />45 minutes</div></article>
          </div>
        </section>

        <section id="journey" className="journey">
          <div className="journey-intro section-pad"><div className="section-label">The journey</div><h2>What to <span className="accent">expect.</span></h2></div>
          <div className="journey-steps section-pad">
            {journey.map(([number, title, description]) => <div className="journey-step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{description}</p></div>)}
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="contact-heading"><div className="section-label"><span />Get in touch</div></div>
          <div className="contact-form-wrap">
            {submitted ? <div className="success-message"><span className="success-icon"><Check size={22} /></span><h3>Thank you for reaching out.</h3><p>Your note is on its way. I will be in touch soon to arrange your complimentary connection call.</p></div> : <form onSubmit={handleSubmit} className="contact-form"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows={5} placeholder="How can I help you?" /></label><button className="button button-dark" type="submit">Send enquiry <ArrowRight size={18} /></button></form>}
          </div>
        </section>

        <section className="common-questions section-pad" aria-labelledby="common-questions-title">
          <h2 id="common-questions-title">Common questions</h2>
          <div className="question-list">
            {commonQuestions.map(([question, answer], index) => {
              const isOpen = openQuestion === index;
              return <article className={isOpen ? 'question is-open' : 'question'} key={question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? null : index)}><span>{question}</span><ChevronDown size={22} /></button>{isOpen && <p dangerouslySetInnerHTML={{ __html: answer }} />}</article>;
            })}
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><a className="brand brand-light" href="#top"><img className="brand-mark" src="/by-bailon-logo.svg" alt="" /><span>By Bailon</span></a><p>Holistic Nutrition<br />for Modern Living</p></div><div className="footer-links"><span>Navigate</span><a href="#top">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></div><div className="footer-connect"><span>Contact</span><a href="mailto:bybailonnutrition@gmail.com">bybailonnutrition@gmail.com</a></div><div className="footer-bottom"><span>© 2026 By Bailon</span><span>Holistic Nutrition for Modern Living</span></div><div className="footer-promo">10% off Amrita Nutrition for By Bailon clients</div></footer>
    </div>
  );
}

export default App;
