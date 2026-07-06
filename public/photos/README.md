# Quincy's photos

Drop his real pictures in this folder, then point the site at them.

## The big hero photo (top of the homepage)

Save your favorite portrait as:

```
public/photos/hero.jpg
```

Then open `src/pages/index.astro`, find the block that says
`Quincy's photo goes here`, and replace it with:

```html
<img src="/photos/hero.jpg" alt="Quincy the Bedlington" />
```

## The photo wall (gallery)

The six tiles on the homepage are placeholders right now. When you have
real photos, save them here (for example `gallery-1.jpg` ... `gallery-6.jpg`)
and swap the emoji tiles in `src/pages/index.astro` for `<img>` tags the
same way.

Tips:
- JPG or PNG both work. Keep each photo under ~500 KB so pages load fast.
- Square-ish photos look best in the gallery grid.
```
