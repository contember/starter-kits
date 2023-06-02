This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

#### Deploy to Vercel
See [Deploy Next.js to Vercel](https://nextjs.org/docs/deployment). 

> **Warning**
> Be aware that frontend website is in `website` directory, not in the root directory. 
> So you need to set up the following:
>
> | Setting | Value |
> | -------- | ----------- |
> | Build Command | `npm run build-website` |
> | Output Directory | `website/.next` |

##### Environment variables

| Variable | Description |
| -------- | ----------- |
| `NEXT_PUBLIC_TOKEN` | API token for public role (you can create new api token from [Contember Cloud](https://contember.cloud)) [^1] |
| `NEXT_PUBLIC_API_URL` | URL of API (e.g. `https://api-example.contember.cloud/content/example/live`) [^2] |

You are ready to go!

[^1]: You can create new API token from [Contember Cloud](https://contember.cloud) in the project settings. Select project and then click on `Create new API token` button. Select `public` role and click on `Create API key` button. Copy the token and use it as `NEXT_PUBLIC_TOKEN` environment variable.

[^2]: You can find API URL in the project settings in [Contember Cloud](https://contember.cloud). Select project and then look for **Content GraphQL API**. Copy the URL and use it as `NEXT_PUBLIC_API_URL` environment variable.
