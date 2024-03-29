# Headless CMS starter

With this starter kit we'll use Contember platform as headless CMS and [Next.js](https://nextjs.org/) for frontend site. You'll get:

- Pages with 7 blocks (Hero section, Logos section, Content section, Features section, CTA section, Testimonial section, Contact section)
- Blog and articles with powerful WYSIWYG editor
- Messages for saving forms from the frontend website
- Website settings (upload logotype, set up navigation)
- [Access control rules](https://docs.contember.com/schema/acl) for administrators and public access for frontend website
- Basic Next.js website intentionally without any styling. See how you can easily query GraphQL API Contember provides
- Pages and Articles with SEO support

Thanks to Contember platform you can change anything. If you have any questions, we're happy to help in [Github Discussions](https://github.com/orgs/contember/discussions/categories/support).

![Contember admin - edit page](https://user-images.githubusercontent.com/176694/149993498-f3ce5901-2f6d-4b2d-bc2d-08bd12de6efa.png)

## How to use this starter kit

You'll need:

- NPM version 7+ (you can check using `npm --version`)
- [Docker](https://docs.docker.com/get-docker/)

### 🚀 Run Headless CMS starter locally

1. Clone this starter kit 

```bash
npx degit contember/starter-kits/headless-cms headless-cms
```

2. Go to headless-cms

```bash
cd headless-cms
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

- Project: `headless-cms` (the only option)
- Role: `public`
- Do you want to add another role?: `n` (no)
- API key description: anything (e.g. `frontend`)
- Are you sure you want to create this API key?: `y` (yes)

Set `NEXT_PUBLIC_TOKEN` in `headless-cms/website/.env` to newly generated API token (replace the default superadmin token) and restart Docker containers (`docker-compose restart`).

### 🌍 Localization

The default language of administration is English. Other supported language is Czech, but you can add any other language. To change the language you just need to do a few steps.

#### Setting the language for UI elements

In the `headless-cms/admin/index.tsx` file, add the `defaultLocale` and `dictionaries` props to `<ApplicationEntrypoint />` and import the Czech dictionary from `@contember/i18n`.

```tsx title="headless-cms/admin/index.tsx"
import { csCZ } from "@contember/admin-i18n"

<ApplicationEntrypoint
	...
	defaultLocale="cs-CZ"
	dictionaries={{
		"cs-CZ": csCZ,
	}}
/>
```

#### Setting the language for custom components and labels

In the `headless-cms/admin/locales/index.ts` file change default export from `enUS` to `csCZ` and import `csCZ` from `./csCZ`.

```ts title="headless-cms/admin/locales/index.ts"
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
| `NEXT_PUBLIC_WEB_URL` | URL of frontend website (e.g. `https://example.com`) |

You are ready to go!

[^1]: You can create new API token from [Contember Cloud](https://contember.cloud) in the project settings. Select project and then click on `Create new API token` button. Select `public` role and click on `Create API key` button. Copy the token and use it as `NEXT_PUBLIC_TOKEN` environment variable.

[^2]: You can find API URL in the project settings in [Contember Cloud](https://contember.cloud). Select project and then look for **Content GraphQL API**. Copy the URL and use it as `NEXT_PUBLIC_API_URL` environment variable.
