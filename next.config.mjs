const isVercel = !!process.env.VERCEL;
const isGithubPages = !!process.env.GITHUB_ACTIONS;
const repoName = 'Digital-Invitations-Link';
const basePath = !isVercel && isGithubPages ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
