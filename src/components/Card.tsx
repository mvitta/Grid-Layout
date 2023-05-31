import { useId } from 'react'
import { Teams } from '../types'
import styles from './Card.module.css'
import { Id } from './Id'
import { Paragraph } from './Paragraph'

const Card = ({ team }: Teams) => {
  const idCard = useId()
  const { abbreviation, city, conference, division, full_name, id, name } = team

  return (
    <div className={styles.card} id={idCard}>
      <h2>{full_name}</h2>
      <Paragraph />
      <div>{name}</div>
      <div>{abbreviation}</div>
      <div>{city}</div>
      <div>{conference}</div>
      <div>{division}</div>
      <Id id={id} />
    </div>
  )
}

export default Card
