import { useState, useEffect } from 'react'
import { Team } from '../types'
import { data } from '../data/Teams.json'

export function useTeams(url: string) {
  const [teams, setTeams] = useState<Array<Team>>([])

  useEffect(() => {
    fetch(`${url}/teams`, {
      headers: {
        'X-RapidAPI-Key': 'bd05e0d471msh7ec8334312fa389p1bf0f6jsn1be1d32fe181',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
    })
      .then((response) => {
        const { status, ok } = response
        if (ok && status === 200) {
          return response.json()
        } else {
          return new Promise(function (resolve) {
            // sobrecarga de la API, cuando response con un error
            // y siga mostrando datos
            return resolve({ data: data })
          })
        }
      })
      .then((data) => setTeams(data.data))
      .catch((error: Error) => {
        console.log(new Error(error.message))
      })
  }, [url])

  return teams
}
