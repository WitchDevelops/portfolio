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