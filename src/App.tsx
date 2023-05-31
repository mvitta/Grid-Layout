import { useTeams } from './customhooks/useTeasm'
import Card from './components/Card'
import styles from './App.module.css'

function App() {
  const url = 'https://free-nba.p.rapidapi.com'
  let teams = useTeams(url)
  const min_length = 10
  const max_length = 20

  if (teams.length >= min_length) {
    teams = teams.filter(
      (team) => team.id >= min_length && team.id <= max_length
    )
  }

  return (
    <>
      <h1>Targetas de Equipos de la NBA</h1>
      <div className={styles.container}>
        {teams.map((team) => {
          return <Card team={team} key={crypto.randomUUID()} />
        })}
      </div>
    </>
  )
}

export default App
