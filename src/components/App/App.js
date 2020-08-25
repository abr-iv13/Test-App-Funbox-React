import React, {Component} from 'react';
import Block from '../Block'
import Header from '../Header'

import './App.css';

class  App  extends Component {

  state = {
    Data: [
      {
        id: 1,
        beforeTitle: 'Сказочное заморское яство',
        title: 'Нямушка',
        afterTitle: 'c фуа-гра',
        portions: '10',
        present:'мышь в подарок',
        weight: '0,5',
        unit: 'кг',
        footer: 'Филе из цыплят с трюфелями в бульоне.',
        active: false,
        disabled: false
      },
      {
        id: 2,
        beforeTitle: 'Сказочное заморское яство',
        title: 'Нямушка',
        afterTitle: 'c рыбой',
        portions: '40',
        present:'2 мыши в подарок',
        weight: '2',
        unit: 'кг',
        footer: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        active: true,
        disabled: false,
      },
      {
        id:3,
        beforeTitle: 'Сказочное заморское яство',
        title: 'Нямушка',
        afterTitle: 'c курой',
        portions: '100',
        present:' 5 мышей в подарок',
        weight: '5',
        unit: 'кг',
        footer: 'Филе из цыплят с трюфелями в бульоне.',
        active: false,
        disabled: true,
      }
    ]
  };

  onActiveClick = (id) => {
    this.setState(({ Data }) => {
      // Поиск выбранного блока  по id
      const idx = Data.findIndex(( el ) => el.id === id);
      const oldItem = Data[idx]
      const newItem = {...oldItem,
         active: !oldItem.active };

         const newArray = [
           ...Data.slice(0, idx),
           newItem,
           ...Data.slice(idx + 1)
         ];
         return {
           Data: newArray
         };
    });
  };

    render() {
      const { Data } = this.state;

      const Cat = Data.map((item) => {
          return  (
            <Block 
            {...item}
            key={item.id}
            onActiveClick = { this.onActiveClick }/>
          );
        }
      );
      return (
        <div className="App ">
          <Header/>
          <div className="container"> 
            { Cat }
          </div>
        </div>
      );
    };
  };
  
export default App;
