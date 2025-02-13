# What is it

It's the source code for my personal portfolio. The site is deployed at https://www.mokosh.dev/.

# What I learned

* How to send data directly to my inbox using [EmailJS library](https://www.emailjs.com/)
* How to use Framer Motion (it's so simple yet so cool)
* How to use higher order components
* How to use a headless CMS ([Sanity](https://www.sanity.io/docs/create-a-sanity-project))
* How to hide API keys and other sensitive information
* That React provides a very useful icon library called [react-icons](https://react-icons.github.io/react-icons/icons/ai/)

# Notes

1. I followed a [JSM tutorial](https://youtu.be/3HNyXCPDQ7Q?si=5iNY6y6zRhs8tBGZ) to create this project. Since the release of this tutorial, Sanity got a major upgrade and lots of the stuff showed in the tutorial just don't work anymore. The list of differences between version 2 and 3 can be found [here](https://www.sanity.io/help/studio-v2-vs-v3).

*  `sanity start` in Sanity Studio 3 is used to preview static builds. To run a development server, use the `npm run dev` command.

* @sanity/client

`sanityClient` got replaced by `createClient` ([docs](https://www.sanity.io/docs/js-client))

2. The tutorial used `create-react-app`, but I used Vite to scaffold the project. `process.env` doesn't work with Vite, using it results in `Uncaught ReferenceError: process is not defined`.

>Overall I'm new to using environment variables for security, e.g. to store API keys etc., so it's the first time I've encountered this error. Hiding sensitive information is a must, but it's not an easy task and requires some backend. More info: [YT video: how to hide your API keys](https://youtu.be/FcwfjMebjTU?si=QYalbItHNe8RtCYi)

* it's a known issue: [StackOverflow](https://stackoverflow.com/questions/11104028/why-is-process-env-node-env-undefined)
* `process` is a Node variable ([Node docs](https://nodejs.org/api/process.html#process))
* solution: [dev.to article](https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg)
* reference: [Vite docs](https://vitejs.dev/guide/env-and-mode)

[edit: 2025-02]

Now that I have more experience, using `.env` to store the API keys is a very logical thing to do and considered good practice. Interestingly enough, the Sanity project ID can be seen in the request URL, but the access token remains hidden. The reason why the project ID is exposed may be due to how Sanity works, or something else - need to investigate.

3. React tooltip also got an update and a few things had changed. It's all in the docs for the npm package: [docs](https://www.npmjs.com/package/react-tooltip)

# TODO

- reverse the order of work experiences - redo, delete tooltip
- add a downloadable CV
- add more projects

# HOW TO

## Run Sanity studio from CLI
1. cd to `backend_sanity`
2. ~~`sanity start`~~ deprecated, run `npm run dev`
3. go to `http://localhost:3333/structure`

there's also `sanity manage` that opens project settings.
If there's a prompt to authenticate, use GitHub credentials.

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

