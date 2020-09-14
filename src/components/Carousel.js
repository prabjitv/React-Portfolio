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
          subTitle: 'Learn Your Child\'s Habits! For this project, the team wanted to help new parents tracks when their baby slept and fed. Additionally, parents can grant a caregiver access to their child\'s data to view and add entries when taking care of each child',
          tech: "HTML, CSS, JavaScript",
          imgSrc: swaddle,
          link: 'http://www.Swaddle.care',
          github: "https://github.com/prabjitv/project-kapf",
          selected: false
        },
        {
          id: 1,
          title: 'Cash Map',
          subTitle: 'Graph Your Money! The three of us needed a way to keep track of our incoming and outgoing expenses. In this application we let users make an account and enter expense information and chart it for users to see their spending habits.',
          tech: "HTML, CSS, JavaScript",
          imgSrc: cashMap,
          link: 'https://secure-river-88188.herokuapp.com/',
          github: "https://github.com/prabjitv/Tracking-Expenses-Project",
          selected: false
        },
        {
          id: 2,
          title: 'Recipe Search',
          subTitle: 'Pair Up Food and Drinks! In my very first project, we used HTML, CSS, and JavaScript to let users search for recipes to cocktails and meals. Users are able to save recipes they like to refer to later while they\'re cooking',
          tech: "HTML, CSS, JavaScript",
          imgSrc: foodPairing,
          link: 'https://lvarnum.github.io/Recipe-Search/',
          github: "https://github.com/prabjitv/Recipe-Search",
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