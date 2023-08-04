# action-coscli
> Github actions for coscli.

## usgae
```yml
- name: Use coscli
  uses: afeiship/action-coscli@1.0.0
```

## config
```shell
gh secret set -f ~/.tencent/.env.wms.dicfree.cn
```

## full
```yml
name: coscli test workflow
on: [push]
jobs:
  hello:
    name: test coscli
    runs-on: ubuntu-latest
    env:
      COS_SECRET_ID: ${{ secrets.COS_SECRET_ID }}
      COS_SECRET_KEY: ${{ secrets.COS_SECRET_KEY }}
      COS_REGION: ${{ secrets.COS_REGION }}

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Use coscli
        uses: afeiship/action-coscli@master

      - name: Debug
        run: |
          #check env
          printenv
          coscli --version

          # show config
          coscli config show

          # check .cos.yml file exists
          cd ~
          ls -alh
          cat .cos.yaml
```