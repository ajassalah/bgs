This is a Next.js project for the British Graduate School site.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment variables

Local development uses `.env.local`. The project currently expects:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="p4z69c2l"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-02-26"
SANITY_TOKEN=""
```

For production, keep the public `NEXT_PUBLIC_*` values in GitHub repository variables and keep write tokens only on the server in `.env.production`.

## Deploy with GitHub Actions to a VPS

This repo now includes `.github/workflows/deploy.yml`. It builds the app in GitHub Actions, uploads the standalone Next.js bundle to your server, and restarts it with PM2.

### 1. Server prerequisites

Install Node.js 20+ and PM2 on the server, then create the app directories:

```bash
sudo mkdir -p /var/www/british-graduate-school/shared
sudo mkdir -p /var/www/british-graduate-school/releases
sudo chown -R $USER:$USER /var/www/british-graduate-school
npm install -g pm2
```

Create the production env file on the server:

```bash
cat > /var/www/british-graduate-school/shared/.env.production <<'EOF'
SANITY_API_WRITE_TOKEN=your-sanity-write-token
EOF
```

If you want the app to listen on a different port, also add `PORT=3000` to that file.

### 2. GitHub repository settings

Add these GitHub Secrets:

- `DEPLOY_HOST`: your server IP or hostname
- `DEPLOY_USER`: SSH user
- `DEPLOY_SSH_KEY`: private SSH key for that user
- `DEPLOY_PORT`: SSH port, usually `22`
- `DEPLOY_PATH`: usually `/var/www/british-graduate-school`

Add these GitHub Variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

### 3. First deployment

Push to `main` or `master`, or run the `Deploy to VPS` workflow manually from the Actions tab.

The workflow will:

1. install dependencies
2. lint and build the app
3. upload the standalone production bundle
4. activate a new release under `/var/www/british-graduate-school/current`
5. restart the app with PM2

If the upload step fails with `dial tcp ... i/o timeout`, the GitHub runner cannot reach the SSH port on the server. Check:

- `DEPLOY_HOST` is only the server hostname or IP address, without `http://`, `https://`, or a trailing path
- `DEPLOY_PORT` is the SSH port, usually `22`
- the server firewall allows inbound SSH on that port
- the cloud provider firewall/security group allows inbound SSH from GitHub Actions runners
- `sshd` is running on the server and listening on the configured port

### 4. Reverse proxy

Expose the Node app through Nginx:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

After that, add HTTPS with Certbot.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

For Next.js deployment details, see the [official docs](https://nextjs.org/docs/app/building-your-application/deploying).
