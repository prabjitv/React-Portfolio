import React from 'react';

import Card from '../components/Card'
import swaddle from "../assets/images/Banner.png";
import cashMap from "../assets/images/CashMap.png";
import foodPairing from "../assets/images/cocktails-n-meals-combo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Swaddle',
          subTitle: 'Learn Your Child\'s Habits',
          imgSrc: swaddle,
          link: 'http://www.Swaddle.care',
          selected: false
        },
        {
          id: 1,
          title: 'Cash Map',
          subTitle: 'Graph Your Money',
          imgSrc: cashMap,
          link: 'https://secure-river-88188.herokuapp.com/',
          selected: false
        },
        {
          id: 2,
          title: 'Recipe Search',
          subTitle: 'Pair Up Food and Drinks',
          imgSrc: foodPairing,
          link: 'https://lvarnum.github.io/Recipe-Search/',
          selected: false
        },
      ]
    }
  }

  handleCardClick = (id, card) => {
    
    let items = [...this.state.items]
    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    })

    this.setState({
      items
    })
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
  })
  }



  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>    )
  }
}

export default Carousel;