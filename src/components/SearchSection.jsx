import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'

const filterOptions = {
  lookingFor: ['Any', 'Bride', 'Groom'],
  age: ['Any', '22-25', '26-29', '30-33', '34+'],
  city: ['Any', 'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Multan', 'Peshawar', 'Quetta'],
  profession: ['Any', 'Doctor', 'Engineer', 'Software Engineer', 'Banker', 'Businessman', 'Teacher', 'Designer'],
  religion: ['Any', 'Islam', 'Christian', 'Hindu', 'Sikh'],
}

export default function SearchSection({
  filters = {
    lookingFor: 'Any',
    age: 'Any',
    city: 'Any',
    profession: 'Any',
    religion: 'Any',
  },
  onFilterChange = () => {},
}) {
  const handleChange = (event) => {
    const { name, value } = event.target
    onFilterChange((previous) => ({ ...previous, [name]: value }))
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="px-4 pb-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-pink-50 p-6 shadow-[0_25px_80px_-35px_rgba(109,40,217,0.35)] md:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">Smart Search</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">Find your ideal match</h3>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 self-start rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-600"
          >
            <FaSearch className="text-xs" />
            Search Now
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {Object.entries(filterOptions).map(([key, options]) => (
            <label key={key} className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {key === 'lookingFor' ? 'Looking for' : key === 'age' ? 'Age' : key === 'city' ? 'City' : key === 'profession' ? 'Profession' : 'Religion'}
              </span>
              <select
                name={key}
                value={filters[key]}
                onChange={handleChange}
                className="mt-2 w-full bg-transparent text-base font-medium text-slate-800 outline-none"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
