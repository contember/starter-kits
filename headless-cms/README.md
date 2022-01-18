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
1) You'll need NPM version 7+
2) You'll need Docker with Docker compose
### Run Headless CMS starter locally
1) Clone this template
2) Go to templates > headless-cms
3) Run

```bash
# For Linux or WSL
npm install

# For Mac or Windows
docker-compose run admin npm install
```

4) Generate new public api key for frontend website (you can do this later, but frontend website won't work without it)
```bash
npm run contember tenant:create-api-key
```
5) Add this public API key to the `.env` file as `NEXT_PUBLIC_TOKEN`.

6) Start Docker containers
```bash
docker-compose up
```

*Congratulations, you're done!*

Administration UI is now running at http://localhost:1480 and head is running at http://localhost:3000.
