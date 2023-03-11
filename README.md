## これは何

portfolio です

web エンジニアなのに portfolio 無いのはマズイかな？と思ったので作りました.

[デプロイ先](https://rurito0125.dev)

## 開発

```shell
# with Docker

# 開発環境の構築
$ docker-compose build

# 起動
$ docker-compose up -d


# with local
# node.js + yarnの環境が必要

# 開発環境の構築
$ yarn

# 起動
$ yarn dev
```

## 技術スタック

Docker + Next.js(SSG) + TypeScript を使いました

css modules で書いてます.

インフラ環境は terraform を用いて構築しています

コードのデプロイなどは GitHub Actions を使っています