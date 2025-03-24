This is a [Next.js](https://nextjs.org) boilerplate project.

## Getting Started

First, create your app using this command:

```bash
npx create-next-app@latest --example "https://github.com/andremoraes98/next-js-boilerplate" [your-project-name]
```

And add any project name that you want. After that, run any of these (depends of what package manage you want to use):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

And then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file and you can edit `src/styles/theme.ts` to tranform CSS theme variables according to your Design System!

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tecnologies

This boilerplait runs into Node 22.13.0 and contains:

- TypeScript (^5);
- Styled components (^6.1.14);
- Storybook (^8.5.2);
- Jest (^29.7.0);
  - with dom and styled components configuration.
- React testing library (^16.2.0);
- Prettier (3.4.2);
  - with all nexts plugins.
- Eslint (^9);
- Lint staged (^15.4.1);
  - with husky, to run tests, prettier and eslint.
