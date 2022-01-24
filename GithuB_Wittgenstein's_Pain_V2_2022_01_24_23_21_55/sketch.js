//Declare vars
let source_text = `Than I to Hercules: within a month:
Ere yet the salt of most unrighteous tears
Had left the flushing in her galled eyes,
She married. O, most wicked speed, to post
With such dexterity to incestuous sheets!
It is not nor it cannot come to good:
But break, my heart; for I must hold my tongue. My father’s brother, but no more like my father
Than I to Hercules. Within a month,
Ere yet the salt of most unrighteous tears
Had left the flushing in her gallèd eyes, 160 She married. O, most wicked speed, to post
With such dexterity to incestuous sheets!
It is not, nor it cannot come to good.
But break, my heart, for I must hold my tongue.
`;
let search_word = 'I ';
let replace_word = "Kanye ";
let altered_text;

function setup() {
  createCanvas(400, 400);
  //replaces words defined by search & replaced
  altered_text = source_text.replaceAll(search_word, replace_word);
}

function draw() {
  //Draw text
  background(255);
  textAlign(CENTER);
  //shoutout to barbara kruger
  textFont("Futura");
  textSize(17);
  
  let show_text;
  //changes text color to red when mouse is pressed to accentuate change
  if(mouseIsPressed){
    stroke('RED');
    show_text = altered_text;
  }
  else{
    //returns text to black when not clicking
    show_text = source_text;
    stroke('BLACK');
  }
  
  text(show_text, 10, 10, width * 0.9);
}