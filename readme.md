# build !

`npm i ; npm run build`

# watch !

`npm run watch`

# what ?

This is a ts project setup aimed to be as minimalistic as possible.

I like projects to be comprehensible... but all ts project starter I found were so huge that
there was no way a normal person could clearly undestand what's going on. This is insane and I don't understand
why people seem to agree to work that way. Maybe everyone is way smarter than I am, or people have no idea what
they are doing and decided not to care... I genuinely can't tell which it is, maybe a bit of both.

This project's dependencies will spend ~60Mb for ts compiler which I guess is fine,
but also ~30Mb for rollup which seems too much, but that's the best I could do so far for these features :
- automatically compile from `src/index.ts` to ecmascript module and vanilla javascript
- automatically recompile on file modification (watch)

If someone knows a way to do that with less deps I'm interested.

