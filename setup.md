## Run from local

1. Install Node, Yarn if not done already

```jsx
Node - sudo apt install npm
Yarn - sudo npm install --global yarn

Steps to update node version if required
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

1. Clone the Repo

```jsx
git clone https://GITHUBUSERNAME@github.com/PicassoExchange/picasso-dex

git config user.name GITHUBUSERNAME
git config user.email GITHUB EMAIL

$ cd picasso-dex
$ yarn
```

1. Configure the Relayer

```jsx

Duplicate the .env.example to .env and fill the values

.env (for staking testnet config)

## Public
APP_BASE_URL=http://localhost:3000
APP_NETWORK=devnet
APP_CHAIN_ID=42
APP_FEE_RECIPIENT=inj1cml96vmptgw99syqrrz8az79xer2pcgp0a885r

## Flags
MAINTENANCE_ENABLED=false
METRICS_ENABLED=false

## Secret
APP_BUGSNAG_KEY=
APP_ALCHEMY_KEY=
APP_ALCHEMY_KOVAN_KEY=
```

1. Start the Relayer

```jsx
yarn run dev
```

1. Start Trading

```jsx
Go to - http://localhost:3000/spot/inj-usdt

Install Google Chrome Metamask Extension
Login to Metamask

Change network to Kovan

Import this private key to Metamask 
`fafb1efedd7805bdbd883758323caae8c1648b38dbef1540141bb6e127ebf548`

Go to - http://localhost:3000/spot/inj-usdt

Start Trading by Buy and Selling INJ

```
