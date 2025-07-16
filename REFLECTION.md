### CS 81 Module 6 Assignment 6A: Code Review, by GregH, 7/15/25

#### What was the hardest part to understand?

**.prototype.** ChatGPT explained it to me, which helped a lot. As much as I like the writing style of "Eloquent JavaScript", and the conceptual explanations are great, it doesn't clearly explain the code examples, especially in this chapter (6, Objects). I think the writer wants us to work at understanding the code and figure it out ourselves with limited guidance, which I get, but as we progress and the code gets less familiar, it's not working well for me. It's okay, because I can ask AI.

#### How does this code use this to tie data and behavior together?

Every custom method (a.k.a., behavior) uses the 'this' keyword to access the data stored in the attached object.

#### What would you do differently if you wrote this object from scratch?

I would make the playlists' song lists more enduring (e.g., skipping a song wouldn't delete it from the playlist), and I would write the code in JavaScript's modern class syntax.