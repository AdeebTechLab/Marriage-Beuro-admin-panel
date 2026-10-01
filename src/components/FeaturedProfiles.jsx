import { useMemo } from 'react'
import ProfileCard from './ProfileCard'
import SectionTitle from './SectionTitle'
import { brideProfiles, groomProfiles } from '../data/profiles'

const defaultFilters = {
  lookingFor: 'Any',
  age: 'Any',
  city: 'Any',
  profession: 'Any',
  religion: 'Any',
}

function matchesFilters(profile, filters) {
  if (filters.lookingFor !== 'Any' && profile.lookingFor !== filters.lookingFor) return false
  if (filters.city !== 'Any' && profile.city !== filters.city) return false
  if (filters.profession !== 'Any' && profile.profession !== filters.profession) return false
  if (filters.religion !== 'Any' && profile.religion !== filters.religion) return false

  if (filters.age !== 'Any') {
    const [min, max] = filters.age === '34+' ? [34, 60] : filters.age.split('-').map(Number)
    if (profile.age < min || profile.age > max) return false
  }

  return true
}

export default function FeaturedProfiles({ filters = defaultFilters }) {
  const filteredBrideProfiles = useMemo(
    () => brideProfiles.filter((profile) => matchesFilters(profile, filters)),
    [filters],
  )

  const filteredGroomProfiles = useMemo(
    () => groomProfiles.filter((profile) => matchesFilters(profile, filters)),
    [filters],
  )

  return (
    <section id="matches" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Featured Matches"
          title="Profiles carefully selected for compatibility and values"
          description="Every profile is screened for authenticity, family expectations, and long-term relationship potential across Pakistan."
        />

        <div className="mb-16 space-y-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h3 className="text-3xl font-bold text-slate-900">Featured Brides</h3>
            <a href="#" className="text-sm font-semibold text-violet-700 hover:text-violet-800">
              View all profiles →
            </a>
          </div>

          {filteredBrideProfiles.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-4">
              {filteredBrideProfiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} variant="bride" />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-violet-200 bg-violet-50 p-8 text-center text-slate-600">
              No bride profiles match your current search filters.
            </div>
          )}
        </div>

        <div className="space-y-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h3 className="text-3xl font-bold text-slate-900">Featured Grooms</h3>
            <a href="#" className="text-sm font-semibold text-violet-700 hover:text-violet-800">
              View all profiles →
            </a>
          </div>

          {filteredGroomProfiles.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-4">
              {filteredGroomProfiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} variant="groom" />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-violet-200 bg-violet-50 p-8 text-center text-slate-600">
              No groom profiles match your current search filters.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
