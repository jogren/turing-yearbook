const people = {
  staff: [
    {id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'},
    {id: 2, name: 'Amy', quote: 'I believe in you, cuties!', superlative: 'Most Likely to Be an Actual Superhero', photo: './amy.jpg'},
    {id: 3, name: 'Khalid', quote: 'Don\'t put the world on your shoulders.', superlative: 'Most Likely to Save the Planet from Alien Invasion', photo: './khalid.png'},
    {id: 4, name: 'Travis', quote: 'You do you.', superlative: 'Most Likely to Win a Grammy', photo: './travis.jpg'},
    {id: 5, name: 'Leta', quote: 'It\'s okay to be kind of a mess.', superlative: 'Most Likely to Go to the Moon', photo: './leta.jpg'},
    {id: 6, name: 'Christie', quote: 'Every journey begins with a single step. So take the damn step!', superlative: 'Most Likely to Be President', photo: './christie.jpg'},
    {id: 7, name: 'Brittany', quote: 'It was Robbie.', superlative: 'Most Likely to Get Away with Murder', photo: './brittany.jpg'},
    {id: 8, name: 'Robbie', quote: 'Cool.', superlative: 'Most Likely to Be Accused of Murder', photo: './robbie.jpg'},
    {id: 9, name: 'Will', quote: 'Stop worrying and just do the thing.', superlative: 'Most Likely to Invent Cold Fusion', photo: './will.jpg'},
    {id: 10, name: 'Pam', quote: 'Shit!', superlative: 'Most Likely to Win a Gold Medal', photo: './pam.jpg'},
    {id: 11, name: 'David', quote: 'I love git.', superlative: 'Most Likely to Be Eaten by a Shark', photo: './david.JPG'},
    {id: 12, name: 'Louisa', quote: 'YOLO', superlative: 'Most Likely to Win a Knife Fight', photo: './louisa.jpg'},
    {id: 13, name: 'Jeff', quote: '::thoughtful nonsense::', superlative: 'Most Likely to Tell a Dad Joke', photo: 'https://i.ytimg.com/vi/DhqzMc_LXgQ/maxresdefault.jpg'},
  ],
  students: [
    { id: 21, name: 'Abigail', quote: 'In the end, it\'s not the years in your life that count. It\'s the life in your years.', superlative: '', photo: 'https://placekitten.com/200/300'},
    {
      id: 22, name: 'Brian', quote: 'The greatest day in your life and mine is when we take total responsibility for our attitudes. That\'s the day we truly grow up.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 23, name: 'Charlotte', quote: 'Life is not a problem to be solved, but a reality to be experienced.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 24, name: 'Danesh', quote: 'What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 25, name: 'Evelyn', quote: 'Life is ten percent what happens to you and ninety percent how you respond to it.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 26, name: 'Fatima', quote: 'Believe that life is worth living and your belief will help create the fact.', superlative: '', photo: 'https://placekitten.com/200/300'},
    {
      id: 27, name: 'Glen', quote: 'Life isn\'t about finding yourself. Life is about creating yourself.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 28, name: 'Harriet', quote: 'There is more to life than increasing its speed.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 29, name: 'Isabella', quote: 'Life is really simple, but we insist on making it complicated.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 210, name: 'Jorge', quote: 'Our prime purpose in this life is to help others. And if you can\'t help them, at least don\'t hurt them.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 211, name: 'Kelly', quote: 'There are three constants in life...change, choice and principles.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 212, name: 'Lucia', quote: 'Life\'s most persistent and urgent question is, \'What are you doing for others?', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 213, name: 'Mei', quote: 'Life is a series of natural and spontaneous changes. Don\'t resist them--that only creates sorrow.Let reality be reality.Let things flow naturally forward in whatever way they like.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 214, name: 'Nina', quote: 'Change is the law of life. And those who look only to the past or present are certain to miss the future.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 215, name: 'Ophus', quote: 'Only a life lived for others is a life worthwhile.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 216, name: 'Parker', quote: 'When life is too easy for us, we must beware or we may not be ready to meet the blows which sooner or later come to everyone, rich or poor.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 217, name: 'Quin', quote: 'God gave us the gift of life; it is up to us to give ourselves the gift of living well.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 218, name: 'Rosa', quote: 'We make a living by what we get, but we make a life by what we give.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 219, name: 'Sam', quote: 'All life is an experiment. The more experiments you make the better.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 220, name: 'Tyrese', quote: 'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 221, name: 'Ursula', quote: 'Once you say you\'re going to settle for second, that\'s what happens to you in life.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 222, name: 'Vic', quote: 'There is no passion to be found playing small--in settling for a life that is less than the one you are capable of living.', superlative: '', photo: 'https://placekitten.com/200/300'},
    {
      id: 223, name: 'Whitney', quote: 'If you don\'t design your own life plan, chances are you\'ll fall into someone else\'s plan.And guess what they have planned for you ? Not much.', superlative: '', photo: 'https://placekitten.com/200/300'},
    {
      id: 224, name: 'Xavier', quote: 'I\'ve failed over and over and over again in my life and that is why I succeed.', superlative: '', photo: 'https://placekitten.com/200/300'},
    {
      id: 225, name: 'Yolanda', quote: 'Many of life\'s failures are people who did not realize how close they were to success when they gave up.', superlative: '', photo: 'https://placekitten.com/200/300'},
    { id: 226, name: 'Zach', quote: 'People grow through experience if they meet life honestly and courageously. This is how character is built.', superlative: '', photo: 'https://placekitten.com/200/300'},
  ]
}

module.exports = people;
