import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const quotes = [
  {
    content: "Frankly, my dear, I don't give a damn.",
    author: "Gone With the Wind, 1939"
  },
  {
    content: "I'm going to make him an offer he can't refuse.",
    author: "The Godfather, 1972"
  },
  {
    content:
      "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    author: "On the Waterfront, 1954"
  },
  {
    content: "Toto, I've got a feeling we're not in Kansas anymore.",
    author: "The Wizard of Oz, 1939"
  },
  { content: "Here's looking at you, kid.", author: "Casablanca, 1942" },
  { content: "Go ahead, make my day.", author: "Sudden Impact, 1983" },
  {
    content: "All right, Mr. DeMille, I'm ready for my close-up.",
    author: "Sunset Blvd., 1950"
  },
  { content: "May the Force be with you.", author: "Star Wars, 1977" },
  {
    content: "Fasten your seatbelts. It's going to be a bumpy night.",
    author: "All About Eve, 1950"
  },
  { content: "You talking to me?", author: "Taxi Driver, 1976" },
  {
    content: "What we've got here is failure to communicate.",
    author: "Cool Hand Luke, 1967"
  },
  {
    content: "I love the smell of napalm in the morning.",
    author: "Apocalypse Now, 1979"
  },
  {
    content: "Love means never having to say you're sorry.",
    author: "Love Story, 1970"
  },
  {
    content: "The stuff that dreams are made of.",
    author: "The Maltese Falcon, 1941"
  },
  { content: "E.T. phone home.", author: "E.T. The Extra-Terrestrial, 1982" },
  {
    content: "They call me Mister Tibbs!",
    author: "In the Heat of the Night, 1967"
  },
  { content: "Rosebud.", author: "Citizen Kane, 1941" },
  { content: "Made it, Ma! Top of the world!", author: "White Heat, 1949" },
  {
    content: "I'm as mad as hell, and I'm not going to take this anymore!",
    author: "Network, 1976"
  },
  {
    content: "Louis, I think this is the beginning of a beautiful friendship.",
    author: "Casablanca, 1942"
  },
  {
    content:
      "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    author: "The Silence of the Lambs, 1991"
  },
  { content: "Bond. James Bond.", author: "Dr. No, 1962" },
  { content: "There's no place like home.", author: "The Wizard of Oz, 1939" },
  {
    content: "I am big! It's the pictures that got small.",
    author: "Sunset Blvd., 1950"
  },
  { content: "Show me the money!", author: "Jerry Maguire, 1996" },
  {
    content: "Why don't you come up sometime and see me?",
    author: "She Done Him Wrong, 1933"
  },
  {
    content: "I'm walking here! I'm walking here!",
    author: "Midnight Cowboy, 1969"
  },
  {
    content: "Play it, Sam. Play 'As Time Goes By.'",
    author: "Casablanca, 1942"
  },
  { content: "You can't handle the truth!", author: "A Few Good Men, 1992" },
  { content: "I want to be alone.", author: "Grand Hotel, 1932" },
  {
    content: "After all, tomorrow is another day!",
    author: "Gone With the Wind, 1939"
  },
  { content: "Round up the usual suspects.", author: "Casablanca, 1942" },
  {
    content: "I'll have what she's having.",
    author: "When Harry Met Sally, 1989"
  },
  {
    content:
      "You know how to whistle, don't you, Steve? You just put your lips together and blow.",
    author: "To Have and Have Not, 1944"
  },
  { content: "You're gonna need a bigger boat.", author: "Jaws, 1975" },
  {
    content:
      "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
    author: "The Treasure of the Sierra Madre, 1948"
  },
  { content: "I'll be back.", author: "The Terminator, 1984" },
  {
    content:
      "Today, I consider myself the luckiest man on the face of the earth.",
    author: "The Pride of the Yankees, 1942"
  },
  {
    content: "If you build it, he will come.",
    author: "Field of Dreams, 1989"
  },
  {
    content:
      "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
    author: "Forrest Gump, 1994"
  },
  { content: "We rob banks.", author: "Bonnie and Clyde, 1967" },
  { content: "Plastics.", author: "The Graduate, 1967" },
  { content: "We'll always have Paris.", author: "Casablanca, 1942" },
  { content: "I see dead people.", author: "The Sixth Sense, 1999" },
  { content: "Stella! Hey, Stella!", author: "A Streetcar Named Desire, 1951" },
  {
    content: "Oh, Jerry, don't let's ask for the moon. We have the stars.",
    author: "Now, Voyager, 1942"
  },
  { content: "Shane. Shane. Come back!", author: "Shane, 1953" },
  { content: "Well, nobody's perfect.", author: "Some Like It Hot, 1959" },
  { content: "It's alive! It's alive!", author: "Frankenstein, 1931" },
  { content: "Houston, we have a problem.", author: "Apollo 13, 1995" },
  {
    content:
      "You've got to ask yourself one question: Do I feel lucky? Well, do ya, punk?",
    author: "Dirty Harry, 1971"
  },
  { content: "You had me at ‘hello.", author: "Jerry Maguire, 1996" },
  {
    content:
      "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
    author: "Animal Crackers, 1930"
  },
  {
    content: "There's no crying in baseball!",
    author: "A League of Their Own, 1992"
  },
  { content: "La-dee-da, la-dee-da.", author: "Annie Hall, 1977" },
  { content: "A boy's best friend is his mother.", author: "Psycho, 1960" },
  {
    content: "Greed, for lack of a better word, is good.",
    author: "Wall Street, 1987"
  },
  {
    content: "Keep your friends close, but your enemies closer.",
    author: "The Godfather II, 1974"
  },
  {
    content: "As God is my witness, I'll never be hungry again.",
    author: "Gone With the Wind, 1939"
  },
  {
    content: "Well, here's another nice mess you've gotten me into!",
    author: "Sons of the Desert, 1933"
  },
  { content: "Say hello to my little friend!", author: "Scarface, 1983" },
  { content: "What a dump.", author: "Beyond the Forest, 1949" },
  {
    content: "Mrs. Robinson, you're trying to seduce me. Aren't you?",
    author: "The Graduate, 1967"
  },
  {
    content: "Gentlemen, you can't fight in here! This is the War Room!",
    author: "Dr. Strangelove, 1964"
  },
  {
    content: "Elementary, my dear Watson.",
    author: "The Adventures of Sherlock Holmes, 1929"
  },
  {
    content: "Get your stinking paws off me, you damned dirty ape.",
    author: "Planet of the Apes, 1968"
  },
  {
    content:
      "Of all the gin joints in all the towns in all the world, she walks into mine.",
    author: "Casablanca, 1942"
  },
  { content: "Here's Johnny!", author: "The Shining, 1980" },
  { content: "They're here!", author: "Poltergeist, 1982" },
  { content: "Is it safe?", author: "Marathon Man, 1976" },
  {
    content: "Wait a minute, wait a minute. You ain't heard nothin' yet!",
    author: "The Jazz Singer, 1927"
  },
  { content: "No wire hangers, ever!", author: "Mommie Dearest, 1981" },
  {
    content: "Mother of mercy, is this the end of Rico?",
    author: "Little Caesar, 1930"
  },
  { content: "Forget it, Jake, it's Chinatown.", author: "Chinatown, 1974" },
  {
    content: "I have always depended on the kindness of strangers.",
    author: "A Streetcar Named Desire, 1951"
  },
  {
    content: "Hasta la vista, baby.",
    author: "Terminator 2 Judgment Day, 1991​​​​​"
  },
  { content: "Soylent Green is people!", author: "Soylent Green, 1973" },
  {
    content: "Open the pod bay doors, HAL.",
    author: "2001 A Space Odyssey, 1968"
  },
  { content: "Yo, Adrian!", author: "Rocky, 1976" },
  { content: "Hello, gorgeous.", author: "Funny Girl, 1968" },
  { content: "Toga! Toga!", author: "National Lampoon's Animal House, 1978" },
  {
    content: "Listen to them. Children of the night. What music they make.",
    author: "Dracula, 1931"
  },
  {
    content: "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",
    author: "King Kong, 1933"
  },
  { content: "My precious.", author: "The Lord of the Rings Two Towers, 2002" },
  { content: "Attica! Attica!", author: "Dog Day Afternoon, 1975" },
  {
    content:
      "Sawyer, you're going out a youngster, but you've got to come back a star!",
    author: "42nd Street, 1933"
  },
  {
    content:
      "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!",
    author: "On Golden Pond, 1981"
  },
  {
    content:
      "Tell 'em to go out there with all they got and win just one for the Gipper.",
    author: "Knute Rockne All American, 1940"
  },
  { content: "A martini. Shaken, not stirred.", author: "Goldfinger, 1964" },
  { content: "Who's on first.", author: "The Naughty Nineties, 1945" },
  {
    content:
      "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!",
    author: "Caddyshack, 1980"
  },
  {
    content: "Life is a banquet, and most poor suckers are starving to death!",
    author: "Auntie Mame, 1958"
  },
  { content: "I feel the need - the need for speed!", author: "Top Gun, 1986" },
  {
    content: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    author: "Dead Poets Society, 1989"
  },
  { content: "Snap out of it!", author: "Moonstruck, 1987" },
  {
    content:
      "My mother thanks you. My father thanks you. My sister thanks you. And I thank you.",
    author: "Yankee Doodle Dandy, 1942"
  },
  { content: "Nobody puts Baby in a corner.", author: "Dirty Dancing, 1987" },
  {
    content: "I'll get you, my pretty, and your little dog, too!",
    author: "The Wizard of Oz, 1939"
  },
  { content: "I'm king of the world!", author: "Titanic, 1997" }
];

class Quoter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      author: ""
    };

    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    let number = Math.floor(Math.random() * 14);

    let quote = quotes[number].content;

    this.setState({ content: quote });

    let author = quotes[number].author;
    this.setState({ author: author });

    // $(".quote-text").addClass('button-anim');
    // $(".author-text").addClass('button-anim');
    // setTimeout(function() {
    //   $(".quote-text").removeClass('button-anim');
    //   $(".author-text").removeClass('button-anim');
    // }, 1500);
  }

  componentDidMount() {
    this.newQuote();
  }

  render() {
    return (
      <div id="quote-box" className="center-div">
        <Text quote={this.state.content} author={this.state.author} />
        <Buttons
          handleNewQuote={this.newQuote}
          quote={this.state.content}
          author={this.state.author}
        />
      </div>
    );
  }
}

class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 id="text" class="quote-text button-anim">
          "{this.props.quote}"
        </h1>
        <h2 id="author" class="author-text button-anim">
          - {this.props.author}
        </h2>
      </div>
    );
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="buttons">
        <button
          type="button"
          id="new-quote"
          className="btn btn-success"
          onClick={this.props.handleNewQuote}
        >
          New Quote
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Quoter />, document.getElementById("content"));
