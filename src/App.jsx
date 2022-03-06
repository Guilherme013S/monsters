import './App.css'
import { useState, useEffect } from 'react'
import CardList from './components/card-list/cart-list'
import SearchBox from './components/search-box/search-box'

const App = () => {
  const [searchFild, setSearchFild] = useState('')
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) => setMonsters(users))
    )
  }, [])

  const onSearchChange = ({ target }) => {
    const valorBarraDePesquisa = target.value.toLocaleLowerCase()
    setSearchFild(valorBarraDePesquisa)
  }

  const filterMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchFild)
  })

  return (
    <div className='App'>
      <h1 className='title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        handleChange={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filterMonster} />
    </div>
  )
}

export default App

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchFild: '',
//     }
//   }

//   //equivale ao use Effect
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
//       response.json().then((users) =>
//         this.setState(() => {
//           return { monsters: users }
//         })
//       )
//     )
//   }

//   onSearchChange = ({ target }) => {
//     //pegar o valor do campo
//     const searchFild = target.value.toLocaleLowerCase()
//     this.setState({ searchFild })
//   }

//   render() {
//     const { monsters, searchFild } = this.state
//     const { onSearchChange } = this
//     const filterMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchFild)
//     })

//     return (
//       <div className='App'>
//         <h1 className='title'>Monsters Rolodex</h1>
//         <SearchBox
//           className='monsters-search-box'
//           handleChange={onSearchChange}
//           placeholder='search monsters'
//         />
//         <CardList monsters={filterMonster} />
//       </div>
//     )
//   }
// }
