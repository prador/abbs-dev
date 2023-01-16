import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import styles from '../assets/styles/search.module.css'

const ResultBlock = ({ results,type }) => {
  console.log(type)
  console.log(results.filter((obj) => console.log(obj.type)))
  return <>
  {results.filter((obj) => obj.type === type).length ? <div className={styles.search_block}>
       <h4 className={styles.search_block_title}>{type}</h4>
       {results.map(({ type, id, title , index}) => (
            <li key={index} className={styles.result} key={id}>
              <Link legacyBehavior href={`/${type}/[id]`} as={`/${type}/${id}`}>
                <a>{title}</a>
              </Link>
            </li>            
          ))}
      </div> : null}
    </>
  }

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
  let resultTypes = ["blog","pages","documents","faculty","news","events"]

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
        {resultTypes.map((type) => <ResultBlock results={results} type={type}/> )}
        </ul>
        </>
        
      ) }
      <div className='nav-apply-wrapper'>        
        <a href="https://application.abbs.edu.in/bschool/" className="nav-apply btn btn-blue">Apply Now</a>
      </div>
    </div>
  )
}