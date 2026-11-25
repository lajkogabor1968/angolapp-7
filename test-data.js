'use strict';
// Each row: prompt | correct answer | distractors (or alternative accepted answers for typed items).
const testRows=(text,kind='choice',points=1)=>text.trim().split('\n').map(line=>{const [prompt,answer,...rest]=line.split('|');return {prompt,answer,kind,points,...(kind==='choice'?{wrong:rest}:{alternatives:rest})}});
const assessmentBank=[
{id:'unit3',title:'Quiz · Unit 3',description:'A 3. lecke szókincse és nyelvtana (20 pont).',sections:[{title:'Choose a, b or c.',items:testRows(`Thomas Edison's ___ of the light bulb changed the world and people's lives.|invention|expedition|century
Amelia Earhart ___ a plane to Northern Ireland in 1932.|flew|flies|fly
My father ___ two years ago and now he's got a lot of free time.|retired|decided|joined
Don't play near the road. It's ___.|dangerous|curious|excited
Lucy wants to become an artist. She draws ___.|beautifully|terribly|badly
My uncle is a(n) ___. He's got a lab in his house.|inventor|builder|trainer
Andy ___ find his new cap this morning. His mother helped him find it.|couldn't|can't|could
Julie wants to work in the History Museum when she ___ from university.|graduates|invents|happens
___ a lot of children at the skatepark yesterday?|Were there|Was there|There were
I will never forget that hot-air balloon ride. It was an amazing ___.|experience|dream|ocean
I ___ history when I was younger, but now I love it.|didn't like|like|liked
Vasco da Gama was a very famous ___. He travelled from Europe to India.|explorer|astronaut|space
That activity was very ___. I did it in one minute.|easy|difficult|easily
I read a story to my friends. They ___ and said it was really funny.|laughed|discovered|continued
My sister ___ climb trees when she was three years old, but now she can't.|could|couldn't|can
I want to become a doctor and help ill people. I hope I have a great ___ at a big hospital in the future.|career|scientist|university
A: Could you run fast when you were five years old? B: No, I ___.|couldn't|can't|could
There aren't any biscuits in the jar. Henry ate the ___ biscuit this morning.|last|fast|top
Dad is a very ___ driver.|careful|carefully|well
I ___ for the maths test. I forgot it was today.|didn't study|studied|study`)}]},
{id:'unit4',title:'Quiz · Unit 4',description:'A 4. lecke szókincse és nyelvtana (20 pont). A 4. lecke tananyagát később bővítjük.',sections:[{title:'Choose a, b or c.',items:testRows(`My grandad lives in Bath and my family and I visit ___ every month.|him|he|her
Fred and I said goodbye and then he went in a different ___.|direction|temperature|information
I don't want to travel by plane ever again! I was very ___ every time I flew.|scared|boring|interesting
My little brother ___ eat broccoli when he was five years old, but now he hates it.|used to|used|didn't use
You can ___ the app from this website.|download|chat|turn on
___! I won the gold medal in the swimming competition yesterday!|Guess what|Don't worry|Congratulations
Anne ___ play basketball, but now she's the best basketball player in the school team.|didn't use to|used to|use
We've got a GPS. We don't need a ___.|compass|detail|spacecraft
Mum, Tim and I are leaving. ___ are going to basketball practice.|We|He|Us
The ___ to Germany was three hours long.|flight|action|seat
A: Did you use to drive a red car? B: No, I ___.|didn't|did|didn't use
A: I decided to start karate lessons. B: ___! Karate is very dangerous. What about swimming?|Forget it|Lucky you|Good for you
I can't see anything in this cave. Have you got a ___?|torch|backpack|map
Jason ___ make paper planes when he was six years old, but now he thinks it's boring.|used to|use|used
I love maths. ___ is my favourite school subject.|It|They|He
My dad didn't ___ let me go to the shopping centre with my friends.|use to|used to|use
I live on the tenth floor. I have a beautiful ___ of the city of London from my bedroom window.|view|galaxy|planetarium
Mum bought a present for me and my sister. She gave ___ the present on Sunday.|us|her|me
Venus is the hottest ___.|planet|moon|solar system
When Mr Rogers entered the classroom, the children said good morning to ___.|him|them|he`)}]},
{id:'module2',title:'Témazáró · Module 2 (Units 3 & 4)',description:'A forrás szerinti 75 pontos szerkezet: 65 automatikus pont + 10 tanári íráspont. A hallásértéshez új gyakorlóhang készült, nem az eredeti felvétel.',sections:[
{title:'Vocabulary A · Match (6 points)',items:testRows(`grow ___|old|online|a video call|a text message|university|the Internet
chat ___|online|old|a video call|a text message|university|the Internet
make ___|a video call|online|old|a text message|university|the Internet
use ___|the Internet|online|old|a video call|a text message|university
send ___|a text message|online|old|a video call|university|the Internet
graduate from ___|university|online|old|a video call|a text message|the Internet`)},
{title:'Vocabulary B · Choose (8 points)',items:testRows(`My grandfather ___ when he was sixty-five years old.|retired|was born
Two months later, the climbers ___ the top of the mountain.|reached|decided
You can find ___ to help you with your project on the Internet.|information|direction
Mark Andrews was the ___ of the competition.|winner|win
Your backpack is very ___. What's in it?|heavy|curious
How long is the ___ from Manchester to Liverpool?|journey|map
The explorers went on an ___ to Antarctica.|expedition|experience
The ___ landed on the moon.|spaceship|galaxy`)},
{title:'Vocabulary C · Complete (7 points)',wordBank:['dark','scientist','excited','print','trainer','turn','dream'],items:testRows(`It was his ___ to become a famous painter.|dream
Let's go home. It's getting ___.|dark
Oliver is a ___ and works at a gym.|trainer
Did you remember to ___ off the computer?|turn
I didn't ___ the document because I've got it on my mobile phone.|print
The ___ invented a new gadget.|scientist
Tony was very ___ when he visited the planetarium.|excited`,'text')},
{title:'Communication (6 points)',items:testRows(`A: What's the weather like? B: ___|It's hot.|It's interesting.
A: We won the basketball game. B: ___|Congratulations!|Listen to this!
A: ___ B: A few hours.|How long did the flight last?|When did your flight land?
A: I forgot to take my mobile phone with me. B: ___ I've got my phone.|Don't worry.|Good for you!
A: ___ I got a new bike. B: Lucky you!|Guess what!|Tell me about it.
A: How are things? B: ___|I'm fine.|I can't believe it.`)},
{title:'Grammar A · Past Simple (10 points)',items:testRows(`The astronaut ___ (travel) to space.|travelled|traveled
He ___ (not walk) on the moon.|didn't walk|did not walk
How ___ (be) your flight?|was
My brothers ___ (not can) play tennis when they were ten.|couldn't|could not
My brothers couldn't play tennis when they ___ (be) ten.|were
In the past, Jason ___ (want) to become a writer.|wanted
I ___ (not buy) sunglasses.|didn't buy|did not buy
I didn't buy sunglasses, but I ___ (get) a hat.|got
When ___ you ___ (paint) this picture? Írd be a két hiányzó szót, szóközzel elválasztva!|did paint
We ___ (have) a great time at the amusement park yesterday.|had`,'text')},
{title:'Grammar B · Used to (4 points)',wordBank:['travel','not tidy','swim','not go'],items:testRows(`Ian ___ in the sea, but now he only swims in the pool.|used to swim
In the past, they ___ shopping at the shopping centre, but now they do.|didn't use to go|did not use to go
Jenny ___ to the US every year, but she doesn't anymore.|used to travel
I ___ my room when I was ten, but I do now.|didn't use to tidy|did not use to tidy`,'text')},
{title:'Grammar C · Adjectives and adverbs (5 points)',items:testRows(`Bill is a very good driver. He drives very ___ (careful).|carefully
That's ___ (wonderful) news! Congratulations!|wonderful
He didn't win the race, because he doesn't run very ___ (quick).|quickly
Gabby never goes to bed ___ (late) on weekdays.|late
She wants to be a photographer, but her pictures are ___ (terrible).|terrible`,'text')},
{title:'Grammar D · Choose (5 points)',items:testRows(`My brother has got a compass, but ___ doesn't know how to use it.|he|him
We went on the roller coaster ride two days ___.|ago|last
She didn't like the pictures, so she deleted ___.|them|it
He lost his first tooth last ___.|year|yesterday
Do you want to come with ___?|us|we`)},
{title:'Listening · Új gyakorlóhang (6 points)',audio:'audio/tests/module2.mp3',audioNotice:'A tankönyvi hangfelvétel nem áll rendelkezésre. Az alábbi, saját készítésű hanganyaghoz tartoznak a válaszok.',transcript:'Interviewer: Ted, how long did you stay in space? Ted: I stayed there for six months. I was excited to see the Earth from space. Interviewer: When did you first become interested in space? Ted: I was eleven when my class visited a planetarium. After that, I wanted to become an astronaut.',items:testRows(`How long did Ted Walker stay in space?|six months|four months
How did Ted Walker feel when he was in space?|excited|scared
How old was Ted Walker when he went on a school trip to a planetarium?|11|6`,'choice',2)},
{title:'Reading · My first bike (8 points)',reading:`Hi, I'm Ted and I love cycling. I got my first bike at the age of five. It was purple and green. My favourite colours! I can remember when my parents gave it to me. My dad took me into our garden and there it was! I couldn't ride a bike, so my parents took me to the park to practise. My mum was a bit scared. She didn't want me to fall off, so she told me to be very careful and to ride slowly. When I sat on the seat and rode for the first time, I didn't feel scared. I was just excited! It wasn't very difficult and after an hour, I could ride it very easily. 'This is great fun!' I thought.`,items:testRows(`What colour was Ted's first bike?|It was purple and green.|purple and green|green and purple|It was green and purple.
Where did Ted ride his new bike for the first time?|In the park.|the park|at the park|He rode it in the park.|He rode his bike in the park.
How did Ted feel the first time he rode his bike?|He was excited.|excited|He felt excited.|He was just excited.
Did Ted think that learning to ride a bike was difficult?|No, he didn't.|no|No, it wasn't.|No, he did not.|He didn't think it was difficult.`,'text',2)},
],writing:{points:10,title:'Writing · An email to a friend',prompt:'Write an email to a friend telling him/her about a visit to an interesting place (amusement park / planetarium / skatepark / museum / aquarium).',questions:['When did you go?','Where did you go?','Who was with you?','How did you get there?','What did you do?','Did you have fun?','Do you want to visit the place again?']}}
];
