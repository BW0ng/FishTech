FROM node:12.18.3 AS base

LABEL version="1.0"
LABEL description="This is the base docker image for the FishTech tech assessment backend nodejs app."

WORKDIR /app

# ---------- Builder ----------
# Creates:
# - node_modules: production dependencies (no dev dependencies)
# - build: A production build compiled with Babel
FROM base AS builder
COPY ["package.json", "yarn.lock", ".babelrc", "./"]

RUN yarn install

COPY . .

RUN yarn clean
RUN yarn build

# ---------- Release ----------
FROM base AS release
# Yarn doesn't have prune so using install to prune unnecessary modules
RUN yarn install --production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
# Copying over the graphql type definitions since babel doesn't copy them
COPY ["./src/graphql/typedefs/", "./build/graphql/typedefs"]
# Copying over the package json for the production build
COPY ["package.json", "./"]

EXPOSE 4000

CMD ["yarn", "start"]