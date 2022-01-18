# Headless CMS starter

With this template we'll use Contember platform as headless CMS and [Next.js](https://nextjs.org/) for frontend site. You'll get:

- Pages with 7 blocks (Hero section, Logos section, Content section, Features section, CTA section, Testimonial section, Contact section)
- Blog and articles with powerful WYSIWYG editor
- Messages for saving forms from the frontend website
- Website settings (upload logotype, set up navigation)
- [ACL rules](https://docs.contember.com/schema/acl) for administrators and public access for frontend website
- Basic Next.js website intentionally without any styling. See how you can easily query GraphQL API Contember provides

Thanks to Contember platform you can change anything. If you have any questions, we're happy to help in [Discord](https://discord.com/invite/EkhsuAK2Fg).

![Screenshot 2022-01-18 at 14 08 17](https://user-images.githubusercontent.com/176694/149993498-f3ce5901-2f6d-4b2d-bc2d-08bd12de6efa.png)

## How to use this template
You'll need:
- NPM version 7+ (you can check using `npm --version`)
- [Docker](https://docs.docker.com/get-docker/)
### Run Headless CMS starter locally
1) Clone this template (`git clone git@github.com:contember/templates.git`)
2) Go to templates > headless-cms (`cd templates/headless-cms`)
3) Install dependencies:

```bash
# For Linux or WSL
npm install

# For Mac or Windows
docker-compose run admin npm install
```

4) Setup database and run migrations:

```bash
docker-compose run contember-migrations
```

5) Generate new public api key for frontend website (you can do this later, but frontend website won't work without it):
```bash
npm run contember tenant:create-api-key
```

Then select:
- Project: `headless-cms` (the only option)
- Role: `public`
- Do you want to add another role?: `n` (no)
- API key description: anything (e.g. `frontend`)
- Are you sure you want to create this API key?: `y` (yes)

6) Add this public API token to newly created `.env` file as `NEXT_PUBLIC_TOKEN`.

```
NEXT_PUBLIC_TOKEN=YOUR_TOKEN_HERE
```

7) Start Docker containers
```bash
docker-compose up
```

*Congratulations, you're done!*

Administration UI is now running at http://localhost:1480 and frontend website is running at http://localhost:3000.
