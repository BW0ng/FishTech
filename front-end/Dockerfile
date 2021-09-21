FROM node:12.18.3 AS base

LABEL version="1.0"
LABEL description="This is the base docker image for the FishTech tech assessment frontend react app."

WORKDIR /app

# ---------- Builder ----------
# Creates:
# - node_modules: production dependencies (no dev dependencies)
# - build: A production build compiled with Babel
FROM base AS builder
COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --production

COPY . .

# # ---------- Release ----------
# FROM base AS release
# # Yarn doesn't have prune so using install to prune unnecessary modules
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/build ./build
# COPY ["package.json", "./"]

EXPOSE 3000

CMD ["yarn", "start"]