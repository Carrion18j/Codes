const jokes = [
  `1. What do you call a boomerang that won t come back?
    A stick.`,

  `2. What does a cloud wear under his raincoat?
    Thunderwear.`,

  `3. Two pickles fell out of a jar onto the floor. What did one say to the other?
    Dill with it.`,

  `4. What time is it when the clock strikes 13?
    Time to get a new clock.`,

  `5. How does a cucumber become a pickle?
    It goes through a jarring experience.`,

  `6. What did one toilet say to the other?
    You look a bit flushed.`,

  `7. What do you think of that new diner on the moon?
    Food was good, but there really wasn t much atmosphere.`,

  `8. Why did the dinosaur cross the road?
    Because the chicken wasn t born yet.`,

  `9. Why can t Elsa from Frozen have a balloon?
    Because she will "let it go, let it go."`,

  `10. What musical instrument is found in the bathroom?
    A tuba toothpaste.`,

  `11. Why did the kid bring a ladder to school?
    Because she wanted to go to high school.`,

  `12. What do you call a dog magician?
    A labracadabrador.`,

  `13. Where would you find an elephant?
    The same place you lost her.`,

  `14. How do you get a squirrel to like you?
    Act like a nut.`,

  `15. What do you call two birds in love?
    Tweethearts`,

  `16. How does a scientist freshen her breath?
    With experi-mints.`,

  `17. How are false teeth like stars?
    They come out at night.`,

  `18. What building in your town has the most stories?
    The public library.`,

  `19. What s worse than finding a worm in your apple?
    Finding half a worm.`,

  `20. What is a computer's favorite snack?
    Computer chips.`,

  `21. What did one volcano say to the other?
    I lava you.`,

  `22. How do we know that the ocean is friendly?
    It waves.`,

  `23. What is a tornado s favorite game to play?
    Twister.`,

  `24. How does the moon cut his hair?
    Eclipse it.`,

  `25. How do you talk to a giant?
    Use big words.`,

  `26. What animal is always at a baseball game?
    A bat.`,

  `27. What falls in winter but never gets hurt?
    Snow.`,

  `28. What did the Dalmatian say after lunch?
    That hit the spot.`,

  `29. Why did the kid cross the playground?
    To get to the other slide.`,

  `30. What do you call a droid that takes the long way around?
    detour.`,

  `31. Why did the cookie go to the hospital?
    Because he felt crummy.`,

  `32. Why was the baby strawberry crying?
    Because her mom and dad were in a jam.`,

  `33. What did the little corn say to the mama corn?
    Where is pop corn?`,

  `34. How do you make a lemon drop?
    Just let it fall.`,

  `35. What did the limestone say to the geologist?
    Don t take me for granite.`,

  `36. Why does a seagull fly over the sea?
    Because if it flew over the bay, it would be a baygull.`,

  `37. What kind of water can t freeze?
    Hot water.`,

  `38. What kind of tree fits in your hand?
    A palm tree.`,

  `39. What do you call a dinosaur that is sleeping?
    A dino-snore.`,

  `40. What is fast, loud and crunchy?
    A rocket chip.`,

  `41. Why did the teddy bear say no to dessert?
    Because she was stuffed.`,

  `42. What has ears but cannot hear?
    A cornfield.`,

  `43. What did the left eye say to the right eye?
    Between us, something smells.`,

  `44. What did one plate say to the other plate?
    Dinner is on me.`,

  `45. Why did the student eat his homework?
    Because the teacher told him it was a piece of cake.`,

  `46. When you look for something, why is it always in the last place you look?
    Because when you find it, you stop looking.`,

  `47. What is brown, hairy and wears sunglasses?
    A coconut on vacation.`,

  `48. What do you say to a rabbit on its birthday?
    Hoppy Birthday.`,

  `49. Whats the one thing will you get every year on your birthday, guaranteed?
    A year older.`,

  `50. Why do candles always go on the top of cakes?
    Because it's hard to light them from the bottom.`,

  `51. What do cakes and baseball teams have in common?
    They both need a good batter.`,

  ` 52. What goes up but never comes down?
    Your age.`,

  `53. What does every birthday end with?
    The letter Y.`,

  `54. What did the tiger say to her cub on his birthday?
    It's roar birthday.`,

  `55. Why did the girl put her cake in the freezer?
    She wanted to ice it.`,

  `56. Does a green candle burn longer than a pink one?
    No, they both burn shorter.`,

  `57. Why did the little girl hit her birthday cake with a hammer?
    It was a pound cake.`,
];

const whatJoke = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const buttone = () => {
  document.getElementsByClassName("text")[0].innerHTML =
    jokes[whatJoke(0, jokes.length - 1)];
};
