import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import styles from '../assets/styles/search.module.css'

export default function Search() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div
      className={styles.container}
      ref={searchRef}
    >
      <input
        className={styles.search}
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search '
        type='text'
        value={query}
      />
      { active && results.length > 0 && (
        <>
        <ul className={styles.results}>
          <li><h2>Search Results</h2></li>
          {results.map(({ type, id, title }) => (
            <li className={styles.result} key={id}>
              <Link href={`/${type}/post/[id]`} as={`/${type}/post/${id}`}>
                <a>{type} - {title}</a>
              </Link>
            </li>
          ))}
        </ul>
        </>
        
      ) }
    </div>
  )
}