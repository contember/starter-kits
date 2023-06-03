# Form builder starter

With this start kit we'll use Contember platform as headless form builder and [Next.js](https://nextjs.org/) for frontend site. You'll get:

- Forms with 8 input blocks (Short answer, Long answer, Multiple choise, Check boxes, Drop down, File upload, Date, Date and time)
- Saving form responses from the frontend website
- [Access control rules](https://docs.contember.com/schema/acl) for administrators and public access for frontend website
- Basic Next.js website. See how you can easily query GraphQL API Contember provides

Thanks to Contember platform you can change anything. If you have any questions, we're happy to help in [Github Discussions](https://github.com/orgs/contember/discussions/categories/support).

### Administration preview
![Contember admin - edit forms](https://user-images.githubusercontent.com/47249487/155489327-f87384a3-a4ad-41a9-8989-1d19c07e8867.png)

### Frontend preview
![Form builder frontend](https://user-images.githubusercontent.com/47249487/155488988-f0310383-3db4-40cb-9154-9394f2aaa1f3.png)

## How to use this starter kit

You'll need:

- NPM version 7+ (you can check using `npm --version`)
- [Docker](https://docs.docker.com/get-docker/)

### 🚀 Run Form builder starter locally

1. Clone this starter kit

```bash
npx degit contember/starter-kits/form-builder form-builder
```

2. Go to form-builder

```bash
cd form-builder
```

3. Install dependencies:

```bash
npm install
```

4. Start project:

```bash
npm start
```

This command will start Admin application and all docker containers (Contember Engine, Postgres, S3, Mailhog and Adminer). When you are done developing, you can stop docker containers by `docker-compose down`.

_Congratulations, you're done!_

Administration UI is now running at http://localhost:1480 and frontend website is running at http://localhost:3000.

### 🔒 Secure setup

By default frontend has full access to all contember (including updating and deleting anything). To make it secure we need to use token with only limited privileges.

Generate new public api key for frontend website (you can do this later, but frontend website won't work without it):

```bash
npm run contember tenant:create-api-key
```

Then select:

- Project: `form-builder` (the only option)
- Role: `public`
- Do you want to add another role?: `n` (no)
- API key description: anything (e.g. `frontend`)
- Are you sure you want to create this API key?: `y` (yes)

Set `NEXT_PUBLIC_TOKEN` in `form-builder/website/.env` to newly generated API token (replace the default superadmin token) and restart Docker containers (`docker-compose restart`).

### 🌍 Localization

The default language of administration is English. Other supported language is Czech, but you can add any other language. To change the language you just need to do a few steps.

#### Setting the language for UI elements

In the `form-builder/admin/index.tsx` file, add the `defaultLocale` and `dictionaries` props to `<ApplicationEntrypoint />` and import the Czech dictionary from `@contember/i18n`.

```tsx title="form-builder/admin/index.tsx"
import { csCZ } from "@contember/admin-i18n"

<ApplicationEntrypoint
	...
	defaultLocale="cs-CZ"
	dictionaries={{
		'cs-CZ': csCZ,
	}}
/>
```

#### Setting the language for custom components and labels

In the `form-builder/admin/locales/index.ts` file change default export from `enUS` to `csCZ` and import `csCZ` from `./csCZ`.

```ts title="form-builder/admin/locales/index.ts"
import csCZ from "./csCZ"

export default csCZ
```

### 🎢 Deploy

Api and Admin can be deployed to Contember Cloud. See [Deploy to Contember Cloud](https://docs.contember.com/guides/deploy-contember).

> **Note**
> You should deploy Admin and API to Contember Cloud and then deploy frontend website. This is because frontend website needs to be able to access API in order to work properly.

Frontend website can be deployed to any hosting provider. 

#### Deploy to Vercel
See [Deploy Next.js to Vercel](https://nextjs.org/docs/deployment). 

Be aware that frontend website is in `website` directory, not in the root directory. So you need to set `Build Command` to `npm run build-website` and `Output Directory` to `website/.next`.

##### Environment variables

| Variable | Description |
| -------- | ----------- |
| `NEXT_PUBLIC_TOKEN` | API token for public role |
| `NEXT_PUBLIC_API_URL` | URL of API (e.g. `https://api-example.contember.cloud/content/example/live`) |

You are ready to go!
