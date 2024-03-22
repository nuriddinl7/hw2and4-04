
import { useState } from 'react';
import './App.css';
// import Card from './components/Card';
// import Counter from './components/counter';
import Header from './components/Header'
import data from './data/data.json'
import Modal from './Modal';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data)
  const [color, setColor] = useState('')

  function onChange(e) {
    setSearchTerm(e.target.value);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  }

  return (
    <div className="App">
      <Header />
      <Modal
      title={'weather'}
      opis={'beatifull very good'}
      price={100}
      img={'https://cs8.pikabu.ru/post_img/big/2016/02/04/7/145458292112119207.jpg'}
      />

      {/* <input onChange={onChange} type="text" />

      <div className='container'>
        {
          filteredData.map((item) =>
            <Card
            
              key={item.id}
              price={item.price}
              oldPrice={item.oldPrice}
              description={item.description}
              title={item.title}
              img={item.image}
            />)
        } */}
      </div>
    
  );
}

export default App;