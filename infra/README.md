## これは何

terraform を用いて Vercel に自動デプロイするコード置き場です

tfstate は terraform cloud に配置してます

### 使い方

基本的には GitHub Actions 上で plan や apply を実施するため、ローカルで何かを行う必要はない

```bash
# リポジトリ持ってきたらやる
terraform init

# 構成を変更した際に確認
terraform plan --var-file=vercel.tfvars

# 構成をリモートに反映
terraform apply --var-file=vercel.tfvars
```

### secrets の設定

ローカル環境で実行する際には `vercel.tfvars` ファイルを作成して token を配置してください。

また terraform cloud との接続設定を行っていない場合は実施してください

GitHub Actions 側では Actions の Secrets の設定から各 token を設定してください