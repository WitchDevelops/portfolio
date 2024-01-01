# What I learned
How to use Framer Motion (it's so simple yet so cool)
How to use higher order components
How to use a headless CMS ([Sanity](https://www.sanity.io/docs/create-a-sanity-project))
How to hide API keys and other sensitive information
That React provides a very useful icon library called [react-icons](https://react-icons.github.io/react-icons/icons/ai/)

# notes

1. since the release of this tutorial, Sanity got a major upgrade and lots of the stuff showed in the tutorial just doesn't work. The list of differences between versio 2 and 3 can be found [here](https://www.sanity.io/help/studio-v2-vs-v3).

*  `sanity start` in Sanity Studio 3 is used to preview static builds. To run a development server, use the `npm run dev` command.

* @sanity/client

`sanityClient` got replaced by `createClient` ([docs](https://www.sanity.io/docs/js-client))

2. process.env doesn't work with Vite, using it results in `Uncaught ReferenceError: process is not defined`.

>Overall I'm new to using environment variables for security, e.g. to store API keys etc., so it's the first time I've encountered this error. Hiding sensitive information is a must, but it's not an easy task and requires some backend. More info: [YT video: how to hide your API keys](https://youtu.be/FcwfjMebjTU?si=QYalbItHNe8RtCYi)

* it's a known issue: [StackOverflow](https://stackoverflow.com/questions/11104028/why-is-process-env-node-env-undefined)
* apparently `process` is a Node variable ([Reddit](https://www.reddit.com/r/reactjs/comments/m452dv/processenv_process_is_not_defined/))
* solution: [dev.to article](https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg)
* reference: [Vite docs](https://vitejs.dev/guide/env-and-mode)

3. React tooltip also got an update and a few things had changed. It's all in the docs for the npm package: [docs](https://www.npmjs.com/package/react-tooltip)

# TODO

- Make it send forms to my email
(try this: [webhooks](https://www.sanity.io/answers/using-webhooks-and-netlify-functions-for-email-notifications-in-sanity))
read [Sanity docs](https://www.sanity.io/docs/webhooks)
- and a confirmation email to the sender [postmarkapp](https://www.sanity.io/answers/i-m-building-an-e-commerce-store-and-i-m-wondering-p1612190591079400)

- FORM VALIDATION, atm there is absolutely none
- get some testimonials
- reverse the order of work experiences
- add a downloadable CV
- add more projects

# HOW TO

## Run Sanity studio from CLI
1. cd to `backend_sanity`
2. ~~`sanity start`~~ deprecated, run `npm run dev`
3. go to `http://localhost:3333/structure`

there's also `sanity manage` that opens project settings

## Make Sanity send data to given domain
1. cd to `backend_sanity`
2. `sanity manage`
3. API tab
4. under CORS orgins click "add CORS origin"
5. paste your domain name, allow credentials
6. it should now send data to the given endpoint.

# Attributions

- Photo of house fronts in Copenhagen by [Rolands Varsbergs](https://pixabay.com/users/varsbergsrolands-11846303/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4054563)from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4054563)

- Lightbulb in space by [愚木混株 Cdd20](https://pixabay.com/users/cdd20-1193381/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5831252) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5831252)

- Picture of paints and brushes by [Pexels](https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1851483) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1851483)

- favicon generated with [realfavicongenerator.net]()

