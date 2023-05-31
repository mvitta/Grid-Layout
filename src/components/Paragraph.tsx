import { useState, useId } from 'react'

export function Paragraph() {
  const idSearch = useId()
  const [value, setValue] = useState<string>('')
  const [paragraph, setParagraph] =
    useState(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem,
    ipsam sapiente officiis, at vero consequuntur ab voluptates obcaecati
    autem nobis optio magni natus non amet reiciendis culpa quos possimus.
    Ipsum.`)

  function handlerChance(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    setParagraph(e.target.value)
  }
  return (
    <>
      <p>{paragraph}</p>
      <div>
        <input
          onChange={handlerChance}
          type='search'
          name={idSearch}
          id={idSearch}
          placeholder='typing'
          value={value}
        />
      </div>
    </>
  )
}
