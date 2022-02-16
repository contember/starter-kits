# Headless Multilingual CMS starter

With this template we'll use Contember platform as headless CMS and [Next.js](https://nextjs.org/) for frontend site. You'll get:

- Pages with 7 blocks (Hero section, Logos section, Content section, Features section, CTA section, Testimonial section, Contact section)
- Blog and articles with powerful WYSIWYG editor
- Messages for saving forms from the frontend website
- Website settings (upload logotype, set up navigation)
- [ACL rules](https://docs.contember.com/schema/acl) for administrators and public access for frontend website
- Basic Next.js website intentionally without any styling. See how you can easily query GraphQL API Contember provides

Thanks to Contember platform you can change anything. If you have any questions, we're happy to help in [Discord](https://discord.com/invite/EkhsuAK2Fg).

![Screenshot 2022-02-16 at 9 18 33](https://user-images.githubusercontent.com/47249487/154224017-fadc28af-d8fe-460b-8283-70fad176b53b.png)


## How to use this template

You'll need:

- NPM version 7+ (you can check using `npm --version`)
- [Docker](https://docs.docker.com/get-docker/)

### 🚀 Run Headless CMS starter locally

1. Clone this template (`git clone git@github.com:contember/templates.git`)
2. Go to templates > headless-multilingual-cms (`cd templates/headless-multilingual-cms`)
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

- Project: `headless-multilingual-cms` (the only option)
- Role: `public`
- Do you want to add another role?: `n` (no)
- API key description: anything (e.g. `frontend`)
- Are you sure you want to create this API key?: `y` (yes)

Set `NEXT_PUBLIC_TOKEN` in `head/.env` to newly generated API token (replace the default superadmin token) and restart Docker containers (`docker-compose restart`).

### 🌍 Localization

The default language of administration is English. Other supported language is Czech, but you can add any other language. To change the language you just need to do a few steps.

#### Setting the language for UI elements

In the `headless-multilingual-cms/admin/index.tsx` file, add the `defaultLocale` and `dictionaries` props to `<ApplicationEntrypoint />` and import the Czech dictionary from `@contember/i18n`.

```tsx title="headless-multilingual-cms/admin/index.tsx"
import { csCZ } from '@contember/admin-i18n'

<ApplicationEntrypoint
	...
	defaultLocale="cs-CZ"
	dictionaries={{
		'cs-CZ': csCZ,
	}}
/>
```

#### Setting the language for custom components and labels

In the `headless-multilingual-cms/admin/locales/index.ts` file change default export from `enUS` to `csCZ` and import `csCZ` from `./csCZ`.

```ts title="headless-multilingual-cms/admin/locales/index.ts"
import csCZ from './csCZ'

export default csCZ
```

You are ready to go!
