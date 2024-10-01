FROM node:20.12.1-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV $NODE_ENV
RUN corepack enable

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm install turbo --global
RUN turbo prune client --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
RUN pnpm install --no-frozen-lockfile
COPY --from=builder /app/out/full/ .
RUN pnpm turbo build --filter=client...

FROM base AS development
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
RUN chown -R node:node /app
USER node
COPY --from=installer --chown=node:node /app .
RUN pnpm install --no-frozen-lockfile

FROM base AS production
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    mkdir .next && \
    chown nextjs:nodejs .next
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/client/.next/static ./apps/client/.next/static
USER nextjs
EXPOSE 80
ENV PORT=80
ENV HOSTNAME="0.0.0.0"
CMD ["node", "apps/client/server.js"]
