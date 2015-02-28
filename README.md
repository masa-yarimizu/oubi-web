oubi-web
=================

## Requires

* ansible 1.8

## Getting started

まず、vagrantディレクトリでvagrantを立ち上げてください

  ```bash
  $ vagrant up
  ```

また、ansibleが必要なのでyumとかでinstallしてください。
インストールできたらansibleディレクトリで以下のコマンドを実行してください

  ```bash
  $ ansible-playbook -i local web_servers.yml
  ```
実行が終了したらブラウザでhttp://192.168.33.10/にアクセスすればwebページが表示されます。
