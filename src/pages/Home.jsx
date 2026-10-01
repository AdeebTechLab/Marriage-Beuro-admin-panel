import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import BrowseProfilesSection from '../components/BrowseProfilesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import SuccessStories from '../components/SuccessStories'
import MembershipPlans from '../components/MembershipPlans'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import CreateProfileModal from '../components/CreateProfileModal'
import SignInModal from '../components/SignInModal'
import ViewProfileModal from '../components/ViewProfileModal'
import Toast from '../components/Toast'
import SectionDivider from '../components/SectionDivider'

export default function Home() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const [viewProfile, setViewProfile] = useState(null)
  
  const [shortlistedIds, setShortlistedIds] = useState([])
  const [expressedInterestIds, setExpressedInterestIds] = useState([])
  const [toast, setToast] = useState(null)
  const [heroFilters, setHeroFilters] = useState(null)

  const showToast = (message, type = 'check') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  const handleCreateProfile = () => {
    setIsCreateModalOpen(true)
  }

  const handleSignIn = () => {
    setIsSignInModalOpen(true)
  }

  const handleViewProfile = (profile) => {
    setViewProfile(profile)
  }

  const handleBrowseProfiles = () => {
    const el = document.querySelector('#browse-profiles')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendInterest = (profile) => {
    if (!expressedInterestIds.includes(profile.id)) {
      setExpressedInterestIds((prev) => [...prev, profile.id])
      showToast(`Express Interest sent to ${profile.name}!`, 'heart')
    } else {
      showToast(`Already sent express interest to ${profile.name}`, 'check')
    }
  }

  const handleToggleShortlist = (profile) => {
    if (shortlistedIds.includes(profile.id)) {
      setShortlistedIds((prev) => prev.filter((id) => id !== profile.id))
      showToast(`Removed ${profile.name} from your shortlist`, 'check')
    } else {
      setShortlistedIds((prev) => [...prev, profile.id])
      showToast(`Added ${profile.name} to your shortlist!`, 'star')
    }
  }

  const handleHeroSearch = (filters) => {
    setHeroFilters(filters)
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C1A1D] flex flex-col font-sans">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#D4AF37] focus:text-[#5C0612] font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Header Navigation */}
      <Navbar
        onCreateProfile={handleCreateProfile}
        onSignIn={handleSignIn}
        onBrowseProfiles={handleBrowseProfiles}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Hero Section with Banner & Welcome Headline */}
        <Hero
          onCreateProfile={handleCreateProfile}
          onBrowseProfiles={handleBrowseProfiles}
          onSearchFilter={handleHeroSearch}
        />

        <SectionDivider icon="rings" label="Sacred Matchmaking" />

        {/* Services & How It Works */}
        <HowItWorks
          onCreateProfile={handleCreateProfile}
          onBrowseProfiles={handleBrowseProfiles}
        />

        <SectionDivider icon="heart" label="Verified Matches" />

        {/* Browse Profiles Section */}
        <BrowseProfilesSection
          onViewProfile={handleViewProfile}
          onSignIn={handleSignIn}
          onCreateProfile={handleCreateProfile}
          onSendInterest={handleSendInterest}
          onShortlist={handleToggleShortlist}
          shortlistedIds={shortlistedIds}
          expressedInterestIds={expressedInterestIds}
          externalFilters={heroFilters}
        />

        <SectionDivider icon="floral" label="About Us & Values" />

        {/* Why Choose Us / About Us Features */}
        <WhyChooseUs onCreateProfile={handleCreateProfile} />

        <SectionDivider icon="rings" label="Wedding Celebrations" />

        {/* Testimonials & Success Stories */}
        <SuccessStories onCreateProfile={handleCreateProfile} />

        <SectionDivider icon="heart" label="Membership Packages" />

        {/* Pricing & Membership Tiers */}
        <MembershipPlans
          onCreateProfile={handleCreateProfile}
          onSignIn={handleSignIn}
        />

        <SectionDivider icon="floral" label="Questions & Answers" />

        {/* FAQ Accordion */}
        <FAQSection />

        <SectionDivider icon="rings" label="Get In Touch" />

        {/* Contact Details & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onCreateProfile={handleCreateProfile}
        onSignIn={handleSignIn}
        onBrowseProfiles={handleBrowseProfiles}
      />

      {/* Modals & Dialogs */}
      <CreateProfileModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onBrowseProfiles={handleBrowseProfiles}
      />

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
        onSignInSuccess={() => showToast('Signed in successfully! Welcome back.')}
      />

      <ViewProfileModal
        profile={viewProfile}
        isOpen={Boolean(viewProfile)}
        onClose={() => setViewProfile(null)}
        onSendInterest={handleSendInterest}
        onShortlist={handleToggleShortlist}
        isShortlisted={viewProfile ? shortlistedIds.includes(viewProfile.id) : false}
        isInterestSent={viewProfile ? expressedInterestIds.includes(viewProfile.id) : false}
        onRequireSignIn={() => {
          setViewProfile(null)
          setIsSignInModalOpen(true)
        }}
      />

      {/* Toast Feedback */}
      <Toast toast={toast} />
    </div>
  )
}
